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

let player = 0;
let defender;

$("#trump-health").text("Approval Rating: " + trump.health);
$("#obama-health").text("Approval Rating: " + obama.health);
$("#bush-health").text("Approval Rating: " + bush.health);
$("#clinton-health").text("Approval Rating: " + clinton.health);

//card movement when clicked
$(".card-image").on("click", function(){
    console.log(player);
    //picking initial player
    if(player===0){
        player = this.parentNode.parentNode;
        $("#opponents").html([$("#trump-card"), $("#obama-card"), $("#bush-card"), $("#clinton-card")]);
        $("#player").html(player);
    }
    //picking person to debate
    else{
        // console.log($("#defender").html());
        $("#opponents").append($("#defender").html());
        // console.log(this.parentNode.parentNode);
        $("#defender").html(this.parentNode.parentNode);
        // console.log(player);
    }

})



})