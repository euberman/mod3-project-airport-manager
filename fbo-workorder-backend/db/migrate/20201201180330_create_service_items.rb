class CreateServiceItems < ActiveRecord::Migration[5.2]
  def change
    create_table :service_items do |t|
      t.references :workorder, foreign_key: true
      t.references :service, foreign_key: true
      
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
