const formdata = document.querySelector('form');

// this usecase will give you empty because when the page relode script will run and when the user click to enter the data then the empty respose will be taken..

// const height = parseInt(document.querySelector('#height').value)

formdata.addEventListener('submit',function(event){
    event.preventDefault();

    const height=parseInt(document.querySelector('#height').value);

    const weight=parseInt(document.querySelector('#weight').value);

    const result=document.querySelector("#results");

    const color = document.querySelector(".instruction");

    if(height === ' '|| height<0 || isNaN(height)){
        result.innerHTML=`${height} this is vaild data <br> please enter vaild data`
    }

    else if(weight === ' '|| weight<0 || isNaN(weight)){
        result.innerHTML=`${weight} this is vaild data <br> please enter vaild data`
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    
    
    if(bmi<18.6){
        
        color.innerHTML=`<span>Under Weight</span>`;
         color.style.backgroundColor="red";
    }

    else if(bmi>=18.6 && bmi<=24.9){
        
        color.innerHTML=`<span>Normal Weight</span>`;
        color.style.backgroundColor="green";
    }

    else if(bmi>24.9){
       
        color.innerHTML=`<span>Over Weight</span>`;
        color.style.backgroundColor="orange";
    }
}
});
