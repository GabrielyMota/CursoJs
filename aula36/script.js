function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobre = form.querySelector('.sobre')
        const peso = form.querySelector('.peso')
        const alt = form.querySelector('.alt')

        pessoas.push({
            nome: nome.value,
            sobre: sobre.value,
            peso: peso.value,
            alt: alt.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobre.value} ` + `${peso.value} ${alt.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();