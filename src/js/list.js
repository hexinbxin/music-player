import {showList, list} from "./var";
let show = (data) => {
    let listStr = '';
    for (let i = 0; i < data.length; i++) {
        listStr += `<li data-id='${i}'>${data[i].name}</li>`;
    }
    showList.innerHTML = listStr;
    let aa = () => {
        window.i += 1;
        // console.log(i)
        if(window.i % 2 == 1){
            showList.style.display = "block";
            return;
        }
        showList.style.display = "none";
        
    }
    list.addEventListener('click', aa);

}
export {show};