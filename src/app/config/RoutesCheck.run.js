export default class RoutesCheck {
    constructor($rootScope, userFactory, $state) {
        this.$rootScope = $rootScope;
        this.userFactory = userFactory;
        this.$state = $state;
        this.init();
    }

/****************      Unregistered user can only /signin, /signup page visite      *****************/
    init() {
        this.$rootScope.$on('$stateChangeStart',
            (event, toState, toParams, fromState, fromParams, options)=> {
                if (!this.userFactory.registered && ['/signin', '/signup'].indexOf(toState.url) === -1) {
                    event.preventDefault();
                    return this.$state.go('signin');
                }

                return true;
            })
    }
// Calling our class by "new"
    static factory($rootScope, userFactory, $state){
        return new RoutesCheck($rootScope, userFactory, $state);
    }
}
