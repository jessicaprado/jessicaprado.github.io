angular
    .module('portfolio', [
        //global dependencies
        'ui.router',
        'duScroll',

        //features
        'portfolio.jessica',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}