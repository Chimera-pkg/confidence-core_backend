import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  hasOne,
  HasOne,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import XpMeter from './XpMeter'
import Schedule from './Schedule'
import Journal from './Journal'

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

  @hasMany(() => Journal, { foreignKey: 'userId' })
  public journals: HasMany<typeof Journal>
}
