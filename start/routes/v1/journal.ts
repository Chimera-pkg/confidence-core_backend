import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('journals', 'v1/JournalController')
    .apiOnly()
    .middleware({ '*': ['auth:api'] })
}).prefix('v1')
