document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")

    }

    document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
        if (currentDropdown === dropdown) return
        dropdown.classList.remove("active")
    })
})

const navButton = document.querySelector(".open")
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')

navButton.addEventListener('click', () => {
    console.log('hi')
    modal.classList.add('active')
    overlay.classList.add('active')

})


closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})





