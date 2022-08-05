/* Author: 

*/
const buttons = document.getElementsByClassName('sound');
for (x in buttons) {
    buttons[x].addEventListener("click", listener);
}

function listener() {
    let i;
    let length = buttons.length;
    for (i = 0; i < length; i++) {
        alert(i);
        buttons[i].childNodes[1].pause();
        buttons[i].style.color = "#fff";
    }
    alert(this);
    this.childNodes[1].play();
    this.style.color = "#f00";
}