const formData = document.getElementById("form");
const data = document.getElementById("data"); 
const regText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regNumber = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

const MsgError = (errores) => {
    errores.forEach((item) => {
        item.type.textContent = item.msg;
    });
};


formData.addEventListener("keyup", (e) => {
    e.preventDefault();
    const text = document.querySelector("#text").value;
    const date = document.querySelector("#date").value;
    const number = document.querySelector("#number").value;
    const select = document.querySelector("#select").value;
    const alertText = document.getElementById("alertText");
    const alertNumber = document.getElementById("alertNumber");



    let text_info = document.querySelector('#text_info span');  
    let number_info = document.querySelector('#number_info span');  
    let date_info = document.querySelector('#date_info span'); 
    let select_info = document.querySelector('#select_info span');  

    text_info.innerHTML=text;  
    date_info.innerHTML=date;  
    number_info.innerHTML=number;
    select_info.innerHTML=select; 

    const errores = []

    if (!regText.test(text)||(!text.trim()) ) {

        errores.push({
            type: alertText,
            msg: "Format invalid only letters"
        });
    
    }

    if (!regNumber.test(number)||(!number.trim())){

        errores.push({
            type: alertNumber,
            msg: "only positive number"
        });
    
    }

    if (errores.length !== 0) {
        MsgError(errores);
        return;
    }

   
})


formData.addEventListener("focusout", () => {
    
    const text = document.querySelector("#text").value;
    const number = document.querySelector("#number").value;
    
    const alertText = document.getElementById("alertText");
    const alertNumber = document.getElementById("alertNumber");


    const errores = []

    if (!text.trim())  {

        errores.push({
            type: alertText,
            msg: "Field empty"
        });
    
    }else if(text.trim()){
        errores.push({
            type: alertText,
            msg: ""
        });
    }

    if (!number.trim()){

        errores.push({
            type: alertNumber,
            msg: "field empty"
        });
    
    }else if(number.trim()){
        errores.push({
            type: alertNumber,
            msg: ""
        });
    }

    if (errores.length !== 0) {
        MsgError(errores);
        return;
    }

   
})