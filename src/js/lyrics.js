import {audio} from "./var";
let lyrics = (data) => {
    // var xhr = new XMLHttpRequest();
    //     xhr.open('GET', `http://www.chanke.xyz/cc/lyrics/index.php?id=${data[window.index].id}`);
    //     xhr.send();
    //     xhr.addEventListener('readystatechange', function() {
    //         if(this.readyState == 4){
    //             console.log(this.responseText)
    //         }
    //     })
    // console.log(data[window.index].lyrics)
    if(window.index >= data.length){
        window.index = 0;
    }
    if(window.index < 0){
        window.index = data.length - 1;
    }
    let lyData = data[window.index].lyrics;
    let arr = lyData.split("\[");
    let arrLy = [];
    let ul = document.querySelector('.lyric').children[0];
    for(let prop of arr){
        let arr = prop.split("\]");
        arrLy.push(arr);
    }
    arrLy.shift();
    arrLy.shift();
    arrLy.shift();

    // console.log(arrLy);
    let str = `
    <li style = "color: rgba(255, 255, 255, 0);user-select:none;"> 1</li>
    <li style = "color: rgba(255, 255, 255, 0);user-select:none;"> 1</li>
    <li style = "color: rgba(255, 255, 255, 0);user-select:none;"> 1</li>
    <li style = "color: rgba(255, 255, 255, 0);user-select:none;"> 1</li>
    <li style = "color: rgba(255, 255, 255, 0);user-select:none;"> 1</li>
    <li style = "color: rgba(255, 255, 255, 0);user-select:none;"> 1</li>`;
    for(let i = 0; i < arrLy.length; i ++){
        str += `<li data-name=${arrLy[i][0]}>${arrLy[i][1]}</li>`
    }
    ul.innerHTML = str;
    let lis = Array.from(ul.children);
    lis.splice(0, 6);
    // console.log(lis)
    lis[0].classList.add('active');
    let banner = () => {
        // console.log(timeArr);
        // console.log(time);
        // console.log(audio.currentTime)
        for(let j = 0; j < lis.length; j ++){
            // console.log(lis[j + 1].dataset['name'].split(':'));
            try{
                let timeArr = (lis[j + 1].dataset['name'].split(':'));
                let time = timeArr[0] * 60 + Number(timeArr[1]);
                // 
                if(audio.currentTime >= time){
                    lis[j].classList.remove('active');
                    lis[j + 1].classList.add('active');
                    ul.style.transform = `translateY(${-30*(j)}px)`
                }
            }catch(e){
                
            }
            
        }
        // if(audio.currentTime >= time){
        //     lis[i].classList.remove('active');
        //     lis[i].classList.add('active');
        //     ul.style.transform = `translateY(${-30*(i - 6)}px)`
        // }
        
    }
    audio.addEventListener('timeupdate', banner)
}
export {lyrics};