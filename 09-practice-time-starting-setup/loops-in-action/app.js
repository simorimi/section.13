
const calculateSumButton = document.getElementById('calculate-sum-button');

function sumView(){
    const inputElement = document.getElementById('user-number');
    const enteredNumber = inputElement.value; //여기가 꼬인점. 이벤트 발생을 하지않아도 해당 값의 인풋값을 알 수 있다.
    let sum = 0;
    for (let i = 0; i <= enteredNumber; i++){
        sum = sum + i;
    }
    const sumParagrph = document.getElementById('calculated-sum');
    sumParagrph.textContent = sum;
    sumParagrph.style.display = 'block';


}


calculateSumButton.addEventListener('click', sumView); //button에 대한 event는 click이다

const highlightLinksButtonElement = document.querySelector('#highlight-links button');


function highlight(){
    const anchorElements = document.querySelectorAll('#highlight-links a'); //이것또한 배열로 인식될 수 있구나.
    for (let anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}


highlightLinksButtonElement.addEventListener('click', highlight);

const userDataButtonElement = document.querySelector('#user-data button');
const userDataUl = document.getElementById('output-user-data');


const userDatas = {
    name: 'horim',
    age: 27,
    height: 174
};


function userDataFunc(){

    userDataUl.innerHTML = '';

    for(let userData in userDatas){
        const createLi = document.createElement('li'); //이게 안에 있고 밖에 있고에 따라 생성되는게 다름. 밖에 있으면 한 번 생성한 이후에는 재생성 안함.
        createLi.textContent = userData + ': ' + userDatas[userData];
        userDataUl.append(createLi);
    }
}

userDataButtonElement.addEventListener('click', userDataFunc);

const RolltheDiceButtonElement = document.querySelector('#statistics button');

function rollDice(){
    return Math.floor(Math.random()*6) + 1; //math.random()은 0과 1사이 무작위 수  Math.floor는 정수로 반내림
}

function rolltheDice(){
    const inputDiceNumber = document.getElementById('user-target-number').value;
    const numberUl = document.getElementById('dice-rolls');
    let boolean = false;

    numberUl.innerHTML = '';
    let i = 0;
    while(!boolean){
        const rolledNumber = rollDice();
        const createNumberLi = document.createElement('li');
        i++;
        createNumberLi.textContent = 'Roll ' + i + ': ' + rolledNumber;
        numberUl.append(createNumberLi);
        boolean = inputDiceNumber == rolledNumber; //=== 3개로 하면 안되는데 아마 input값을 문자로 받아서 그런가봄
        
    }

    const outputTotalRollNumber = document.getElementById('output-total-rolls');
    const outputTargetNumber = document.getElementById('output-target-number');

    outputTotalRollNumber.textContent = i;
    outputTargetNumber.textContent = inputDiceNumber;
}


RolltheDiceButtonElement.addEventListener('click', rolltheDice);