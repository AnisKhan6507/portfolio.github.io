var headerr =     document.querySelector(".header")

document.querySelector(".ham").addEventListener("click",()=>{
    console.log("Ruunnnniiinnngggggggg.....")
headerr.style.transform = "translatex(0px)"
document.querySelector(".ham").style.display = "none"
setTimeout(() => {
    document.querySelector(".close").style.display = "block"
}, 300);

})


document.querySelector(".close").addEventListener("click",()=>{
    // console.log("Ruunnnniiinnngggggggg.....")
headerr.style.transform = "translatex(-300px)"
document.querySelector(".ham").style.display = "block"
document.querySelector(".close").style.display = "none"
})

// if () {
    
// } else {
    
// }