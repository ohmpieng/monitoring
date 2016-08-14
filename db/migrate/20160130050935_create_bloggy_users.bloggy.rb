# This migration comes from bloggy (originally 20120114001001)
class CreateBloggyUsers < ActiveRecord::Migration
  def change
    create_table :bloggy_users do |t|
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
