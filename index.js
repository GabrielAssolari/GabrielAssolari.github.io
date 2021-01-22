// function meuEscopo() {
// 	const form = document.querySelector(".form");
// 	const resultado = document.querySelector(".resultado");
// 	const pessoas = [];

// 	function eventoForm(evento) {
// 		evento.preventDefault();

// 		const nome = form.querySelector(".nome").value;
// 		const sobrenome = form.querySelector(".sobrenome").value;
// 		const peso = form.querySelector(".peso").value;
// 		const altura = form.querySelector(".altura").value;

// 		pessoas.push({
// 			nome,
// 			sobrenome,
// 			peso,
// 			altura,
// 		});
// 		resultado.innerHTML += `<p>${nome} ${sobrenome} pesa ${peso}, tem ${altura} de altura, e seu IMC é de: ${(
// 			peso /
// 			altura ** 2
// 		).toFixed(2)}
// 			</p>`;
// 	}
// 	form.addEventListener("submit", eventoForm);
// }

// meuEscopo();

(function () {
	const form = document.querySelector(".form");
	const resultado = document.querySelector(".resultado");
	const pessoas = [];

	function eventoForm(evento) {
		evento.preventDefault();

		const nome = form.querySelector(".nome").value;
		const sobrenome = form.querySelector(".sobrenome").value;
		const peso = form.querySelector(".peso").value;
		const altura = form.querySelector(".altura").value;

		pessoas.push({
			nome,
			sobrenome,
			peso,
			altura,
		});
		resultado.innerHTML += `<p>${nome} ${sobrenome} pesa ${peso}kg, tem ${altura} metros de altura, e seu IMC é de: ${(
			peso /
			altura ** 2
		).toFixed(2)}
			</p>`;
	}
	form.addEventListener("submit", eventoForm);
})();
