const indicator = document.querySelector("#detail-header")
const indicatorArrow = indicator.querySelector("img")
const packagesTable = document.querySelector("#packages-table")
const responsiveNav = document.querySelector("#click-nav")
const elementToCheckIsMobile = document.querySelector("#responsive-nav")
const responsiveMenu = document.querySelector("#responsive-menu")
const showcase = document.querySelector("#showcase-image")
/*const bannerImage = showcase.querySelector("img") */
const LI = document.querySelectorAll("li")
const baseLocation = [-1.2709, 36.6472]
const body = document.querySelector("body")
const packages = document.querySelector("#packages")
const packageBtns = packages.querySelectorAll("button")
const regForm = document.querySelector("#reg-form")
const closeButton = regForm.querySelector("button")

let isMobile


for(let elem of LI){
    if(elem.textContent === ""){
        elem.addEventListener("click", () =>{
            window.location.href = "coverage.html"          

        })
    }
}

for(let btn of packageBtns){
    btn.addEventListener("click", (e) => {
        if(isMobile){
            let userDistance
            navigator.geolocation.getCurrentPosition(success)
                function success(location){
                    const latitude = location.coords.latitude
                    const longitude = location.coords.longitude
                    userDistance = calcDistanceUsingLatAndLon(latitude, longitude)
                    if(userDistance < 22){
                        const packageSelected = e.target.parentNode.parentNode.children[0].textContent
                        window.location.href = `https://wa.me/254712990778/?text=I'm%20inquiring%20about%20the%20${packageSelected}%20package`
                    } else {
                        alert("You seem to be out of the coverage zone. We cover 20Kms radius from Kikuyu Town. Thanks for your interest")
                    }
                }          
                 
        } else {
            regForm.classList.add("active")
            const packageSelected = e.target.parentNode.parentNode.children[0].textContent
            const message = regForm.querySelector("textarea")
            message.value = `I am inquiring about the ${packageSelected} package`
        }
    })
}
    


closeButton.addEventListener("click", () => {
    regForm.classList.remove("active")
})
function calcDistanceUsingLatAndLon(lat, lon){
    const earthRadius = 6371
    let dLat = deg2rad(lat-baseLocation[0])
    let dLon = deg2rad(lon-baseLocation[1])
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(baseLocation[0])) * Math.cos(deg2rad(lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    let d = earthRadius * c
    return Math.ceil(d)
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

indicatorArrow.addEventListener("click", () => {
    packagesTable.classList.toggle("display-flex")
})

responsiveNav.addEventListener("click", () => {
    responsiveMenu.classList.toggle("open")
})

document.addEventListener("scroll", () =>{
    responsiveMenu.classList.remove("open")
})

if(getComputedStyle(elementToCheckIsMobile).display == "block"){
    isMobile = true
}


