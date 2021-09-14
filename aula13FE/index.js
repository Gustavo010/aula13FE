//Adiciona um valor ao localstorage
//localStorage.setItem("id",35);

//captura um valor ao localstorage
//localStorage.getItem("id");

//apaga um valor especifico no localstroage
//localStorage.removeItem("id");

//limpa todos os valores no localstorage
//localStorage.clear();

//function markAlert(e) {
//let card = e.parentNode.style;
//
//(card.backgroundColor === "rgba(219, 32, 32, 0.5)") ? card.backgroundColor = "#FFFFFF" : card.backgroundColor = "rgba(219, 32, 32, 0.5)";



var body = document.querySelector("body");

function loadData(e) {
    let file = e.files[0];

    let fr = new FileReader();//S2

    fr.onload = () => {
        let data = JSON.parse(fr.result);

        generateHTML(data);
    }

    fr.readAsText(file);
}

function generateHTML(data) {

{   let title = document.createElement("h2");
    title.innerHTML = data[0].titulo;

    let autor = document.createElement("h4");
    autor.innerHTML = data[0].autor;

    let capa = document.createElement("img");
    capa.src = data[0].capa;
    capa.style.width = "200px";

    body.appendChild(title);
    body.appendChild(autor);
    body.appendChild(capa);
}

    {let title = document.createElement("h2");
    title.innerHTML = data[1].titulo;

    let autor = document.createElement("h4");
    autor.innerHTML = data[1].autor;

    let capa = document.createElement("img");
    capa.src = data[1].capa;
    capa.style.width = "200px";

    body.appendChild(title);
    body.appendChild(autor);
    body.appendChild(capa);
}
}