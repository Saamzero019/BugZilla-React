class CreateBugs < ActiveRecord::Migration[6.1]
  def change
    create_table :bugs do |t|
      t.string :title , null: false
      t.integer :priority, null: false
      t.integer :completetion_days, null: false
      t.text :description
   
      t.timestamps
    end
  end
end
