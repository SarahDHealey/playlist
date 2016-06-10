
function readyFn() {
//so I start with one empty array for the data I get
//and one for the final info I need
    var images = [];
    var randArray = [];

//ajax call
    $.ajax({url:"https://lit-fortress-6467.herokuapp.com/object", success: function(data) {

//find the data I need, the array
//and push it into my images array
//images becomes an array of all album cover img names
      for (var i = 0; i < data.results.length; i++) {
      images.push(data.results[i].cover_art);
      }
//now for the fun...
//while your randArray, currently empty, has less than 3 items,
//pull a new random item from your images array
      while(randArray.length<3) {
      var newFilter = images[Math.floor((Math.random()*images.length))];

//If not already in your randArray, then go ahead and push it
      if ((randArray.indexOf(newFilter)) === -1) {
      randArray.push(newFilter);
//In this same loop, one at a time, also...
//create an img tag
//set the src attribute
//and append it to the div
      imageLocation = 'images/' +newFilter;
      $("<img>").attr({
        src: imageLocation}).appendTo($("#column"));
      }
    }

//and that's when I realize I maybe should have created an
//object where the id is the id and the value is the img
//I probably still can if I do...


for (var ind = 0; ind < data.results.length; ind++) {
var myObj = {};
myObj[data.results[ind].id] = data.results[ind].cover_art;
console.log(myObj);
/////something to come back to tomorrow;
//notes to self:
//redo the above so that you are working with this object, not an array
//right now you cannot access the corresponding id with the images
//without doing a whole lot of tomfoolery.
//If you redo it with the object, it should be much easier. 


}
}});
}

$(document).ready(readyFn);
