class CreateWineUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :wine_users do |t|
      t.integer :user_id
      t.integer :wine_id

      t.timestamps
    end
  end
end
