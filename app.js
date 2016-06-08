$(document).ready(function(){
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data){

///////////link to playlist page//////////
      $("#chooseTracks").click(function () {
            window.location.href = "playlist.html";
        });

///////////appending random images to the homepage///

        newArray = [];
        for (i=0; i<data.results.length; i++) {
            newArray.push(data.results[i].cover_art);
            shuffle(newArray);
        }
        for (ind=0; ind<3; ind++) {
            var stuff1 = "images";
            var stuff2 = stuff1 + '/'+newArray[ind];
            ($("<img>").attr({src: stuff2, id: "track"+ind})).appendTo('#containerDivRight');
        }

///////////function shuffle(array)///////////

function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
   // While there remain elements to shuffle...
   while (0 !== currentIndex) {
     // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       // And swap it with the current element.
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
}


});
});
