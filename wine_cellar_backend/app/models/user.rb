class User < ApplicationRecord
    # has_secure_password #validation presence of password
    has_many :wine_users, dependent: :destroy
    has_many :wines, :through => :wine_users
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates_uniqueness_of :first_name, scope: :last_name

end

