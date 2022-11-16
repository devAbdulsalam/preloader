
let root_property = document.querySelector(':root');
let mode_button = document.getElementById('mode');
const fullYear = document.querySelector("#year")

// function te set mode
function set_mode(primary_back, secondary_back, text_color) {
    root_property.style.setProperty('--background-primary', primary_back)
    root_property.style.setProperty('--background-secondary', secondary_back)
    root_property.style.setProperty('--text-color', text_color)

}

mode_button.onclick = function () {

    if (root_property.style.getPropertyValue('--background-primary') != "#111827") {
        set_mode("#111827", "#2e3647", "white")

    }
    else {
        set_mode("whitesmoke", "white", "black")
    }

}

window.onload = () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none'
    }, 1000);
}


const year = new Date().getFullYear().toString()
fullYear.innerText = year