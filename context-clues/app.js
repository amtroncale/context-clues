var friends = ["Adam", "Jessica", "Maverick", "Luke", "Frank"];
var locations = ["home", "work", "school", "McDonald's", "Frank's", "Braves' game", "Anfield", "Piggly Wiggly", "Walgreen's", "the gas station"];
var weapons = ["knife", "pistol", "shotgun", "flamethrower", "grenade", "rocket launcher", "catapult", "mace", "sword", "peanut allergy", "baseball bat", "beer bottle", "paperweight", "dysentery", "hands", "feet", "bo staff", "sai", "nunchucks", "throwing star"];

for (var i = 0; i < 101; i++) {
    var h3 = $(`<h3>Accusation: ${i}</h3>`);
    $('body').append(h3);
    if (i === 0) {
        h3.hide();
    }
    h3.click(closure(i));
}

function closure(num) {
    var clueNumber = num;
    var friend = friends[num % friends.length];
    var location = locations[num % locations.length];
    var weapon = weapons[num % weapons.length];
    return function () {
        alert(`Accusation ${clueNumber}: I accuse ${friend}, with the ${weapon} at ${location}!`);
    }
}