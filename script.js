
let produkter =
    [
        { id: 1, name: "GAS MAD B2-310, 3x10 tum baslåda", pris: 3489 },
        { id: 2, name: "Bass Habit Rebel SR200M, 8 tums midbasar", pris: 398 },
        { id: 3, name: "DLS ACW10", pris: 3490 },
        { id: 4, name: "Pioneer SPH-EVO950DAB-UNI", pris: 11495 },
        { id: 5, name: "Bass Habit Play SPL84", pris: 2498 },
        { id: 6, name: "Rockford Fosgate P1-2x12, baslåda", pris: 4998 },

    ]

let korg = []
let isopen = false
let varukorgElement = document.querySelector("#varukorg")
let totalPrisElement = document.querySelector("#totalpris")


// ========================================

function visaKorg() {
    isopen = !isopen
    if (isopen) {
        varukorgElement.style.display = "flex"
    } else {
        varukorgElement.style.display = "none"
    }
    console.log(isopen)
}

function läggTillProdukt(id) {
    let produkt = produkter.find(p => p.id === id)
    console.log(produkt)

    korg.push(produkt)

    let elem = document.createElement("div")
    elem.innerHTML = "<h3>" + produkt.name + "</h3><p>" + produkt.pris + " kr</p><button class='tabort' onclick='taBortProdukt(" + produkt.id + ")'>X</button>"
    elem.classList.add("produkt")
    varukorgElement.appendChild(elem)

    totalPrisElement.innerHTML = "Totalt: " + korg.reduce((acc, curr) => acc + curr.pris, 0) + " kr"
}

function taBortProdukt(id) {

    let produkt = korg.find(p => p.id === id)
    console.log(produkt)

    korg = korg.filter(p => p.id !== id)

    let elems = document.querySelectorAll(".produkt")
    elems.forEach(e => {
        if (e.innerHTML.includes(produkt.name)) {
            e.remove()
        }
    })

    totalPrisElement.innerHTML = "Totalt: " + korg.reduce((acc, curr) => acc + curr.pris, 0) + " kr"
}