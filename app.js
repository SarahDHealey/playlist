$(document).ready(function(){
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data){

///////////chooseTracks & clear buttons - events//////////
        $("#chooseTracks").click(function () {
            window.location.href = "playlist.html";
        });

        $('#clear').click(function(){
            $('#bin').html("");
        });

///////////appending random images to the homepage///

        var shuffled = [];
        for (i=0; i<data.results.length; i++) {
            shuffled.push(data.results[i].cover_art);
            shuffle(shuffled);
        }
        for (ind=0; ind<3; ind++) {
            var stuff1 = "images";
            var stuff2 = stuff1 + '/'+shuffled[ind];
            ($("<img>").attr({src: stuff2, id: "track"+ind})).appendTo('#containerDivRight');
        }

        var newArray = [];
        for (i=0; i<data.results.length; i++) {
            newArray.push(data.results[i].cover_art);
        }

///////////loading the minis to the playlist page///

        for (ind=0; ind<data.results.length; ind++) {
            var mini1 = "images";
            var mini2 = mini1 + '/'+newArray[ind];
            ($("<img>").attr({class: "mini", src: mini2, id: data.results[ind].id})).appendTo('#mainTopScrolling');
            document.getElementById(data.results[ind].id).addEventListener('click', nameTitleList);
        }

        function nameTitleList(e) {
          var bin = document.getElementById('bin').innerHTML;
          var selectedId = e.currentTarget.id;
          for (var i = 0; i < data.results.length; i++) {
              if (selectedId == data.results[i].id) {
                    bin += "   <li>"+ data.results[i].artist+ ": " + data.results[i].title+"</li>";
                    document.getElementById('bin').innerHTML = bin;
              }
          }
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

///////////ajax post///////

        $('#send').click(function(e){
            $.ajax({
                url: 'https://lit-fortress-6467.herokuapp.com/post',
                method: 'post',
                // data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    console.log(data);
                    console.log(textStatus);
                    console.log(jQxhr);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
        });
        e.preventDefault();
        });
});
});
