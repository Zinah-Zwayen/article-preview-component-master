

document.querySelector(".share-img").addEventListener("click", (e)=>{
    document.querySelector(".porfile").classList.add("active");
    document.querySelector(".clicked-profile").classList.remove("active");
    document.querySelector(".share-img").addEventListener("click",(e)=>{
        document.querySelector(".porfile").classList.remove("active");
        document.querySelector(".clicked-profile").classList.add("active");
    })
});
