export default {
  async fetch(request, env) {
    const apiKey = env.OPENWEATHER_API_KEY;  // Pegando a chave do Dashboard
    const city = "Austin";
    const temperature = await getTemperature(city, apiKey);

    return new Response(`Temperature in ${city}: ${temperature}°C`, {
      headers: { "Content-Type": "text/html" },
    });
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
