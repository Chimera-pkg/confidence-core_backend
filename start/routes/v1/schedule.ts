import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('schedule', 'v1/ScheduleController.show').middleware('auth:api')
  Route.put('schedule', 'v1/ScheduleController.update').middleware('auth:api')
}).prefix('v1')
