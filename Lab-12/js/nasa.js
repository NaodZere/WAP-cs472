// Define constants
const API_KEY = 'Jxlm5AOzoYVAlOI95juUxxN3SlkW2zLoYzu3iomd';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Get DOM elements
const titleEl = document.getElementById('title');
const dateEl = document.getElementById('date');
const pictureEl = document.getElementById('picture');
const explanationEl = document.getElementById('explanation');

// Fetch data from NASA API and update DOM
async function fetchNASAData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log('NASA APOD data:', data);
    updateDOM(data);
  } catch (error) {
    console.error(error);
  }
}

// Update DOM with data from NASA API
function updateDOM(data) {
  titleEl.textContent = data.title;
  dateEl.textContent = data.date;
  pictureEl.src = data.hdurl;
  explanationEl.textContent = data.explanation;
}

// Call fetchNASAData to load initial data
fetchNASAData();
