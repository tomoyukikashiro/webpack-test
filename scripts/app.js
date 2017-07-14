import bar from './bar';
import foo from './foo';
import $ from 'jquery'
import gif from '../images/giphy.gif';

import '../styles/main.css';

foo();
bar();
const jqueryVersion = $.fn.jquery;
console.log(`jquery version : ${jqueryVersion}`);

$('body').append(`<img src="/${gif}" alt=""/>`);
