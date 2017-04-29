class Review < ApplicationRecord
  # 試做回覆功能
  belongs_to :user
  belongs_to :job

  validates :content, presence: true
end
