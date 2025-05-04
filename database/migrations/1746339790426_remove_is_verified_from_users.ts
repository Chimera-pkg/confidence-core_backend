import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveIsVerifiedFromUsers extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('is_verified') // Hapus kolom is_verified
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('is_verified').defaultTo(false) // Tambahkan kembali kolom is_verified jika rollback
    })
  }
}
