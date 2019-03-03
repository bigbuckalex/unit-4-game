$(document).ready(function(){

let trump = {
    name: "trump",
    health: 100,
    attack: 20,
    counter: 30
}

let obama = {
    health: 100,
    attack: 20,
    counter: 30
}

let bush = {
    health: 100,
    attack: 20,
    counter: 30
}

let clinton = {
    health: 100,
    attack: 20,
    counter: 30
}

let charList = [trump, obama, bush, clinton];

let enemyList = [];

let commander;

$("#trump-health").text(trump.health);
$("#obama-health").text(obama.health);
$("#bush-health").text(bush.health);
$("#clinton-health").text(clinton.health);

$("#trump-card").data(trump);
$("#obama-card").data(obama);
$("#bush-card").data(bush);
$("#clinton-card").data(clinton);


if(enemyList.length===0){
    $(".card-image").on("click", function(){
        // commander = this.data();
        console.log(event.target.parentNode.parentNode);
        // enemyList = ;
        $(".card").hide();
    })
}

console.log(trump.health);

})