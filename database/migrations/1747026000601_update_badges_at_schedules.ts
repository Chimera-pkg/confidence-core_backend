import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UpdateBadgesAtSchedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.json('badges').nullable().defaultTo(JSON.stringify([])) // Default value adalah array kosong
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('badges')
    })
  }
}
