import _ from 'lodash';
import './style.scss';
// import iWantU from './i_want_you.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
    element.appendChild(btn);
    console.dir(Data)
    return element;
}

document.body.appendChild(component());