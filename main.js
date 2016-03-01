var input1, input2;

input1 = document.querySelector('input:first-of-type');
input2 = document.querySelector('input:nth-of-type(2)');

function calculateClick() {
	answer.textContent = Number(input1.value) + Number(input2.value);
}

calculateBtn.addEventListener('click', calculateClick);

