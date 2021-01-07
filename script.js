var countervalue = 0;
 
var add = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var upper = document.querySelector('h1')


add.addEventListener('click' , function (){
    countervalue++;
    upper.textContent = countervalue;

})

minus.addEventListener('click' , function (){
    if(countervalue>0){
        countervalue--;
    }
    upper.textContent = countervalue;
})



