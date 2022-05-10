const dataButton = document.getElementById("result");
var cardRow = document.getElementById("cards");
const newCard=document.getElementsByClassName("newCard");
console.log(newCard)





function getWeather(){
  // newCard[0].removeChild(cardRow);
  
var input = document.getElementById("form").value;
fetch(`https://goweather.herokuapp.com/weather/${input}`)
.then((data)=>(data.json()))
.then((data1)=>{
  console.log(data1)
  document.getElementById("temp").innerHTML=`Temprature : ${data1.temperature}`
  document.getElementById("wind").innerHTML=`Wind : ${data1.wind}`
  document.getElementById("des").innerHTML=`Describtion : ${data1.description}`;



//days

for(let i=0; i<data1.forecast.length; i++){
  
  
  cardRow.innerHTML +=`
  
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                  <img src="https://m.economictimes.com/thumb/msid-51838086,width-1200,height-900,resizemode-4,imgsize-133706/things-you-can-do-to-beat-the-heat-this-summer.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                    <h6 id="day1">${data1.forecast[i].day}</h6>
                                    <p id="day1-para">${data1.forecast[i].temperature}</p>
                                    <p id="day1-para2">${data1.forecast[i].wind}</p>
                                </div>
                            </div>
                        </div>
                
                </div> `
                
  
  
}
console.log(cardRow)


})
.catch((error)=>{
  console.log(error);
})

}
//event Listner
dataButton.addEventListener("click",getWeather);


