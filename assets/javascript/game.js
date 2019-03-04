$(document).ready(function(){

let trump = {
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

$("#trump-health").text("Health: " + trump.health);
$("#obama-health").text("Health: " + obama.health);
$("#bush-health").text("Health: " + bush.health);
$("#clinton-health").text("Health: " + clinton.health);

$("#trump-card").data(trump);
$("#obama-card").data(obama);
$("#bush-card").data(bush);
$("#clinton-card").data(clinton);

//picking initial player
if(enemyList.length===0){
    $(".card-image").on("click", function(){
        let commander = this.parentNode;
        $("#defectors").html([$("#trump-card"),$("#obama-card"),$("#bush-card"),$("#clinton-card")]);
        $("#commander").html(commander);
        $("#defectors").each(function(){
            console.log(1);
            enemyList.push($(this));
        });
        


    })
}

})