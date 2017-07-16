import bar from './bar';
import foo from './foo';
import $ from 'jquery'
import gif from '../images/giphy.gif';

import '../styles/main.css';

foo();
bar();
console.log('jquery version : ' + $.fn.jquery);

$('body').append('<img src="/' + gif + '" alt=""/>');
