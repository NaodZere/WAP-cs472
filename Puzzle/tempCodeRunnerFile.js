const puzzleAreaDivs = Array.from(document.querySelectorAll('#puzzlearea div'));

puzzleAreaDivs.forEach((div, index) => {
  const x = ((index % 4) * 100);
  const y = (Math.floor(index / 4) * 100);
  
  div.classList.add('puzzlepiece');
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.backgroundImage = 'url("images/background.jpg")';
  div.style.backgroundPosition = `${-x}px ${-y}px`;
});

