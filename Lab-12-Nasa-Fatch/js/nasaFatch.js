document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#view_button").addEventListener("click", getPicture);
    console.log("apod");
  });
  
  function getPicture() {
    const date = document.querySelector("#date").value;
  
    fetch(`https://api.nasa.gov/planetary/apod?api_key=sD8OlUiqRBpXKsOpkFO5A8F2oi0iZwtO00dTlbM1&date=${date}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(showPicture)
      .catch(noPicture);
  
    console.log("getpic");
  }
  
  function showPicture(data) {
    document.querySelector("#pic").setAttribute("src", data.url);
    document.querySelector("#title").textContent = data.title;
  }
  
  function noPicture(error) {
    alert(error);
  }
  