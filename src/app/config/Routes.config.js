export default class Routes {
    constructor($urlRouterProvider, $stateProvider) {
        this.$urlRouterProvider = $urlRouterProvider;
        this.$stateProvider = $stateProvider;
        this.init();
    }

    init() {
        this.$stateProvider
            .state('dashboard', {
                url: '/',
                controller: 'DashboardController',
                controllerAs: 'vm',
                template: require('../views/app.html')
            })
            .state('signin', {
                url: '/signin',
                controller: 'SigninController',
                //controllerAs: 'signUpCtrl',
                template: require('../views/sign_in.html')
            })
            .state('create', {
                url: '/create',
                controller: 'CreateController',
                //controllerAs: 'vm',
                template: require('../views/create.html')
            })
            .state('signup', {
                url: '/signup',
                controller: 'SignupController',
                //controllerAs: 'signUpCtrl',
                template: require('../views/sign_up.html')
            })
            .state('edit', {
                url: '/users/:id',
                controller: 'EditController',
                //controllerAs: 'vm',
                template: require('../views/edit.html')
            });
        this.$urlRouterProvider.otherwise('/');
    }

    static factory($urlRouterProvider, $stateProvider){
        return new Routes($urlRouterProvider, $stateProvider);
    }
}