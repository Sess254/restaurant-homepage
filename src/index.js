import "./styles.css"
import { homeHtml } from "./home"
const contentDiv = document.getElementById('content')
const homeBtn = document.getElementById('home')

const defaultHtml = homeHtml

contentDiv.innerHTML = defaultHtml

homeBtn.addEventListener('click', () => {
    const contentHtml = homeHtml
    contentDiv.innerHTML = contentHtml   
})


console.log(`Running`)