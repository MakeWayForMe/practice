const root = document.querySelector('#root');
const field = document.querySelector('#quiz');
const start = document.querySelector('#start');
const answer = document.querySelector('#answer');
const form = document.querySelector('#form');
const formBtn = document.querySelector('#form button');


// const sentence = ['apple'];
const sentence = ['apple','activity','government','computer','method','award','stand'];
let state = true;
let xth ="";
const quiz = () => {
    if(sentence.length > 0) {
        if(state == true) {
            answer.value = '';
            start.innerText = '다음';
            form.classList.add('show');
            sentence.sort(() => Math.random() - 0.5);
            const alphabet = sentence[0].split("");
            xth = Math.floor(Math.random() * alphabet.length);
            alphabet.splice(xth,1,"X");
            let elem = "";
            for(i of alphabet) {
                if(i === "X") {
                    elem += `<span class="void">${i}</span>`;
                } else {
                    elem += `<span>${i}</span>`;
                }
            }
            field.innerHTML = elem;
        } else {
            alert('문제를 먼저 푸세여');
        }
        state=false;
    } else {
        root.innerHTML = '<h1>끝</h1>';
    }
};
console.log(sentence.length);
const onSubmit = () => {
    if(answer.value === sentence[0]) {
        const space = document.querySelector('.void');
        const alphabet = sentence[0].split("");
        space.innerText = alphabet[xth];
        space.classList.add('clear');
        sentence.shift();
        state=true;
    } else {
        alert('틀림 ㅋㅋ');
    }
};




start.addEventListener('click', () => quiz());
formBtn.addEventListener('click', () => onSubmit());