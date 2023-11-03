document.querySelector('.drop2-hover').addEventListener("mouseover",()=>{
    document.querySelector('.menu-drop2').classList.add("menu-drop2-show")
})
document.querySelector('.drop2-hover').addEventListener("mouseout",()=>{
    document.querySelector('.menu-drop2').classList.remove("menu-drop2-show")
})
document.querySelector('.menu-drop2').addEventListener("mouseover",()=>{
    document.querySelector('.menu-drop2').classList.add("menu-drop2-show")
})
document.querySelector('.menu-drop2').addEventListener("mouseout",()=>{
    document.querySelector('.menu-drop2').classList.remove("menu-drop2-show")
})
// WHEN CLICK 
document.querySelector('header .left .menu-items').addEventListener("click",()=>{
    document.querySelector('.medium .links-items').classList.toggle("links-items-show")
})
//==============================================================================================================
// IN MAIN PAGE CHANGE BG
let images=document.querySelectorAll('main .left img');
let MainPage=document.getElementById("main-page")
let arr=Array.from(images)
let i=0;
images.forEach(img=>{
    img.addEventListener("click",(e)=>{
        images.forEach(img=>{
            img.style.border="none"
        })
        img.style.border="3px solid #fff"
        MainPage.style.backgroundImage=` url(${e.target.src})`
    })
})
setInterval(()=>{
    i++
    if(i>arr.length -1){
        i=0
    }
    MainPage.style.backgroundImage=` url(${arr[i].src})`
    images.forEach(img=>{
            images.forEach(img=>{
                img.style.border="none"
            })
            let imgActive=document.querySelector(`main .left .img${i}`)
            imgActive.style.border="3px solid #fff"
    })
},5000)


// ===================== START COUNTER  ====================
let countItem = document.querySelectorAll('.count h1');
let section = document.querySelector('.counter_num');
let started = false ;   //function started ? No

window.onscroll = function (){
    if(window.scrollY >= section.offsetTop - 300){
        if(!started){
            countItem.forEach((h1) => startCount(h1) );
        }
        started = true;
    }
}


function startCount(el){
    let goal = el.dataset.count;
    let countt = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(countt);
        }
    } ,2000/goal );

}
















// ===================== END COUNTER  ====================




















