<<<<<<< HEAD
var apiKey = "&units=imperial&appid=7fc2d608ebf66e206f3145c2c83cb073";
var apiUrl5 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiIcon = "https://openweathermap.org/img/wn/";
var apiUvi = "https://api.openweathermap.org/data/2.5/onecall?lat=";
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//var apiLyric="https://api.lyrics.ovh/v1/artist/title";
var apiLyric = "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime";

function testLyricApi() {

    fetch(apiLyric)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    alert("data");
                });
            } else {
                alert("Wrong")
            }
        });
}


//     fetch(apiLyric)
//         .then(function(response) {
//                 if (response.ok) {
//                     response.json().then(function(data) {
//                             console.log
//                         }
//                     }
//                 });
//         }
//     else {
//         var message = $('<p class="col"></p>').text("NO DATA - INVALID CITY");
//         $(".holder").append(message);
//     }
// });
// }

// var submitBtnEl = $(".searchBtn"); //save button for input txt
// var keyId = "";
// var ll = null;

// function displayWeather(event) {
//     event.preventDefault();

//     var cityName = ($("#city").val());
//     if (!cityName) { return; }
//     if ($(".currDay").children().length > 0) {
//         $(".currDay").empty();
//         currDay(cityName);
//     } else { currDay(cityName); }

//     if ($(".holder").children().length > 0) {
//         debugger;
//         $(".holder").remove();
//         fiveDay(cityName);
//     } else { fiveDay(cityName); }
// }

// function fiveDay(tname) {
//     var infoEl = $(".container-data");
//     var divContainer = $('<div class="holder col-12 d-flex position-relative" style="justify-content: space-evenly;"></div>');
//     infoEl.append(divContainer);

//     fetch(apiUrl5 + tname + apiKey)
//         .then(function(response) {
//             if(response.ok) {
//                 response.json().then(function(data) {
//                     var list = data.list;
//                     for (var i = 0; i < list.length; i++) {

//                         if ((list[i].dt_txt.split(" ")[1]) === "12:00:00") {
//                             var divC = $('<div></div>');
//                             var changeDt = moment.unix(list[i].dt).format("MM/DD/YY");
//                             var date = $('<h3 class=""></h3>').text(changeDt);
//                             var iconUrl = apiIcon + list[i].weather[0].icon + "@2x.png";
//                             var icon = $('<img>').attr('src', iconUrl);
//                             var temp = $('<p class=""></p>').text('Temp: ' + list[i].main.temp + ' F');
//                             var wind = $('<p class=""></p>').text('Wind: ' + list[i].wind.speed + 'MPH');
//                             var humid = $('<p class=""></p>').text('Humidity: ' + list[i].main.humidity + '%');
//                             divC.append(date, icon, temp, wind, humid);
//                             // $(".holder").append(date, icon, temp, wind, humid);
//                             $(".holder").append(divC);
//                         }
//                     }
//                 });
//             } else {
//                 var message = $('<p class="col"></p>').text("NO DATA - INVALID CITY");
//                 $(".holder").append(message);
//             }
//         });
// }

// function currDay(tName) {
//     fetch(apiUrl1 + tName + apiKey)
//         .then(function(response) {
//             if(response.ok) {
//                 response.json().then(function(data) {
//                     var keyId = data.dt;
//                     localStorage.setItem(keyId, tName);
//                     var nameBtn = $('<button class="cityBtn mb-3 w-100" data-id="' + keyId + '"type="submit"></button>').text(tName);
//                     $(".city-container").append(nameBtn);
//                     var normDt = moment.unix(data.dt).format("MM/DD/YY");
//                     var date = $('<h2 class="col"></h2>').text(tName + " (" + normDt + ")");
//                     var iUrl = apiIcon + data.weather[0].icon + "@2x.png";
//                     var icon = $('<img>').attr('src', iUrl);
//                     var temp = $('<p class="col"></p>').text('Temp: ' + data.main.temp + ' F');
//                     var wind = $('<p class="col"></p>').text('Wind: ' + data.wind.speed + 'MPH');
//                     var humid = $('<p class="col"></p>').text('Humidity: ' + data.main.humidity + '%');
//                     $(".currDay").append(date, icon, temp, wind, humid);
//                 });
//             }else {
//                 var message = $('<p class="col"></p>').text("NO DATA - INVALID CITY");
//                 $(".holder").append(message);
//         });
// }



//submitBtnEl.on("click", getSong);

// for (var a = 0; a < localStorage.length; a++) {
//     var keyId = localStorage.key(a);
//     var nameBtn = $('<button class="cityBtn mb-3 w-100" type="submit"></button>').text(localStorage.getItem(keyId));
//     $(".city-container").append(nameBtn);
// }
=======
let TasteDiveData;
let NapsterData;
let search;
const apiKey = {
    TasteDive: '426208-MusicRec-QH74RS8V',
    Napster: 'MDc1YWUxMWUtYjY0NS00ZGI5LTgxNzEtZjRmMWY0NGQ3Nzgx'
}

function getSongData(search = 'metallica') {
    let TasteDiveApi = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${search}&k=${apiKey.TasteDive}`
    let napsterApi = "https://api.napster.com/v2.2/artists/top";

    const options = {headers: {apikey: apiKey.Napster}};

    fetch(TasteDiveApi)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    fetch(napsterApi, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
};

getSongData()
>>>>>>> dev
