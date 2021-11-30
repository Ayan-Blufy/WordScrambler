let msg = document.getElementById('msg');
let txt = document.querySelector('.txt');
let btn = document.getElementById('btn');
let ans = "";
let scramble = "";
let play = false;
let arr = ['javascript', 'php', 'html', 'css', 'jquery', 'c++', 'java'];


const solve = () => {
    let s = Math.floor(Math.random() * arr.length);

    return arr[s];
}

const scrap = (a) => {
    let s = a.split("");
    for (let i = s.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = s[j];
        let k = s[i];

        s[j] = k;
        s[i] = temp;
    }
    return s;
}

msg.innerHTML = `Let us start the game !`;

btn.addEventListener('click', () => {

    if (play == false) {
        play = true;
        ans = solve();
        btn.innerHTML = "Guess";
        scramble = scrap(ans).join("");
        txt.style.display = "inline-block";
        msg.innerHTML = `Guess the word : ${scramble}`;

    } else if (play == true) {
        let ans1 = txt.value;
        if (ans === ans1) {
            txt.style.display = "none";
            play = false;
            msg.innerHTML = `Awesome It's Correct. It is ${ans}`;
            btn.innerHTML = "Start";
            txt.value = "";
        } else {
            play = false;
            txt.style.display = "none";
            msg.innerHTML = `Sorry Boss, It's Incorrect. Please Guess again ${scramble}`;
            txt.value = "";
        }
    }


});