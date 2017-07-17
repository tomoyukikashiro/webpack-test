import bar from './bar';
import foo from './foo';
import $ from 'jquery'
import gif from '../images/giphy.gif';

import '../styles/main.css';

foo();
bar();
console.log('jquery version : ' + $.fn.jquery);

$('body').append('<img src="/' + gif + '" alt=""/>');

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(function(_) {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(function () {
    return 'An error occurred while loading the component';
  });
}

getComponent().then(function(component) {
  document.body.appendChild(component);
});


