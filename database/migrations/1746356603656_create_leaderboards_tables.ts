import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Leaderboards extends BaseSchema {
  protected tableName = 'leaderboards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('rank').notNullable()
      table.integer('journal_count').defaultTo(0)
      table.integer('streak_count').defaultTo(0)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now()) // Perbaikan
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now()) // Perbaikan
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
