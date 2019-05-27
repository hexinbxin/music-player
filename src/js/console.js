import {showList, wrap, mainImg, info, singer, next, play, prov, message, audio, rotate} from "./var";
import {lyrics} from "./lyrics";
rotate.style.animationPlayState = 'paused';
// import {show} from "./list";
let consolePlay = (data) => {
    window.index = 0;
    let i = 0;
    let infoM = () => {
        wrap.style.backgroundImage = `url('${data[index].photo}')`;
        mainImg.src = data[index].album;
        info.innerText = data[index].name;
        message.innerText = data[index].name;
        singer.innerText = data[index].singer;
        audio.src = data[index].src;
    }
    infoM();
    let nextM = () => {
        index ++;
        play.innerHTML = '&#xe6ce;';
        // show(data);
        lyrics(data);
        boundary();
        infoM();
        audio.removeEventListener("canplay", canplay);
        audio.addEventListener('canplay',canplay);
        // console.log(index)
        
    }
    let provM = () => {
        index --;
        play.innerHTML = '&#xe6ce;';
        // show(data);
        lyrics(data);
        boundary();
        infoM();
        audio.removeEventListener("canplay", canplay);
        audio.addEventListener('canplay',canplay);
    }
    let boundary = () => {
        if(index < 0){
            index = data.length - 1;
            return;
        }
        if(index > data.length - 1){
            index = 0;
        }
        for(let i = 0; i < showList.children.length; i ++){
            showList.children[i].classList.remove('active');
        }
        showList.children[window.index].classList.add('active');
    }
    let playM = () => {
        i ++;
        if(i % 2 === 1){
            play.innerHTML = '&#xe638;';
            audio.play();
            rotate.style.animationPlayState = 'running';
            return;
        }
        if(i % 2 === 0){
            play.innerHTML = '&#xe6ce;';
            audio.pause();
            rotate.style.animationPlayState = 'paused';
            return;
        }
    }
    let canplay = () => {
        if(i % 2 === 1){
            i ++;
        }
        playM();
    }
    showList.addEventListener('click', function (e) {
        let target = e.target;
        if(target.nodeName === 'LI'){
            let idN = target.dataset['id'];
            // console.log(idN)
            let n = idN - window.index;
            if(n > 0){
                for(let i = 0; i < n; i ++){
                    next.click();
                }
            }
            if(n < 0) {
                for(let i = 0; i <-n; i ++){
                    prov.click();
                }
            }
        }
    })
    next.addEventListener('click', nextM);
    prov.addEventListener('click', provM);
    play.addEventListener('click', playM);
    return function() {
        return index;
    };
}
export {consolePlay};