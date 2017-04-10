angular
    .module('portfolio.component.showCase')
    .directive('showCase', ShowCase);

function ShowCase() {
    return {
        restrict: 'E',
        scope: {
            showCaseData: "="
        },
        templateUrl: '/app/portfolio/features/components/showCase/showCase.html',
        controller: ShowCaseCtrl,
        controllerAs: 'ShowCaseVM',
        bindToController: true
    }
}

function ShowCaseCtrl() {
    var vm = this;

    vm.projects = [{
        name: "Scheduling Tools",
        link: "http://schedulingtools.herokuapp.com/",
        img: "app/portfolio/layout/assets/images/scheduling.png",
        linkCode: "https://github.com/jessicaprado/schedulingTools",
        imgCode: "app/portfolio/layout/assets/images/schedulingCode.png",
     }, {
        name: "Pipeline",
        link: "https://still-falls-96461.herokuapp.com/",
        img: "app/portfolio/layout/assets/images/pipeline.png",
        linkCode: "https://github.com/what-to-do/team-project",
        imgCode: "app/portfolio/layout/assets/images/pipelineCode.png",
    }, {
        name: "Trivia Game",
        link: "https://pottertriviagame.herokuapp.com/",
        img: "app/portfolio/layout/assets/images/trivia.png",
        linkCode: "https://github.com/jessicaprado/TriviaGame",
        imgCode: "app/portfolio/layout/assets/images/triviaCode.png",
    }, {
        name: "MySQL Burger",
        link: "https://pure-falls-31241.herokuapp.com/",
        img: "app/portfolio/layout/assets/images/burger.png",
        linkCode: "https://github.com/jessicaprado/burger",
        imgCode: "app/portfolio/layout/assets/images/burgerCode.png",
    }]
}