import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('badges', 'BadgesController.index').middleware('auth:api')
  Route.post('badges', 'BadgesController.store').middleware('auth:api')
  Route.delete('badges/:id', 'BadgesController.delete').middleware('auth:api')
}).prefix('v1')
