import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Leaderboard extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public rank: number

  @column()
  public journalCount: number

  @column()
  public streakCount: number

  @column()
  public xp: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
