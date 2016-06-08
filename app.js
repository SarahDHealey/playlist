



    $(document).ready(function(){
        $.get("https://lit-fortress-6467.herokuapp.com/object", function(data){


for (var i=0; i<data.results.length; i++) {

  var stuff1 = "images";
  var random = data.results[Math.floor(Math.random()*data.results.length)];

  var stuff2 = stuff1 + '/'+ random.cover_art;

$("<img>").attr({src: stuff2, id: "track"+i}).appendTo('#containerDivRight');
}

});
});




    $("#chooseTracks").click(function () {
          window.location.href = "playlist.html";
      });


          // $(stuff2).prependTo($("#containerDivRight"));
          //
          //   $('<div>', {id:"X"+i } ).appendTo('#containerDivRight');

      //how to setup multiple attributes at once
      // $( "#greatphoto" ).attr({
      //   alt: "Beijing Brush Seller",
      //   title: "photo by Kelly Clark"
      // });


      // for (var i=0; i<6; i++){
      // $('<div>', {id:"X"+i src: "images+ '/'+data.results[i].cover_art"}).appendTo('body');
      // }

      // for (var i=0; i<data.results.length; i++) {
      //
      //
      // }
      // $('div.mynav').append("<div id='mine'>"+mouse+"</div>");
      // $("#containerDivRight").append("<img>");
      // var cover = $(data.results[i].cover_art);
      // console.log(cover);

       // $("#containerDivRight").prepend($cover);

       // $(data.results[i].cover_art)
