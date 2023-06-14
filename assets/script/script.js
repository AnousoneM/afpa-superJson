// data à travailler
const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}

// Mise en place du header sans l'aide d'une boucle
let header = document.getElementById('header')

header.innerHTML = `
    <h1>${data.squadName}</h1>
    <h2><b>Hometown :</b> ${data.homeTown} // <b>Formed :</b> ${data.formed}</h2>
`

// Creation d'une fonction pour afficher notre héro
function showHeroes(hero) {
    let allHeroes = document.getElementById('allHeroes')
    allHeroes.innerHTML += `
    <div class="col-lg-3 col-10 mt-3 border shadow p-3">
        <h3 class="text-center">${hero.name}</h3>
        <ul>
            <li><b>Secret identity :</b> ${hero.secretIdentity}</li>
            <li><b>Age :</b> ${hero.age}</li>
            <li><b>Superpowers :</b></li>
        <ul>
            ${hero.powers.map(power => '<li>' + power + '</li>').join('')} 
        </ul>
    </div>
    `
}

// Boucle pour parcourir tous les membres
data.members.forEach(hero => {
    showHeroes(hero)
})