import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddLastJournalDateToSchedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.date('last_journal_date').nullable() // Tambahkan kolom untuk melacak tanggal terakhir membuat jurnal
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('last_journal_date')
    })
  }
}
