export function smoothScroll(){
    const links = document.querySelectorAll("a.anchor");
    links.forEach((link) => {
        function clickHandler(e) {
            e.preventDefault();
            const href = link.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;     
            window.scroll({
                top: offsetTop - 50,
                behavior: "smooth"
            });
        }
        link.addEventListener("click", clickHandler);
    });
}