import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddStreakColumnsToSchedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('streak_count').defaultTo(0) // Tambahkan kolom streak_count
      table.timestamp('last_login_date').nullable() // Tambahkan kolom last_login_date
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('streak_count')
      table.dropColumn('last_login_date')
    })
  }
}
