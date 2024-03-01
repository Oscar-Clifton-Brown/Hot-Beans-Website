
class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="footer-gray-box">
                <div class = "item1">
                    <div class = "footer-gray-box-text-container">
                        <p class="t1">Contact us</p>
                        <div class="t2-container">
                            <p class="t2 bold"><b>Hot Beans Web Development</b></p>
                            <div class = "footer-email-container"><object data="assets/email.svg" width="20" height="20"> </object><p class="t2 t2-2">contact@hotbeans.co.uk</p></div>
                            <div class="footer-number-container"><object data="assets/phone.svg" width="20" height="20"> </object><p class="t2 t2-2">01234 567891</p></div> 
                        </div>
                    </div>
                </div>
                <div class = "item2">
                    <div class="footer-gray-box-text-container">
                        <p class="t1">Find us</p>
                        <div class="t2-container">
                            <p class="t2">49 Charing Cross Rd </p>
                            <p class="t2">Westminster, London, SW1A 2DX</p>
                            <a  target="_blank" href="https://maps.app.goo.gl/16a44bWovNVZdbfT9">
                                <object data="assets/map.svg" width="23" height="23"> </object><p class="t2 t2-2">view on map</p> 
                            </a>
                        </div>
                    </div>
                </div>
                <div class = "item3">
                    <div class="footer-gray-box-text-container">
                        <p class="t1">Socials</p>
                        <div class="footer-socials-container">
                            <object data="assets/instagram.svg" width="25" height="25" style = "position: static;""></object>
                            <a href="https://www.instagram.com/" target="_blank" ></a> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    }
}
customElements.define('my-footer', MyFooter);

class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
            <a href = "index.html">
                <img src="assets/logo/HotBeans_Logo.png" alt="HotBeans_Logo">
            </a>
            <div class = "links-container">
                <a href="index.html" id = "home">Home</a>
                <a href="aboutus.html" id = "aboutus">About Us</a>
                <a href="theteam.html" id = "theteam">The Team</a>
                <a href="courses.html" id = "courses">Courses</a>
            </div>
            <div class="btn-box">
                <div class="btn"><a href="https://forms.office.com/e/4JZWW0NjwJ" target="_blank">Join Us</a></div>        
            </div>
        </nav>

    `;
    }
}
window.customElements.define('my-header', MyHeader);
