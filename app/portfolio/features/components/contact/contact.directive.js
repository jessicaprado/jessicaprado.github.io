angular
    .module('portfolio.component.contact')
    .directive('contact', Contact);

function Contact() {
    return {
        restrict: 'E',
        scope: {
            aboutMeData: "="
        },
        templateUrl: '/app/portfolio/features/components/contact/contact.html',
        controller: ContactCtrl,
        controllerAs: 'ContactVM',
        bindToController: true
    }
}

function ContactCtrl() {
    var vm = this;
}