import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('leaderboard', 'LeaderboardsController.index')
}).prefix('v1')
