
const url = "https://restcountries.com/v3.1/all";

const res = fetch(url)
.then((res1)=>res1.json())
.then((data)=>{
    console.log(data)
    for(let i= 0; i<data.length; i++){
        console.log(`Contry Name: ${data[i].name.common}, capital:${data[i].capital} Flag: ${data[i].flags.png}, Timezone: ${data[i].timezones}`)
    }

})

 