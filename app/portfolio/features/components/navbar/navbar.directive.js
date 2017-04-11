angular
    .module('portfolio.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E',
        scope: {
            navbarData: "="
        },
        templateUrl: '/app/portfolio/features/components/navbar/navbar.html',
        controller: NavbarCtrl,
        controllerAs: 'NavbarVM',
        bindToController: true
    }
}

function NavbarCtrl($document) {
    var vm = this;

    vm.navbarButtons = [{
        name: 'home',
        path: 'introBox',
        img: 'fa fa-home fa-2x'
    },{
        name: 'about',
        path: 'aboutMeBox',
        img: 'fa fa-heart fa-2x'
    },{
        name: 'code',
        path: 'workBox',
        img: 'fa fa-code fa-2x'
    },{
        name: 'contact',
        path: 'contactForm',
        img: 'fa fa-envelope-o fa-2x'
    }];

    vm.goTo = function(path) {
        console.log (path);

        var top = 400;
        var duration = 500; //milliseconds

        //Scroll to the exact position
        $document.scrollTop(top, duration).then(function() {
            console && console.log('You just scrolled to the top!');
        });

        var offset = 50; //pixels; adjust for floating menu, context etc
        //Scroll to #some-id with 30 px "padding"
        //Note: Use this in a directive, not with document.getElementById
        var someElement = angular.element(document.getElementById(path));

        $document.scrollToElement(someElement, offset, duration);
    };
}