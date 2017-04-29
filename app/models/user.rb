class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :resumes
  # 試做評論功能
  has_many :jobs
  has_many :reviews
# 以上

  def admin?
    is_admin
  end
end
