# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_29_125609) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addons", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "price"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "addons_menus", id: false, force: :cascade do |t|
    t.bigint "addon_id", null: false
    t.bigint "menu_id", null: false
    t.index ["addon_id", "menu_id"], name: "index_addons_menus_on_addon_id_and_menu_id"
    t.index ["menu_id", "addon_id"], name: "index_addons_menus_on_menu_id_and_addon_id"
  end

  create_table "admin_charges", force: :cascade do |t|
    t.float "amount"
    t.datetime "pay_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cut_offs", force: :cascade do |t|
    t.float "percentage"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "deal_items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "deal_items_deals", id: false, force: :cascade do |t|
    t.bigint "deal_id", null: false
    t.bigint "deal_item_id", null: false
    t.index ["deal_id", "deal_item_id"], name: "index_deal_items_deals_on_deal_id_and_deal_item_id"
    t.index ["deal_item_id", "deal_id"], name: "index_deal_items_deals_on_deal_item_id_and_deal_id"
  end

  create_table "deals", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "price"
    t.float "deal_saved"
    t.integer "post_status"
    t.string "free_item"
    t.float "free_item_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "discount_timings", force: :cascade do |t|
    t.string "start_day"
    t.string "end_day"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "discounts", force: :cascade do |t|
    t.integer "type"
    t.float "discount_percentage"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "designation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "resturant_id", null: false
    t.bigint "manager_id"
    t.index ["manager_id"], name: "index_employees_on_manager_id"
    t.index ["resturant_id"], name: "index_employees_on_resturant_id"
  end

  create_table "food_items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "group_items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "group_items_options", id: false, force: :cascade do |t|
    t.bigint "option_id", null: false
    t.bigint "group_item_id", null: false
    t.index ["group_item_id", "option_id"], name: "index_group_items_options_on_group_item_id_and_option_id"
    t.index ["option_id", "group_item_id"], name: "index_group_items_options_on_option_id_and_group_item_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_items_menus", id: false, force: :cascade do |t|
    t.bigint "menu_id", null: false
    t.bigint "menu_item_id", null: false
    t.index ["menu_id", "menu_item_id"], name: "index_menu_items_menus_on_menu_id_and_menu_item_id"
    t.index ["menu_item_id", "menu_id"], name: "index_menu_items_menus_on_menu_item_id_and_menu_id"
  end

  create_table "menus", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "resturant_id", null: false
    t.index ["resturant_id"], name: "index_menus_on_resturant_id"
  end

  create_table "menus_timings", id: false, force: :cascade do |t|
    t.bigint "menu_id", null: false
    t.bigint "timing_id", null: false
    t.index ["menu_id", "timing_id"], name: "index_menus_timings_on_menu_id_and_timing_id"
    t.index ["timing_id", "menu_id"], name: "index_menus_timings_on_timing_id_and_menu_id"
  end

  create_table "option_items", force: :cascade do |t|
    t.float "price"
    t.bigint "food_item_id", null: false
    t.bigint "option_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_item_id"], name: "index_option_items_on_food_item_id"
    t.index ["option_id"], name: "index_option_items_on_option_id"
  end

  create_table "options", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "order_items", force: :cascade do |t|
    t.string "name"
    t.string "decription"
    t.float "price"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.string "order_at"
    t.integer "order_status"
    t.float "total_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "payments", force: :cascade do |t|
    t.integer "customer_id"
    t.float "amount_pay"
    t.string "method"
    t.datetime "time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "promo_tokens", force: :cascade do |t|
    t.string "token_name"
    t.float "discount_percentage"
    t.integer "post_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "resturant_earnings", force: :cascade do |t|
    t.float "amount_earn"
    t.datetime "pay_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "resturant_schedules", force: :cascade do |t|
    t.string "days"
    t.string "start_time"
    t.string "end_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "resturant_id"
    t.index ["resturant_id"], name: "index_resturant_schedules_on_resturant_id"
  end

  create_table "resturants", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "contact"
    t.integer "open_close_status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "selected_addons", force: :cascade do |t|
    t.integer "addon_id"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "timings", force: :cascade do |t|
    t.string "days"
    t.string "start_time"
    t.string "end_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "token_valid_dates", force: :cascade do |t|
    t.string "start_date"
    t.string "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "employees", "employees", column: "manager_id"
  add_foreign_key "employees", "resturants"
  add_foreign_key "menus", "resturants"
  add_foreign_key "option_items", "food_items"
  add_foreign_key "option_items", "options"
  add_foreign_key "resturant_schedules", "resturants"
end
