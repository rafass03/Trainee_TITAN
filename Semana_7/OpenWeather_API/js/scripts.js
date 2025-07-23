const apiKey = "b1b9996070edf4009d2bbf327ea6571c"; // Minha key da OpenWeather API
const apiKey2 = "7csEFMycq-k5a6Npu31vlfNnFfLgfFiJNQ6h-NFCqio"; // Minha key da Unsplash API

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const getWeatherData = async (city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

// Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country}/flat/64.png`
  );
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  // Change bg image
  setBackgroundImage(city);
  weatherContainer.classList.remove("hide");
};

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});

const setBackgroundImage = async (city) => {
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&per_page=1&orientation=landscape&client_id=${apiKey2}`;
  try {
    const res = await fetch(unsplashUrl);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      const imageUrl = data.results[0].urls.regular;
      document.body.style.backgroundImage = `url("${imageUrl}")`;
    } else {
      console.log("Nenhuma imagem encontrada no Unsplash para esta cidade.");
    }
  } catch (error) {
    console.error("Erro ao buscar imagem no Unsplash:", error);
  }
};

// Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});
