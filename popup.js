const quotes = [
  { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", author: "Mark Twain" }
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').textContent = `"${quote.text}"`;
  document.getElementById('author').textContent = `- ${quote.author}`;
}

function getWeather() {
  const url = `https://wttr.in/Erlangen?format=j1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherDiv = document.getElementById('weather');
      const currentCondition = data.current_condition[0];
      weatherDiv.innerHTML = `
        <h3>Weather in Erlangen</h3>
        <p>Temperature: ${currentCondition.temp_C}°C / ${currentCondition.temp_F}°F</p>
        <p>Condition: ${currentCondition.weatherDesc[0].value}</p>
        <p>Humidity: ${currentCondition.humidity}%</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather').textContent = 'Unable to fetch weather data';
    });
}

document.addEventListener('DOMContentLoaded', function() {
  displayRandomQuote();
  document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
  getWeather(); // Call getWeather directly without geolocation
});


function getRandomFinancialNews() {
  const googleNewsRssUrl = 'https://news.google.com/rss/search?q=finance&hl=en-US&gl=US&ceid=US:en';

  fetch(googleNewsRssUrl)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll('item');
      if (items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const item = items[randomIndex];
        const title = item.querySelector('title').textContent;
        const link = item.querySelector('link').textContent;
        const pubDate = item.querySelector('pubDate').textContent;

        const newsDiv = document.getElementById('news');
        newsDiv.innerHTML = `
          <h3>Financial News</h3>
          <p><strong>${title}</strong></p>
          <p>Published: ${new Date(pubDate).toLocaleString()}</p>
          <a href="${link}" target="_blank">Read more</a>
        `;
      } else {
        document.getElementById('news').textContent = 'No financial news available at the moment.';
      }
    })
    .catch(error => {
      console.error('Error fetching news:', error);
      document.getElementById('news').textContent = 'Unable to fetch financial news.';
    });
}

// ... (rest of your code)

document.addEventListener('DOMContentLoaded', function() {
  displayRandomQuote();
  document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
  getWeather(); // Assuming you're still using the weather function
  getRandomFinancialNews(); // Add this line to fetch and display news
});
