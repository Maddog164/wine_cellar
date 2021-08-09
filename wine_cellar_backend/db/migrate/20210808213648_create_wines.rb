class CreateWines < ActiveRecord::Migration[6.0]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :color
      t.string :grape
      t.integer :avg_price

      t.timestamps
    end
  end
end
