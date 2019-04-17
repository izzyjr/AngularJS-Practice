'use strict';

// Register `teamList` component, along with its associated controller and template
angular.
module('Blog').
component('teamList', {
    template:
        '<ul>' +
        '<li ng-repeat="team in $ctrl.teams">' +
        '<span>{{teams.name}}</span>' +
        '<p>{{teams.seasons}}</p>' +
        '</li>' +
        '</ul>',
    controller: function AboutMeController() {

        this.teams = [
            {
                name: 'Boca Juniors',
                seasons: '1996-2002, 2007-2014'
            }, {
                name: 'Barcelona',
                seasons: '2002-2003'
            }, {
                name: 'Villarreal',
                seasons: '2003-2007'
            }
        ];
    }
});