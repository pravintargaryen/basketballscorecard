let homepara = document.getElementById("p_home")
let guestpara = document.getElementById("p_guest")
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")
let g1 = document.getElementById("g1")
let g2 = document.getElementById("g2")
let g3 = document.getElementById("g3")

let count = 0
let count_guest = 0
function addOne() {
     count += 1
     homepara.textContent = count

    
}
function addTwo() {
    count += 2
    homepara.textContent = count
}
function addThree() {
    count += 3
    homepara.textContent = count
}

function addOneguest() {
    count_guest += 1
    guestpara.textContent = count_guest

   
}
function addTwoguest() {
    count_guest += 2
   guestpara.textContent = count_guest
}
function addThreeguest() {
    count_guest += 3
   guestpara.textContent = count_guest
}
