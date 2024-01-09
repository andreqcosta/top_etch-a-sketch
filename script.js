const container = document.querySelector(".container")

for (let i = 0; i < 16; i++){
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.cssText = "height: 30px; width: 480px; border: 1px solid black; display: flex; flex-orientarion: column;"
    container.appendChild(line);
    for (let j = 0; j < 16; j++){
	const cell = document.createElement('div');
	cell.classList.add('cell');
	cell.style.cssText = "height: 30px; width: 30px; border: 1px solid black;"
	cell.addEventListener("mouseover", (event) => {
	    cell.style.cssText += 'background: black; border: 1px solid white'
	});
	line.appendChild(cell);
    }
}


