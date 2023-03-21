// Declare an asynchronous function that fetches data from a JSON API
async function fetchData() {
    try {
      // Make a GET request to the API using the fetch() method
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // Parse the response data as JSON using the json() method
      const data = await response.json();
  
      // Log the parsed data to the console
      console.log(data);
    } catch (error) {
      // If an error occurs, log the error to the console
      console.error(error);
    }
  }
  
  // Call the fetchData() function to fetch and log data from the API
  fetchData();
  