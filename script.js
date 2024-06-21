// let key="e6fe76735158befccc0eb22b5fd8bdb1"
// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async()=>{
        let key="e6fe76735158befccc0eb22b5fd8bdb1"
        let place=document.querySelector("#location").value
        let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await data.json()
        console.log(finalOutput)

        let tempValue=document.querySelector(".temp_value")
        let humidValue=document.querySelector(".humid_value")
        let weatherCondition=document.querySelector("#Weather_condition")

        let finalTemp=Math.round(finalOutput.main.temp-273)
        let finalHumid=(finalOutput.main.humidity)
        let finalCondition=(finalOutput.weather[0].main).toLowerCase()
        console.log(finalCondition)

        tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid} kmph`
        weatherCondition.innerHTML=`${finalCondition}`
    
    let weatherimage=document.getElementById("img")
    let background=document.getElementById("main_container")

    switch(finalCondition) {
        case "haze":
            weatherimage.src='./assest/hazeimg.jpg'
            background.style.backgroundImage="url(./assest/haze_background.webp)"
            break;

        case "dust":
            weatherimage.src=`./assest/dustimg.jpg`
            background.style.backgroundImage="url(./assest/dust_bcg.gif)"
            break;

        case "clouds":
            weatherimage.src=`./assest/cloudsimg.jpg`
            background.style.backgroundImage="url(./assest/clouds_bcg.gif)"        
            break;    
            
        case "snow":
            weatherimage.src=`./assest/snowimg.jpg`
            background.style.backgroundImage="url(./assest/snowbcg.jpg)"       
            break;

        case "rain":
            weatherimage.src=`./assest/rainimg.jpg`
            background.style.backgroundImage="url(./assest/raining_bcg.gif)"           
            break;
        case "mist":
            weatherimage.src=`./assest/mistImg.avif`
            background.style.backgroundImage="url(./assest/mist_bcg.jpg)"           
            break;

        default:
            break;
     }
   }
    fetchData()
})


































