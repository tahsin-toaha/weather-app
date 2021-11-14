$(document).ready(function() {
       $("#searchInput").on("keyup", function(e) {
              var cityname = e.target.value;
              const APIkey = "c6058df7b61e3d6cb767b33d8a4a8087";

              //make a request to the server


              $.ajax({

                     url: `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`
              }).done(function(weatherdata)  {

                     console.log(weatherdata);

                     $("#profile").html(`
                     
              <div class="row">
              <div class="card" style="width: 18rem;">

              <img src="https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png">
              <div class="card-body">

                <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5> 

               <p class="card-text">The temperature at ${cityname} is = ${weatherdata.main.temp}&#8451; and it is feels like ${weatherdata.main.feels_like}&#8451; </p>
               <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about ${cityname}</a>
              </div>
              </div>
              </div>`);

              });

       })
})