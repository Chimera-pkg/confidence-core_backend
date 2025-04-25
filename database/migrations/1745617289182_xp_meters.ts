import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class XpMeters extends BaseSchema {
  protected tableName = 'xp_meters'
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('xp').defaultTo(0)
      table.integer('level').defaultTo(1)
      table.timestamps(true)
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
