import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddFeelingToJournals extends BaseSchema {
  protected tableName = 'journals'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('feeling').notNullable().defaultTo('okay') // Tambahkan kolom feeling
      table.string('reason_feeling').nullable() // Tambahkan kolom reason_feeling
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('feeling')
      table.dropColumn('reason_feeling')
    })
  }
}
