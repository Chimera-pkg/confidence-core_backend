import { BaseModel, column, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import XpMeter from './XpMeter'
import Schedule from './Schedule'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public avatarUrl: string | null

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasOne(() => XpMeter, { foreignKey: 'userId' })
  public xpMeter: HasOne<typeof XpMeter>

  @hasOne(() => Schedule, { foreignKey: 'userId' })
  public schedule: HasOne<typeof Schedule>
}
