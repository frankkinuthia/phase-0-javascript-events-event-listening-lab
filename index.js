const input = document.getElementById("button");
console.log(input);
function addingEventListener() {
	input.addEventListener("click", addingEventListener);
}
