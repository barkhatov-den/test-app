export default function CreateController($scope, $location)  {
    $scope.user = {};

/************   Bootstrap Datepicker Popup   ******************/
    $scope.popup = {};
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.dateOptions = {
        formatYear: 'yy',
        minDate: new Date(1975, 1, 1),
        startingDay: 1
    };

    $scope.open = function() {
        $scope.popup.opened = true;
    };
/*************   END Bootstrap Datepicker Popup   ***************/

    $scope.submitForm = function(val, form) {
        let users = [];

/*************    Set data to localstorage      *****************/

        if (form.$invalid) {
            return false;
        }
        try {
            users = JSON.parse(localStorage.getItem('registeredUser')) || [];
        } catch (err) {
            users = [];
        }

        if (!Array.isArray(users)) users = [];
        val.id = new Date().getTime();
        users.push(val);
        localStorage.setItem('registeredUser', JSON.stringify(users));
        $location.path('/');

/*******************  END set data to localstorage ****************/

    }
}