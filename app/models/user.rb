# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :text             not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  after_create :default_photo

  has_one_attached :photo

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  attr_reader :password

  def default_photo
    if !self.photo.attached?
      file = File.open('app/assets/images/default-photo.jpeg')
      self.photo.attach(io: file,
      filename: 'default-photo.jpeg', content_type: 'image/jpeg')
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

end
