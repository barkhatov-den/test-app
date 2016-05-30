export default function SigninController($scope, $state, userFactory) {

/*************************       Compare data from Form and Localstoge          ****************************/

    $scope.user = {email: '', password: ''};
    $scope.$watchCollection('user', function (pre, next) {
        $scope.errorMessage = '';
    });
    $scope.checkForm = function(user, form) {
        $scope.userMessage = '';
        var restoredSession;
        try {
            restoredSession = JSON.parse(localStorage.getItem('registeredUser'));
            if (!Array.isArray(restoredSession)) restoredSession = [];
        } catch (e) {
            restoredSession = [];
        }

        for (var i = 0; i < restoredSession.length; i++) {
            for (var key in restoredSession[i]) {
                if (restoredSession[i].email == user.email) {
                    if (restoredSession[i].password == user.password) {
                        // Making key "loginedUser" with realtime login user object.
                        localStorage.setItem('loginedUser', JSON.stringify(restoredSession[i]));
                        // Set "good news" to factory.
                        userFactory.registered = true;
                        // Set information of user id making Edition of user date possible;
                        userFactory.id = restoredSession[i].id;
                        $state.go('dashboard');
                    }
                }
            }
        }

        $scope.errorMessage = 'User not found!';
    };
    /*************************    END Compare data from Form and Localstoge          ****************************/
}
