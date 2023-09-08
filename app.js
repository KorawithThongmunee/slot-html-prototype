const container = document.querySelector(".grid");

function createReels() {
    let o = 0;
    for (let i = 1; i <= 15; i++){
        const bool = Boolean(Math.floor(Math.random() * 2));
        const elem = document.createElement("div");
        elem.style.transitionDelay = `${60 * i}ms`
        elem.classList.add("div");
        elem.classList.add(bool ? "div1" : "div2");
        setTimeout(() => {
            elem.style.scale = "1"
        }, 60 * i);
        elem.addEventListener("transitionend", (e) => {
            o++
            if(o === 15) {
                let GET = 0;
                let UGET = 0;
                let arr = [];
                document.querySelectorAll(".div").forEach(div => {
                    arr.push(div.className.includes("div2") ? 1 : 0);
                });
                arr.forEach(a => {
                    if(Boolean(a)){
                        GET++
                    }else{
                        UGET++
                    }
                });
                if(GET >= UGET  ) {
                    let BONUS = UGET + GET;
                    console.group("DATA")
                    console.log("BONUS: " + BONUS);
                    console.log("GET: " + GET);
                    console.log("COINS GET: " + (GET * BONUS));
                    console.groupEnd();
                }
            }
        })
        container.appendChild(elem);
    }
}

function clearReels() {
    let i = 0;
    const divs = document.querySelectorAll(".div");
    divs.forEach(div => {
        div.style.scale = "0"
        div.addEventListener("transitionend", e => {
            i++
            if(i === 15) {
                divs.forEach(e => e.remove());
                createReels();
            }
        })
    })
}