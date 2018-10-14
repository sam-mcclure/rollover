# == Schema Information
#
# Table name: follows
#
#  id               :bigint(8)        not null, primary key
#  user_id          :integer          not null
#  followed_user_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Follow < ApplicationRecord
  validates :user_id, :followed_user_id, presence: true
  validates :followed_user, uniqueness: { scope: :followee }

  belongs_to :followee,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :followed_user,
    foreign_key: :followed_user_id,
    class_name: :User
end
