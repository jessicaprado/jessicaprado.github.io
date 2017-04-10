angular
    .module('portfolio.component.intro')
    .directive('intro', Intro);

function Intro() {
    return {
        restrict: 'E',
        scope: {
            introData: "="
        },
        templateUrl: '/app/portfolio/features/components/intro/intro.html',
        controller: IntroCtrl,
        controllerAs: 'IntroVM',
        bindToController: true
    }
}

function IntroCtrl() {
    var vm = this;
}