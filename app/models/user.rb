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
    class_name: :Post,
    dependent: :destroy

  has_many :follows,
    foreign_key: :user_id,
    class_name: :Follow

  has_many :followed_users,
    through: :follows,
    source: :followed_user

  has_many :user_follows,
    foreign_key: :followed_user_id,
    class_name: :Follow

  has_many :followers,
    through: :user_follows,
    source: :followee

  has_many :likes

  has_many :liked_posts,
    through: :likes,
    source: :post

  attr_reader :password

  def default_photo
    if !self.photo.attached?
      file = File.open('app/assets/images/default-photo.jpg')
      self.photo.attach(io: file,
      filename: 'default-photo.jpg', content_type: 'image/jpg')
    end
  end

  def unfollowed_users
    User.where.not(id: self.id).where.not(id: Follow.select(:followed_user_id).where(user_id: self.id)).limit(4)
  end

  def find_follow(followee_id)
    follow = Follow.where(user_id: followee_id).where(followed_user_id: self.id).select(:id).first
    follow ? follow.id : nil
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
