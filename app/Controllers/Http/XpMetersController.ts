import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import XpMeter from 'App/Models/XpMeter'

export default class XpMeterController {
  public async show({ auth }: HttpContextContract) {
    const meter = await XpMeter.findBy('user_id', auth.user!.id)
    return meter || (await XpMeter.create({ userId: auth.user!.id }))
  }

  public async update({ auth, request }: HttpContextContract) {
    const { xpDelta } = request.only(['xpDelta'])
    const meter = await XpMeter.findByOrFail('user_id', auth.user!.id)
    meter.xp += xpDelta
    // contoh logic level-up tiap 100 xp
    meter.level = Math.floor(meter.xp / 100) + 1
    await meter.save()
    return meter
  }
}
