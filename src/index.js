export default {
  async fetch(request, env) {
    try {
      const apiKey = env.OPENWEATHER_API_KEY;  // Pegando a chave do Dashboard
      const city = "Austin";
      const temperature = await getTemperature(city, apiKey);

      return new Response(generateHTML(city, temperature), {
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      });

    } catch (error) {
      return new Response("Error fetching weather data.", { status: 500 });
    }
  }
};

// Função para buscar a temperatura da cidade na API do OpenWeather
async function getTemperature(city, apiKey) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  const response = await fetch(weatherURL);
  if (!response.ok) throw new Error("Failed to fetch weather data");

  const data = await response.json();
  return data.main.temp;
}

// Função para gerar a página HTML corrigida
function generateHTML(city, temperature) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Weather in ${city}</title>
      <meta name="description" content="Educational weather information for Austin, Texas. Stay informed with real-time weather data.">
      <meta name="keywords" content="Education, Weather, Austin, School, Learning, Climate, Temperature">
      <meta name="author" content="Alicino Moura">
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin: 50px;
        }
        h1 {
          font-size: 2rem;
        }
      </style>
    </head>
    <body>
      <h1>Weather in ${city}</h1>
      <p>The current temperature is <strong>${temperature.toFixed(1)}°C</strong>.</p>
    </body>
    </html>
  `;
}
