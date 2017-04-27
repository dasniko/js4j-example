import 'babel-polyfill';
import $ from 'jquery';
import {Calculator} from './calc';


$('<h1>Hello, World!</h1>').appendTo('body');


const calc = new Calculator();

// called with instance
$('<h2>1 + 2 = ' + calc.add(1, 2) + '</h2>').appendTo('body');
// called statically
$('<h2>1 + 2 = ' + Calculator.sum(1, 2) + '</h2>').appendTo('body');


// will be used directly from index.html
export function add(a, b) {
    return calc.add(a, b);
}
