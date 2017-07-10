import angular from 'angular';

import TrackerService from './tracker.service';

export default angular.module('services', [])
.service('TrackerService', TrackerService);