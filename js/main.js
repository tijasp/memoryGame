const card = document.querySelectorAll(".card")

card.forEach(card => {
    card.addEventListener("click", () => {
        const imgs = card.querySelectorAll("img")
        imgs.forEach(img => {
            img.classList.toggle("hidden")
        })
    })
})