import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedule from 'App/Models/Schedule'

export default class ScheduleController {
  public async show({ auth }: HttpContextContract) {
    return await Schedule.findBy('user_id', auth.user!.id)
  }

  public async update({ auth, request }: HttpContextContract) {
    const payload = request.only(['days'])
    let sched = await Schedule.findBy('user_id', auth.user!.id)
    if (sched) sched.merge(payload)
    else sched = await Schedule.create({ userId: auth.user!.id, ...payload })
    await sched.save()
    return sched
  }
}
