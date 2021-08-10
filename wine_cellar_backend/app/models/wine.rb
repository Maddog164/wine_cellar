class Wine < ApplicationRecord
    has_many :wine_users, dependent: :destroy
    has_many :users, :through => :wine_users

    validates :name, presence: true
    validates :name, uniqueness: {:scope=>:user_id}
end
