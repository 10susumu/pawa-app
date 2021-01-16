class CreateBushos < ActiveRecord::Migration[6.0]
  def change
    create_table :bushos do |t|
      t.string  :name, null: false
      t.string  :senjutsu, null: false
      t.float  :myrate,  null: false
      t.float  :oppnentrate, null:false

      t.timestamps
    end
  end
end
