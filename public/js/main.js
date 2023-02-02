const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname")
const City_name=document.getElementById("City_name");

const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");

const data_hide=document.querySelector(".middle_layer");
data_hide.classList

const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    

    if(cityval === ""){
        City_name.innerText=("please enter cityname before search")
        data_hide.classList.add("data_hide");
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=0d58e67c32723afc39ce4595aa7d5624`
            const response= await fetch(url);
            const data= await response.json();
            const arrdata=[data];

            City_name.innerText=`${arrdata[0].name} , ${arrdata[0].sys.country}`;

            temp_real_val.innerText=arrdata[0].main.temp;
            // temp_status.innerText=arrdata[0].weather[0].main;
            // console.log(data);

            const tempmood=arrdata[0].weather[0].main;
 
        if(tempmood == "Sunny"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color':'#eccc68;'></i>"
        }
        else if(tempmood == "Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color':'#dfe4ea;'></i>"
        }
        else if(tempmood == "Rainy"){
            temp_status.innerHTML="<i class='fas fa-rain' style='color':'#a4b0be;'></i>"
        }
        else{
            temp_status.innerHTML="<i class='fas fa-cloud' style='color':'#44c3de;'></i>"
        }
        data_hide.classList.remove("data_hide");
        }catch{
            City_name.innerText=("please enter valid cityname")
            data_hide.classList.add("data_hide");
        }
    }
   
    
}

submitbtn.addEventListener("click",getinfo);