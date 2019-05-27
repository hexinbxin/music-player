import {next, audio, playTime, allTime, playTimeN, allTimeN} from "./var";
let progress = () => {
    let pad = (time) => {
        return time.padStart(2, '0');
    }
    let displatAllTimeN = () => {
        // console.log(audio.duration)
        let allT = audio.duration;
        let allH = pad(String(Math.floor(allT/3600)));
        let allM = pad(String(Math.floor((allT - allH*3600)/60)));
        let allS = pad(String(Math.floor((allT - allH*3600 - allM * 60))));
        let allTimeStr = `${allH}:${allM}:${allS}`;
        allTimeN.innerText = allTimeStr;
        // console.log(allT, allH, allM, allS);
    }
    let diaplayPlayTimeN = () => {
        let playT = audio.currentTime;
        let playH = pad(String(Math.floor(playT/3600)));
        let playM = pad(String(Math.floor((playT - playH*3600)/60)));
        let playS = pad(String(Math.floor((playT - playH*3600 - playM * 60))));
        let playTimeStr = `${playH}:${playM}:${playS}`;
        playTimeN.innerText = playTimeStr;
        playTime.style.width = (audio.currentTime/audio.duration) * (550/700) * 100 + '%';
        if(audio.currentTime >= audio.duration){
            next.click();
        }
    }
    let jump = (e) => {
        // console.log(e.offsetX);
        playTime.style.width = (e.offsetX/550) * 100 * (550/700)+ '%';
        audio.currentTime = (e.offsetX/550) * audio.duration;
    }
    audio.addEventListener('canplay', displatAllTimeN);
    audio.addEventListener('timeupdate', diaplayPlayTimeN);
    allTime.addEventListener('click', jump);
}
export {progress};