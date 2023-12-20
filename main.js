/* === Show Menu ===  */
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/* === Remove Meny Mobile ===  */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* === Scroll Sections Active Link ===  */
const sections = document.querySelectorAll('section[id]');

/*function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);*/

/* === Change Background Header ===  */
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 200){
        header.classList.add('scroll-header');
    }else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* === Show Scroll Top ===  */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll');
    }else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

function openExperience(){
    location.href = experience.html;
}

/* === Contact Page Email ===  */

var emailButton = document.getElementById('emailSubmit');
emailButton.addEventListener('click', (e)=>{
    e.preventDefault();

    var name = document.getElementById('emailName').value;
    var email = document.getElementById('emailEmail').value;
    var subject = document.getElementById('emailSubject').value;
    var number = document.getElementById('emailNumber').value;
    var message = document.getElementById('emailMessage').value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/>Number: "  + number + "<br/><br/>" + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "angel28gamis@hotmail.com",
        Password : "0C45F9E2FD8726B258DBFE72EB2A34994613",
        To : 'angel28gamis@hotmail.com',
        From : email,
        Subject : "From Portfolio Contact: " + subject,
        Body : body
    }).then(
      message => alert('Sent your message!')
    );
});

