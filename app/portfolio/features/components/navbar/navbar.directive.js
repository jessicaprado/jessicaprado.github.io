angular
    .module('portfolio.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E',
        scope: {
            navbarData: "="
        },
        templateUrl: '/portfolio/features/components/navbar/navbar.html',
        controller: NavbarCtrl,
        controllerAs: 'NavbarVM',
        bindToController: true
    }
}

function NavbarCtrl() {
    var vm = this;

    vm.navbarButtons = [
        'home', 'work',
    ]
}