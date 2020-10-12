class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :company_name, null: false
      t.string :job_title, null: false
      t.string :address, null: false
      t.text :job_requirements, null:false
      t.text :job_description, null: false
      t.integer :role, default: 0
      t.integer :level, default: 0
      t.integer :contract, default: 0
      t.string :location, null: false
      t.text :languages, array: true, default: []
      t.text :tools, array: true, default: []
      t.boolean :featured, default: false

      t.timestamps
    end
  end
end
