import _ from "lodash";
import "./style.scss";
// import iWantU from './i_want_you.png';
// import Data from './data.xml';
import { cube, square } from "./math.js";
import printMe from "./print.js";

function component() {
  let element = document.createElement("pre");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );
  cube(81)
  return element;
}
console.log("33333");
document.body.appendChild(component());
