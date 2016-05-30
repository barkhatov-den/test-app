import moment from 'moment';

export default class DashboardController {
    constructor(userFactory, $uibModal) {
        this.moment = moment;
        this.$uibModal = $uibModal;
        this.userFactory = userFactory; //getting id
        this.users = JSON.parse(localStorage.getItem('registeredUser'));
    }

    /************* require Modal angular-ui-bootstrap ******************/
    open(user, index) {
        var deleteUser = this.deleteUser.bind(this, user, index);
        this.$uibModal.open({
            template: require('../views/modal.html'),
            controller: function ($scope, $uibModalInstance) {
                $scope.ok = function () {
                    deleteUser();
                    $uibModalInstance.close();
                };
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        });
    };
    /************* END require Modal angular-ui-bootstrap ******************/

    deleteUser(user, index){
        this.users.splice(index, 1);
        localStorage.setItem('registeredUser', JSON.stringify(this.users));
        return this.users;
    }
}