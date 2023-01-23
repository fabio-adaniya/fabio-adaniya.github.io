function abrirMenuMobile() {
    menu = document.querySelector(".menu-mobile")

    if (menu.style.display == "block")
        menu.style.display = "none"
    else
        menu.style.display = "block"
}

function paginaGitHub() {
    window.location.href = "https://github.com/fabio-adaniya"
}