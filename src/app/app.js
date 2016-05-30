"use strict";
import angular from 'angular';

import '../sass/app.scss';
import 'bootstrap/dist/css/bootstrap.css';

import DashboardController from './controllers/Dashboard.controller';
import SignupController from './controllers/Signup.controller';
import SigninController from './controllers/Signin.controller';
import CreateController from './controllers/Create.controller';
import EditController from './controllers/Edit.controller';
import Routes from './config/Routes.config.js';
import RoutesCheck from './config/RoutesCheck.run.js';
import getUser from './services/getUser.factory.js';
import compareTo from './directives/compareTo.directive';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [require('angular-ui-router'), require ('angular-ui-bootstrap'), require('angular-local-storage')])
  .config(Routes.factory)
  .run(RoutesCheck.factory)
  .factory('userFactory', getUser)
  .controller('DashboardController', DashboardController)
  .controller('SignupController', SignupController)
  .controller('SigninController', SigninController)
  .controller('CreateController', CreateController)
  .controller('EditController', EditController)
  .directive('compareTo', compareTo);