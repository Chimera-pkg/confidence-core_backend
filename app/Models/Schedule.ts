import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public userId: number
  @column() public days: any
  @column() public streakCount: number
  @column.dateTime() public lastLoginDate: DateTime
  @column.date() public lastJournalDate: string | null // Tambahkan kolom untuk melacak tanggal terakhir membuat jurnal

  @belongsTo(() => User) public user: BelongsTo<typeof User>
}
