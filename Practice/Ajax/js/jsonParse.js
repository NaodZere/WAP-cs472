var jsonString = '{"window":{"title":"Sample Widget","width":500,"height":500},"image":{"src":"images/logo.png","coords":[250,150,350,400],"alignment":"center"},"messages":[{"text":"Save","offset":[10,30]},{"text":"Help","offset":[0,50]},{"text":"Quit","offset":[30,10]}],"debug":"true"}';

var data = JSON.parse(jsonString);

var coord = data.image.coords[2];
console.log(coord); // Output: 350
var title = data.window.title;
console.log(title);
var len = data.messages.length;
console.log(len);
var y = data.messages[len - 1].offset[1];
console.log(y);

  
//   var stringFy ={
//     window: { title: 'Sample Widget', width: 500, height: 500 },
//     image: {
//       src: 'images/logo.png',
//       coords: [ 250, 150, 350, 400 ],
//       alignment: 'center'
//     },
//     messages: [
//       { text: 'Save', offset: [Array] },
//       { text: 'Help', offset: [Array] },
//       { text: 'Quit', offset: [Array] }
//     ],
//     debug: 'true'
//   }

//   var str = JSON.stringify(stringFy);
//   console.log(str);