// Make a GET request to a JSON API using the fetch() method
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Parse the response data as JSON using the json() method
  .then(data => console.log(data)) // Log the parsed data to the console
  .catch(error => console.error(error)); // Log any errors that occur to the console
