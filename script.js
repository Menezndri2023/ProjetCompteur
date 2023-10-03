const zero = document.querySelector("#zero");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const increment = document.querySelector("#increment");

zero.addEventListener('click', function(){
    console.log(zero)
});
decrement.addEventListener('click', function(){
    // console.log(decrement)
    zero.innerText--
    // zero.innerText.style.color = "red"
    // zero.classList.add("decrement")
    if (zero.innerText < 0 ){
        zero.classList.remove("increment");
        zero.classList.remove("reset")
        zero.classList.add("decrement")
    }else if(zero.innerText == 0){
        zero.classList.remove("decrement")
        zero.classList.remove("increment")
}});
reset.addEventListener('click', function(){
    // console.log(reset)
    zero.innerText = 0
    // zero.innerText.style.color = "black"
    if(zero.innerText == 0){ 
    zero.classList.remove("decrement")
    zero.classList.remove("increment")
    zero.classList.add("reset")
}
});
increment.addEventListener('click', function(){
    // console.log(increment)
    zero.innerText++
    // zero.innerText.style.color = "blue"
    if(zero.innerText > 0){  
    zero.classList.remove("decrement")
    zero.classList.remove("reset")
    zero.classList.add("increment")
}else if(zero.innerText == 0){
    zero.classList.remove("decrement")
    zero.classList.remove("increment")
    // zero.classList.add("reset")


}
    
});

// zero.addEventListener('click',function(event){
//     console.log(event.target.innerText)
// })

