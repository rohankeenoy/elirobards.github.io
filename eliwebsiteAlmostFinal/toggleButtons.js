const toggleButton = document.getElementByIdByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
})