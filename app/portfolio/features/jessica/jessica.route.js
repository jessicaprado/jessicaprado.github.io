angular
    .module('portfolio.jessica')
    .config(jessicaConfig);

function jessicaConfig($stateProvider) {
    $stateProvider.state({
        name: 'jessica',
        url: '/',
        templateUrl: '/app/portfolio/features/jessica/jessica.html',
        controller: 'JessicaCtrl',
        controllerAs: 'JessicaVM'
    })
}