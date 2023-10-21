const inputElement = document.querySelector('#product-name');
const countNumber = document.querySelector('#remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function count(event) {
    const string = event.target.value;
    const stringLength = string.length;

    
    const remainingChars = maxAllowedChars - stringLength;

    countNumber.textContent = remainingChars;
    if (remainingChars===0){
        inputElement.classList.add('error');
        countNumber.classList.add('error');
    }
    else if(remainingChars<=10){
        inputElement.classList.remove('error');
        countNumber.classList.remove('error');
        inputElement.classList.add('warning');
        countNumber.classList.add('warning');
    } else {
        inputElement.classList.remove('warning');
        countNumber.classList.remove('warning');
    }
}

inputElement.addEventListener('input', count);

