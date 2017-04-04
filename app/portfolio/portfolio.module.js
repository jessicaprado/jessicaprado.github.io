angular
    .module('portfolio', [
        //global dependencies
        'ui.router',

        //features
        'portfolio.home',
        'portfolio.work',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}