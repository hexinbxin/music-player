import "../scss/index.scss";
import {data} from "./data";
import {consolePlay} from "./console";
import {progress} from "./progress";
import {lyrics} from "./lyrics";
import {show} from "./list";
consolePlay(data);
progress();
lyrics(data);
show(data);
console.log(data);
// console.log(wrap, mainImg, info, singer, next, play, prov, message)