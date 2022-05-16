let weather = {
  apiKey: "2aefa851173a1447ae3081d0bd177a33",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {

    //getting data 
    const { name } = data;
    console.log(data);
    const { icon, description } = data.weather[0];
    console.log(icon)
    console.log(description)
    console.log(data.weather[0])
    const { temp, humidity,rain } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
      document.querySelector("#searchinput").value=''
  },
  search: function () {
    this.fetchWeather(document.querySelector("#searchinput").value);
  },
};

document.querySelector("#searchbutton").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector("#searchinput")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("bangalore");