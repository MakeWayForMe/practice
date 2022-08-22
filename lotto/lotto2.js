const 번호생성 = document.querySelector('#create');
const 번호생성10번 = document.querySelector('#create10');
const 추첨결과 = document.querySelector('.result');
const 몇번나왔냐 = document.querySelector('.about');
const 몇번확인버튼 = document.querySelector('.nankai');


(function about() {
    var num = '';
    for(var i=1; i<=45; i++) {
        num += `<p>${i}번 = <span>0</span> 회</p>`
    }
    몇번나왔냐.innerHTML = num;
})();

let n = 1;
const 추첨 = () => {
    const 횟수리스트 = document.querySelectorAll('.about p span');
    const 횟수리스트배열 = [];
    for(var v=0; v<45; v++) {
        횟수리스트배열.push(횟수리스트[v].textContent);
    }

    const 주머니 = [];
    for(var i=1; i<=45; i++) {
        주머니.push(i);
    }
    주머니.sort(() => Math.random() - 0.5);

    const 뽑기 = 주머니.slice(0, 6);
    const 결과 = 뽑기.sort((a, b) => a - b);

    $('.history').append(`<tr><th>${n} 회차</th><td>${결과}</td>`);
    n++;

    var atari = '';
    for(var k in 결과) {
        if(결과[k] < 10) {
            atari += `<span class="a">${결과[k]}</span>`;
        } else if(결과[k] >= 10 && 결과[k] < 20){
            atari += `<span class="b">${결과[k]}</span>`;
        } else if(결과[k] >= 20 && 결과[k] < 30){
            atari += `<span class="c">${결과[k]}</span>`;
        } else if(결과[k] >= 30 && 결과[k] < 40){
            atari += `<span class="d">${결과[k]}</span>`;
        } else if(결과[k] >= 40){
            atari += `<span class="e">${결과[k]}</span>`;
        }
        var 횟수 = Number(횟수리스트[결과[k] - 1].textContent);
        횟수리스트[결과[k] - 1].innerHTML = 횟수 + 1;
    }
    추첨결과.innerHTML = atari;
};

번호생성.addEventListener('click', 추첨);
번호생성10번.addEventListener('click', function() {
    for(i=1;i<=10;i++) {
        추첨()
    }
});


let 온오프 = false;
function 열고닫고() {
    if(온오프 == false) {
        몇번나왔냐.classList.add('on');
        온오프 = true;
    } else {
        몇번나왔냐.classList.remove('on');
        온오프 = false;
    }
}

몇번확인버튼.addEventListener('click',열고닫고);