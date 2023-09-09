const main = document.querySelector("main")
const btn = document.querySelector("button")
const para = document.querySelectorAll("main>p")[0]
const para2 = document.querySelectorAll("main>p")[1]
let random = 1



const setImage = () => {

    main.style.backgroundImage = `url(https://picsum.photos/500?random=${random})`
    random++

}

const getQuote = () => {

    fetch("https://api.seriesquotes.10cyrilc.me/quote/")
        .then(blob => blob.json())
        .then(data => {
            para.textContent = data[0].quote
            para2.textContent = data[0].author
        })

}


btn.addEventListener("click", () => {

    btn.classList.toggle("clicked")
    setImage()
    getQuote()
    setTimeout(() => btn.classList.toggle("clicked"),500)

})

window.onload = () => {

    setImage()
    getQuote()

}
