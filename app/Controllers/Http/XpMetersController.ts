import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import XpMeter from 'App/Models/XpMeter'

export default class XpMeterController {
  public async show({ auth }: HttpContextContract) {
    const meter = await XpMeter.findBy('user_id', auth.user!.id)
    return meter || (await XpMeter.create({ userId: auth.user!.id }))
  }

  public async store({ auth, request }: HttpContextContract) {
    const { xp, level } = request.only(['xp', 'level'])
    const meter = await XpMeter.create({ userId: auth.user!.id, xp, level })
    return meter
  }
  public async update({ params, request }: HttpContextContract) {
    const xpDelta = request.input('xpDelta')

    // Validasi bahwa xpDelta adalah angka
    if (typeof xpDelta !== 'number' || isNaN(xpDelta)) {
      return {
        message: 'Invalid xpDelta value. It must be a valid number.',
      }
    }

    const meter = await XpMeter.findOrFail(params.id)

    // Pastikan meter.xp adalah angka valid sebelum melakukan operasi
    if (typeof meter.xp !== 'number' || isNaN(meter.xp)) {
      meter.xp = 0 // Reset ke 0 jika tidak valid
    }

    meter.xp += xpDelta
    meter.level = Math.floor(meter.xp / 100) + 1 // Contoh logika level-up
    await meter.save()

    return meter
  }

  public async delete({ auth }: HttpContextContract) {
    const meter = await XpMeter.findByOrFail('user_id', auth.user!.id)
    await meter.delete()
    return { message: 'XP Meter deleted successfully' }
  }
}
