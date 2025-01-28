import chibiCheff from "./images/chibi-cheff.jpeg"
import chibiManger from "./images/chibi-manager.jpeg"
import spareHumanBob from "./images/bob.jpeg"

export const aboutHtml = `
                <div class="prof-container">
                <h1>Contact Us</h1>
                <div class="profile">
                    <h2>Chibi</h2>
                    <img src=${chibiCheff} alt="picture of a cat as a chef" class="prof-pic">
                    <p>Chef</p>
                    <p>555-555-5554</p>
                    <p>totallyRealEmail@real.com</p>
                </div>
                <div class="prof-container">
                    <div class="profile">
                        <h2>Meow</h2>
                        <img src=${chibiManger} alt="picture of a cat as a chef" class="prof-pic">
                        <p>Manager</p>
                        <p>555-565-5554</p>
                        <p>totallyRealEmail@real.com</p>
                    </div> 
                </div>
                <div class="prof-container">
                    <div class="profile">
                        <h2>Spare human Bob</h2>
                        <img src=${spareHumanBob} class="prof-pic">
                        <p>Waiter</p>
                        <p>555-555-5554</p>
                        <p>totallyRealEmail@real.com</p>
                    </div> 
                </div>
            </div>
`