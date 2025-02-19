const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
 // Create players using for loop
    // Type your code here
const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i <= PLAYERS.length; i++){
        if (i % 2 == 0){
            detailedPlayers.push({
                name:players[i],
                strength: getRandomStrength(),
                image:`./images/super-${i + 1}.png`,
                type: "hero"
            })
        }else{
            detailedPlayers.push({
                name:players[i],
                strength: getRandomStrength(),
                image:`./images/super-${i + 1}.png`,
                type: "villian"
            })
        }   
    }
   
    // console.log(detailedPlayers)
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    var random = Math.random() * 100
    return Math.ceil(random)
}

const buildPlayers = (players, type) => {
    console.log(players)
    let fragment = ''
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < 20; i++){
        if (type == "hero" && players[i].type == 'hero'){
            console.log(type)

            fragment += `<div class="player">
            <img src="${players[i].image}">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`
        }else{
            fragment += `<div class="player">
            <img src="${players[i].image}">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`
            
        }
    }


    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}