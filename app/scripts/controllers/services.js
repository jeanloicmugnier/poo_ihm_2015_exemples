/**
 * Created by webdev on 5/14/15.
 */
'use strict';
/**
 * Created by webdev on 5/6/15.
 */
angular.module('pooIhmExemplesApp')

  .service('Services', ['$http', function Users($http) {

    /**
     * get all obj of the param parameter
     * @param param can be Users, Projects, Roles
     * @param successCB
     * @param errorCB
     */
    this.getAll = function (param, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/' + param)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    /**
     * get the obj with the id parameter as id
     * @param param can be Users,Projects,Roles
     * @param id
     * @param successCB
     * @param errorCB
     */
    this.getById = function (param, id, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/'+param+'/' + id)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    /**
     * Add the object obj to the param group
     * @param param can be Users, Projects, Roles
     * @param obj the obj to add
     * @param successCB
     * @param errorCB
     */
    this.add = function(param, obj, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/'+param+'/'+ obj)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    /**
     * Delete an e
     * @param param
     * @param projId
     * @param successCB
     * @param errorCB
     */
    this.delete = function(param,projId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/'+param+'/'+ projId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    /**
     *Edit obj with the  id
     * @param param, can be Users, Projects and Roles
     * @param obj the objects of the param to be updated
     * @param successCB
     * @param errorCB
     */
    this.edit = function(param,obj, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/'+param+'/'+ obj.id, obj)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };


    /**
     *  get the User | projects | roles of a
     * @param param, can be Users, Projects and Roles
     * @param id, the id of the object
     * @param successCB
     * @param errorCB
     */
    this.getCompInfo = function (param,id, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id + '/'+param)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
  }]);
