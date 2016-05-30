export default function EditController($scope, $location, $stateParams){
    $scope.user = {};

    $scope.popup = {};

    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.formats = ['MM/dd/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.dateOptions = {
        formatYear: 'yy',
        minDate: new Date(1975, 1, 1),
        startingDay: 1
    };

    $scope.open = function() {
        $scope.popup.opened = true;
    };

    let users;
    try {
        users =  JSON.parse(localStorage.getItem('registeredUser'));
        if (!Array.isArray(users)) users = [];
    } catch (e) {
        users = [];
    }
    let currentIndex;


    users.forEach(function (user, index) {
        if (user.id == $stateParams.id) {
            currentIndex = index;
            $scope.user = user;
            $scope.user.dateOfBirth = new Date(user.dateOfBirth);
        }
    });

    $scope.editUserById = function(user) {
        users[currentIndex] = $scope.user;
        localStorage.setItem('registeredUser', JSON.stringify(users));
        $location.path('/');
    }

}