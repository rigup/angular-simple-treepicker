# Angular Simple TreePicker

Angular Directive for the [Simple TreePicker](https://github.com/meub/jquery-simple-treepicker) jQuery plugin. Demo is [here](http://simpletreepicker.alexmeub.com/angular-demo.html).

### Usage

 - Add references to simple tree picker and the directive

 ```html
<link rel="stylesheet" href="css/jquery.simple-tree-picker.css" />
<script src="js/jquery/jquery.js"></script>
<script src="js/angular/angular.js"></script>
<script src="js/jquery.simple-treepicker.js"></script>
<script src="js/angular-simple-treepicker.js"></script>
```

 - Add a dependency to the `treepicker` module in your application.

```js
angular.module('MyApp', ['treepicker']);
```

 - Add a `treepicker` attribute to your `<div>` tag
 - Add`ng-model` attribute for data-binding your model
 - Add`ng-tree` attribute for data-binding your tree object


```html
<div treepicker ng-model="myLocations" ng-tree="myTree" class="tree"></div>
```