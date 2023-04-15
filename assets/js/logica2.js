//Audio de la página web

function reproducirAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}


//Card API Random 

const cardImage = document.getElementById('card-image');
const cardName = document.getElementById('card-name');
const cardLevel = document.getElementById('card-level');
const cardButton = document.getElementById('card-button');

function cardRandom() {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomData = data[randomIndex];
            cardImage.src = randomData.img;
            cardName.textContent = randomData.name;
            cardLevel.textContent = randomData.level;
        })
        .catch(error => console.error(error));
}

cardButton.addEventListener('click', cardRandom); 

