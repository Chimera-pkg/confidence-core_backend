import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Journals extends BaseSchema {
  protected tableName = 'journals'
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.date('entry_date').notNullable()
      table.timestamps(true)
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
