(() => {
	console.log('fired')
	let textContainer = document.querySelector(".text-container")
		textButton =document.querySelector("button")
		bioButtons = document.querySelectorAll(".bio-buttons button")

	const dataContainer = ["This", "is", "some", "text!"];
	const newContainer = ["This", "is", "a", "join", "method", "result"]
	const billAndTed =["I am bill s Preston, Esq", "And I am Ted Theodore Logan, party on, Dude"]

	function showBioInfo(){
		arrayIndex = this.dataset.arrayref;

		textContainer.textContent =billAndTed[arrayIndex];
	}

	function joinArray(){
		textContainer.textContent = newContainer.join("");
	}

	dataContainer.forEach((word, index) => {
		textContainer.textContent += word;
		console.log(index);
	});

	for (let i=0; i<dataContainer.length; i++){
		console.log(i, dataContainer[i]);
		textContainer.textContent += dataContainer[i];
		//append the array contents to the paragraph log
	}

	textContainer.textContent +="I just added this with script!"; //attribute textcontent
	textButton.addEventListener("click", joinArray);

	bioButtons.forEach(button  => button.addEventListener("click", showBioInfo));
})();