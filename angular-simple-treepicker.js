/**
 * Treepicker - Tree Picking Angular Directive
 * @version v1 - 2014-05-12
 * @author Alex Meub
 * @license MIT License
 *
 */

angular.module('treepicker', []).directive('treepicker', function() {

    return {
        restrict: 'A',
        scope: {
            ngTree: '=',
            ngModel: '='
        },
        link: function (scope, element) {
            var $div = $(element),
                parsedValue = [];

           if( !scope.ngTree ){
              // Error, no tree data
              return;
           }
           // Initialize simpleTreePicker
           $div.simpleTreePicker({
              "tree": scope.ngTree,

              // Event binding Slider -> Model
              "onclick": function () {
                 parsedValue = picker.simpleTreePicker("val");

                 scope.$apply(function () {
                    scope.ngModel = parsedValue;
                 });
              },
              'selected' : scope.ngModel
           });
           var picker = $div.find('.simple-tree');
        }
    };
});