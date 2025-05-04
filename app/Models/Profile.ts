import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public avatarUrl: string | null

  @column()
  public level: number

  @column()
  public xp: number

  @column()
  public streakCount: number

  @column()
  public journalCount: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
