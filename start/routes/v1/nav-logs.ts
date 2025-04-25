import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('nav-logs', 'v1/NavigationLogController.index').middleware('auth:api')
  Route.post('nav-logs', 'v1/NavigationLogController.store').middleware('auth:api')
}).prefix('v1')
