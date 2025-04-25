import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('badges', 'v1/BadgeController.index').middleware('auth:api')
  Route.post('badges', 'v1/BadgeController.store').middleware('auth:api')
}).prefix('v1')
