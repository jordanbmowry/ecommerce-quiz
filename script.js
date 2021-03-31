let containers = document.getElementsByClassName('container');
let button = document.querySelector('button');
let firstResult = document.getElementById('result-1');
let secondResult = document.getElementById('result-2');
let thirdResult = document.getElementById('result-3');

let questionOneInputs = document.getElementsByName('question-1');
let questionTwoInputs = document.getElementsByName('question-2');
let questionThreeInputs = document.getElementsByName('question-3');

let correctInputQuestionOne = document.getElementById('shopcommerce');
let correctInputQuestionTwo = document.getElementById('everything');
let correctInputQuestionThree = document.getElementById('all-the-above');
let activeQuestion = 0;
console.log(activeQuestion);
function nextScreen() {
	let nextActive = document.querySelector(`.container-${activeQuestion}`);
	for (container of containers) {
		container.classList.remove('active');
	}
	activeQuestion += 1;
	console.log(activeQuestion);
	if (activeQuestion === 4) {
		button.classList.add('hide');
	}
	if (activeQuestion < 4) {
		nextActive.classList.add('active');
	} else {
		activeQuestion = 0;
		nextActive.classList.add('active');
	}
	if (correctInputQuestionOne.checked) {
		firstResult.textContent = 'Correct';
		firstResult.style.backgroundColor = 'green';
	} else {
		firstResult.textContent = 'Incorrect';
		firstResult.style.backgroundColor = 'red';
	}
	if (correctInputQuestionTwo.checked) {
		secondResult.textContent = 'Correct';
		secondResult.style.backgroundColor = 'green';
	} else {
		secondResult.textContent = 'Incorrect';
		secondResult.style.backgroundColor = 'red';
	}
	if (correctInputQuestionThree.checked) {
		thirdResult.textContent = 'Correct';
		thirdResult.style.backgroundColor = 'green';
	} else {
		thirdResult.textContent = 'Incorrect';
		thirdResult.style.backgroundColor = 'red';
	}
}

button.addEventListener('click', nextScreen);
