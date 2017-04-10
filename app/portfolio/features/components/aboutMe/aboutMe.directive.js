angular
    .module('portfolio.component.aboutMe')
    .directive('aboutMe', AboutMe);

function AboutMe() {
    return {
        restrict: 'E',
        scope: {
            aboutMeData: "="
        },
        templateUrl: '/app/portfolio/features/components/aboutMe/aboutMe.html',
        controller: AboutMeCtrl,
        controllerAs: 'AboutMeVM',
        bindToController: true
    }
}

function AboutMeCtrl() {
    var vm = this;
}