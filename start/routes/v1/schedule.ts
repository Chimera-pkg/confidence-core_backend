import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('schedule', 'SchedulesController.show').middleware('auth:api')
  Route.put('schedule', 'SchedulesController.update').middleware('auth:api')
}).prefix('v1')
