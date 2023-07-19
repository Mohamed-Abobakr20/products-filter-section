// get elements
const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

// add functionality to buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        // filter cards
        cards.forEach(card => {
            card.classList.add("hidden");
            if (card.dataset.name === button.dataset.name || button.dataset.name === "all") {
                card.classList.remove("hidden");
            }
        })
    })
})