import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddJournalCountToSchedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('journal_count').defaultTo(0)
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('journal_count')
    })
  }
}
