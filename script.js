function lluviaDePajaros() {
	let pajarito = document.createElement("img");
	pajarito.src = "image (2).png";
	pajarito.className = "element";
	pajarito.style.left = `${1 + Math.random() * 80}%`;
	let tamañoAleatorio = 50 + Math.random() * 100; 
	pajarito.style.width = `${tamañoAleatorio}px`;
	pajarito.style.height = "auto";
	document.querySelector("body").appendChild(pajarito);
	setTimeout(() => {
		pajarito.remove();
	}, 20000);
}

setInterval(lluviaDePajaros, 1000);
