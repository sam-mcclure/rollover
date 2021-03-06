# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  post_type  :string           not null
#  title      :string
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :post_type, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes

  has_many :users_who_like,
    through: :likes,
    source: :user

  has_one_attached :photo
  has_one_attached :video
  has_one_attached :audio

  def find_like(user_id)
    like = Like.where(user_id: user_id).where(post_id: self.id).select(:id).first
    like ? like.id : nil
  end
end
