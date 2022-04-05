// var http = require("http");

// // https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/
// var fetchData = function (callback) {
//   console.log("in fetch data");
//   return 'done!';
// };

// // var callback = function (callback) {
// //   console.log("in fcallback");
// // };

// function greeting(name) {
//     alert('Hello ' + name);
//   }

// //create a server object:
// http
//   .createServer(function (req, res) {
//     function processUserInput(callback) {
//         var name = prompt('Please enter your name.');
//         callback(name);
//       }
      
//       processUserInput(greeting);

//     res.write("Cakkback World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(3301); //the server object listens on port 8080
