import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('badges/:id', 'BadgesController.index').middleware('auth:api')
  Route.get('badges', 'BadgesController').middleware('auth:api')
  Route.post('badges', 'BadgesController.store').middleware('auth:api')
}).prefix('v1')
