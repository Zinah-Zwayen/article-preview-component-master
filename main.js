

// document.querySelector(".share-img").addEventListener("click", (e)=>{
//     document.querySelector(".porfile").classList.add("active");
//     document.querySelector(".clicked-profile").classList.remove("active");
//     document.querySelector(".share-img").addEventListener("click",(e)=>{
//         document.querySelector(".porfile").classList.remove("active");
//         document.querySelector(".clicked-profile").classList.add("active");
//     })
// });

document.querySelector(".share-img").addEventListener("click", () => { 
    document.querySelector(".clicked-profile").classList.toggle("active");
    document.querySelector(".porfile").classList.toggle("active"); 
});

document.querySelector("#mobile-share").addEventListener("click", () => { 
    document.querySelector(".clicked-profile").classList.toggle("active");
    document.querySelector(".porfile").classList.toggle("active"); 
});
