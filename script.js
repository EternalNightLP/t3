const seriesData = [
  {
    id: "stranger-things",
    title: "Stranger Things",
    image: "assets/images/stranger-things.jpg",
    description: "A group of kids uncover a series of supernatural mysteries in 1980s Indiana.",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    image: "assets/images/witcher.jpg",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world.",
    trailer: "https://www.youtube.com/embed/ndl1W4ltcmg"
  },
  {
    id: "money-heist",
    title: "Money Heist",
    image: "assets/images/money-heist.jpg",
    description: "A criminal mastermind who goes by 'The Professor' plans the biggest heist in recorded history.",
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
  }
];

if (document.getElementById('series-container')) {
  const container = document.getElementById('series-container');
  seriesData.forEach(series => {
    const div = document.createElement('div');
    div.className = 'thumbnail';
    div.innerHTML = `<a href="details.html?id=${series.id}"><img src="${series.image}" alt="${series.title}"><p>${series.title}</p></a>`;
    container.appendChild(div);
  });
}

if (document.getElementById('series-detail')) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const selectedSeries = seriesData.find(s => s.id === id);
  const container2 = document.getElementById('series-detail');

  if (selectedSeries) {
    container2.innerHTML = `
      <h1>${selectedSeries.title}</h1>
      <p>${selectedSeries.description}</p>
      <iframe width="100%" height="500" src="${selectedSeries.trailer}" frameborder="0" allowfullscreen></iframe>
    `;
  } else {
    container2.innerHTML = '<p>Series not found.</p>';
  }
}