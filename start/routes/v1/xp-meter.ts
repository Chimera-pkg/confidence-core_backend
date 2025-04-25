import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('xp', 'v1/XpMeterController.show').middleware('auth:api')
  Route.put('xp', 'v1/XpMeterController.update').middleware('auth:api')
}).prefix('v1')
