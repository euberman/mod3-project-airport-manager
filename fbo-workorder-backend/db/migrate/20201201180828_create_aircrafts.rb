class CreateAircrafts < ActiveRecord::Migration[5.2]
  def change
    create_table :aircrafts do |t|
      t.string :model
      t.references :customer, foreign_key: true

      t.timestamps
    end
  end
end
