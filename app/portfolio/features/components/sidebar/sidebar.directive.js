angular
    .module('portfolio.component.sidebar')
    .directive('sidebar', Sidebar);

function Sidebar() {
    return {
        restrict: 'E',
        scope: {
            sidebarData: "="
        },
        templateUrl: '/app/portfolio/features/components/sidebar/sidebar.html',
        controller: SidebarCtrl,
        controllerAs: 'SidebarVM',
        bindToController: true
    }
}

function SidebarCtrl() {
    var vm = this;


}