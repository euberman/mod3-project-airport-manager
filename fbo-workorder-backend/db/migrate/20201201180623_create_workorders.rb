class CreateWorkorders < ActiveRecord::Migration[5.2]
  def change
    create_table :workorders do |t|
      t.datetime :date
      t.references :customer, foreign_key: true
      t.references :aircraft, foreign_key: true

      t.string :hangar_id, default: 2
      t.boolean :arrivingToday, default: false
      t.boolean :completed, default: false
      t.string :work_status, default: 'scheduled' 

      t.timestamps
    end
  end
end
