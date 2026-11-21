
let btn=document.querySelector("button").addEventListener("click",coapi);

    
    async function coapi() {

    let country=document.querySelector("#result").value.toLowerCase();
   
    try {
    if(!country.trim()){
        alert("Please enter country name");
        return;
    }
    console.log(country);
    document.querySelector("#result").value="";

        let res=await axios.get("./universities.json");

                                    // this [] is notation it make "india" into json
         let universities = res.data[country];

         let ol=document.querySelector("#list");
         ol.innerHTML="";
         

         for(let college of universities){
            let li=document.createElement("li");

            li.innerText=college;
            ol.append(li);
            
            console.log(college);
         }
        
    } catch (error) { 
        console.log(error);
    }
}

