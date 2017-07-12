import angular from 'angular';

import TrackerService from '../services/tracker.service';

export default angular.module('services', [])
.service('TrackerService', TrackerService);