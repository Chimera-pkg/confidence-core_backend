import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Badges extends BaseSchema {
  protected tableName = 'badges'
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('badge_name').notNullable()
      table.timestamp('awarded_at', { useTz: true }).defaultTo(this.now())
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
