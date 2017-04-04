angular
    .module('portfolio.work')
    .config(workConfig);

function workConfig($stateProvider) {
    $stateProvider.state({
        name: 'work',
        url: '/work',
        templateUrl: '/app/portfolio/features/work/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'WorkVM'
    })
}