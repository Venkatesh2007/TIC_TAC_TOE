function change(userid) {
    let getid = `hero${userid}`
    let hbox = document.getElementById(getid);
    hbox.setAttribute('style', 'z-index:10!important');
}
function changecomputer(userid) {
    let getid = `hero${userid}`
    let hbox = document.getElementById(getid);
    hbox.innerHTML = 'O';
    hbox.setAttribute('style', 'z-index:10!important');
}
let Arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); let full = '';
let index = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let compscore = document.getElementById('compscore');
let playerscore = document.getElementById('playerscore');
let scoreboard = document.getElementById('scoreboard');
let gameboard = document.getElementById('box');
let playboard = document.getElementById('play');
const winningarray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]]
const userarray = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
const computerarray = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
const usedboxes = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
function changeslide() {
    playboard.setAttribute('style', 'display:none');
    gameboard.setAttribute('style', 'display:grid');
}
function computer(fixed) {
    try { random = index[Math.floor(Math.random() * index.length)]; }
    catch (e) {
        if (e.message == 'Maximum call stack size exceeded') {
            alert('Refresh and Play Again');
        }
    }

    if (random == usedboxes[random]) {
        computer(0);
    } else {
        usedboxes[random] = random;
        computerarray[random] = random;
        changecomputer(random);
        setTimeout(
            () => {
                check();
            }, 10
        )
        return random;
    }
}
function player(userid) {
    if (userid == usedboxes[userid]) {
        console.log(userid)
        console.log(userid in usedboxes);
        alert('hey select other box');
    } else {
        console.log(userid in usedboxes);
        change(userid);
        usedboxes[userid] = userid;
        userarray[userid] = userid;
        check();
        computer();
        console.log(usedboxes);
    }
}
let a = 0, b = 0, c = 0;
function check() {
    for (let i = 0; i < winningarray.length; i++) {
        let score = 0;
        a = winningarray[i][0];
        b = winningarray[i][1];
        c = winningarray[i][2];
        for (let j = 0; j < userarray.length; j++) {
            if (a == userarray[j]) {
                score += 1;
            } else { fixed = a }
            if (b == userarray[j]) {
                score += 1;
            } else { fixed = b }
            if (c == userarray[j]) {
                score += 1;
            } else { fixed = c }
        }
        if (score == 3) {
            alert('YOU won!');
            scoreboard.setAttribute('style', 'display:grid');
            compscore.innerHTML = `COMPUTER:LOST`;
            playerscore.innerHTML = `YOU:WON`
            gameboard.setAttribute('style', 'display:none');
            break;
        } score = 0;
        for (let j = 0; j < computerarray.length; j++) {
            if (a == computerarray[j]) {
                score += 1
            }
            if (b == computerarray[j]) {
                score += 1
            } if (c == computerarray[j]) {
                score += 1
            }
        } if (score == 3) {
            alert('YOU lost!');
            scoreboard.setAttribute('style', 'display:grid');
            compscore.innerHTML = `COMPUTER:WON`;
            playerscore.innerHTML = `YOU:LOST`
            gameboard.setAttribute('style', 'display:none');
            break;
        }

    }
}
function replay() {
    location.reload();
}










