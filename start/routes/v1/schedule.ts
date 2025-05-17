import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('schedule/days', 'SchedulesController.setDays').middleware('auth:api')
  Route.get('schedule/streak', 'SchedulesController.streak').middleware('auth:api')
  Route.get('schedule/journal-count', 'SchedulesController.totalJournal').middleware('auth:api')
  Route.get('schedule', 'SchedulesController.show').middleware('auth:api')
}).prefix('v1')
