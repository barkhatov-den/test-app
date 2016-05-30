export default function EditController($scope, $location, $stateParams){
    $scope.user = {};
    let users = JSON.parse(localStorage.getItem('registeredUser'));
    let currentIndex;
    users.forEach(function (user, index) {
        if (user.id == $stateParams.id) {
            currentIndex = index;
            $scope.user = user;
            $scope.user.dateOfBirth = Date(user.dateOfBirth); //ToDo!!!!!
        }
    });

    $scope.editUserById = function(user) {
        users[currentIndex] = $scope.user;
        localStorage.setItem('registeredUser', JSON.stringify(users));
        $location.path('/');
    }

}