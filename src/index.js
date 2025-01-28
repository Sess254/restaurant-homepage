import "./styles.css"
import { homeHtml } from "./home"
import { menuHtml } from "./menu"
import { aboutHtml } from "./about"
const contentDiv = document.getElementById('content')
const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const aboutBtn = document.getElementById('about')

const defaultHtml = homeHtml

contentDiv.innerHTML = defaultHtml

homeBtn.addEventListener('click', () => {
    const contentHtml = homeHtml
    contentDiv.innerHTML = contentHtml   
})

menuBtn.addEventListener('click', () => {
    const contentHtml = menuHtml
    contentDiv.innerHTML = contentHtml
})

aboutBtn.addEventListener('click', () => {
    const contentHtml = aboutHtml
    contentDiv.innerHTML = contentHtml
})




console.log(`Running`)