angular
    .module('portfolio.home')
    .config(homeConfig);

function homeConfig($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/app/portfolio/features/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeVM'
    })
}