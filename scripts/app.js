import bar from './bar';
import foo from './foo';
import $ from 'jquery'

import '../styles/main.css';

foo();
bar();
const jqueryVersion = $.fn.jquery;
console.log(`jquery version : ${jqueryVersion}`);
