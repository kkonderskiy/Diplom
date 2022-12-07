


test();

function test(){

    fetch(`http://localhost:4000/staffs`)
    .then(function (resp){return resp.json()})
    .then(function (data) {
        console.log(data);
        let j = 0;
        for(let i of data){

            document.querySelector(`.admin__block__content__${j+1}`).querySelector(".admin__block__content__p1").innerHTML = i.full_name
            j+=1;
        } 
        
    })


    

    /*
    

    fetch(`http://localhost:4000/news`)
        .then(function (resp){return resp.json()})
        .then(function (data) {
            console.log(data);
        })

    fetch(`http://localhost:4000/articles`)
    .then(function (resp){return resp.json()})
    .then(function (data) {
        console.log(data);
    })
    */
    
}




function start(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=vitebsk&appid=cf714b2ba505e0947a94a426423d22e3`)
    .then(function (resp){return resp.json()})
    .then(function (data) {
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".left_informations_temperature").innerHTML = Math.round(data.main.temp - 273) + ' C' + '&deg;';
        document.querySelector(".left_informations_footer_element").innerHTML = data.weather[0].main;

        document.querySelector(".pressure").innerHTML = 'Pressure '+ data.main.pressure + "hcpa";
        document.querySelector("#weather_img").innerHTML =`<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector(".humidity").innerHTML ='Humidity '+ data.main.humidity + " %";

        
        if(data.wind.gust != undefined){document.querySelector(".air_quality").innerHTML = 'Gust '+ data.wind.gust + "km/h ";}
        else{document.querySelector(".air_quality").innerHTML = 'No gusts'}
        
        document.querySelector(".wind").innerHTML ='Wind ' + data.wind.speed + "km/h ";
        document.querySelector(".visibility").innerHTML ='Visibility ' +data.visibility / 1000 + " km";

        return {lon: data.coord.lon, lat: data.coord.lat}
    })
    .then(obj => weatherDays(obj.lat, obj.lon))
    .catch(function (e){
        console.log(e);
    });


}
