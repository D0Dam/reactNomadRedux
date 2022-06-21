const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.getElementById("num");

let count = 0;

const updateCounter = () => {
	num.innerText = count;
};

const handleAdd = () => {
	count = count + 1;
	updateCounter();
};

const handleMinus = () => {
	count = count - 1;
	updateCounter();
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
