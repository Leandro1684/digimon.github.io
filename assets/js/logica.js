//Audio de la página web

function reproducirAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}


//Contenido de la Tabla

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
        // iterar sobre el array de objetos y crear las filas de la tabla
        const tbody = document.querySelector('#tabla tbody');
        data.forEach(obj => {
            // crear la fila
            const tr = document.createElement('tr');
            // agregar la celda con el nombre
            const tdNombre = document.createElement('td');
            tdNombre.textContent = obj.name;
            tr.appendChild(tdNombre);
            // agregar la celda con la imagen
            const tdImagen = document.createElement('td');
            const img = document.createElement('img');
            img.src = obj.img;
            tdImagen.appendChild(img);
            tr.appendChild(tdImagen);
            // agregar la celda con el texto
            const tdTexto = document.createElement('td');
            tdTexto.textContent = obj.level;
            tr.appendChild(tdTexto);
            // agregar la fila a la tabla
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error(error));



//Buscador por nombre

const cardButton2 = document.getElementById('card-button2');
cardButton2.addEventListener('click', search);
function search() {
    // Obtener la busqueda del campo de entrada
    const buscar = document.getElementById("search-bar").value;
    var url = `https://digimon-api.vercel.app/api/digimon/name/${buscar}`;
    console.log(url)

    // Llamado a la API para tener los resultados
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${buscar}`)
        .then(response => response.json())
        .then(data => {
            // Obtengo el primer resultado de la API
            const result = data;

            // Actualizo la card con los resultados
            document.getElementById("card-image2").src = result[0].img;
            document.getElementById("card-name2").textContent = result[0].name;
            document.getElementById("card-level2").textContent = result[0].level;
        })
        .catch(error => console.error(error));
}



