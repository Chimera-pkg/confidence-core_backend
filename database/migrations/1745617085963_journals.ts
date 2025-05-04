import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Journals extends BaseSchema {
  protected tableName = 'journals'

  public async up() {
    const exists = await this.schema.hasTable(this.tableName)
    if (!exists) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary()
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
        table.string('title').notNullable()
        table.text('content').notNullable()
        table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
        table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
      })
    }
  }

  public async down() {
    const exists = await this.schema.hasTable(this.tableName)
    if (exists) {
      this.schema.dropTable(this.tableName)
    }
  }
}
