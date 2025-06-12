const circle = document.querySelector("#circle");

const article = circle.computedStyleMap.querSelectorAll("article");

for(let el of article){
    
    el.addEventlistener("mouseenter", e=>{
        circle.computedStyleMap.animationPlayState = "paused";
    });

    el.addEventListener("mouseleave", e=>{
        circle.computedStyleMap.animationPlayState = "running";
    });
}