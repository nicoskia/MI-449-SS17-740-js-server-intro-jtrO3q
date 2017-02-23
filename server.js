// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Why hello there, friend! :)</h1>')
  } else if (request.url === '/random-joke') {
    response.write('<h1>Get ready for an amazing joke!</h1>')
    var num = (Math.floor(Math.random() * 3) + 1)
    if (num === 1) {
      response.write('<p>Knock knock.</p><p>Who\'s there?</p><p>The door.</p>')
    } else if (num === 2) {
      response.write('<p>Knock knock.</p><p>Alright, come in.</p>')
    } else if (num === 3) {
      response.write('<p>Knock knock.</p><p>Who\'s there?</p><p>Interrupting sloth.</p><p>Interrupting sloth who?</p><p>...</p><p>SLOOOOTTTTHHHHH!!!</p>')
    }
    response.end('<p>Return to the homepage <a href="/">here</a>.</p>')
  } else if (request.url === '/cuteness') {
    response.write('<h1>Look how cute it is!</h1><img src="http://cutepuppyclub.com/wp-content/uploads/2015/05/cute-puppy-3.jpg" alt="puppy">')
    response.end('<p>Return to the homepage <a href="/">here</a>.</p>')
  } else {
    response.write('<h1>Houston, we have a problem!</h1><img src="http://www.homemade-preschool.com/images/lunar-module-eagle.png" alt="spacecraft"><p>The requested URL ' + request.url + ' could not be found!</p>')
    response.end('<p>Return to the homepage <a href="/">here</a>.</p>')
  }
})

var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
