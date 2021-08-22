class AddCountryToWines < ActiveRecord::Migration[6.0]
  def change
    add_column :wines, :country, :string
  end
end
