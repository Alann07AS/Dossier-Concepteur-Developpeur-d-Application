var page = 0;
let max_page = 1
const scroll= (condition)=>{
    const html = document.querySelector('html')
    const md = document.querySelector('#md-div')
    if ((page * window.innerHeight) != html.scrollTop) return
    if (md.scrollHeight > window.innerHeight && md.scrollTop !== 0) return
    page += condition ? 1 /**down */ :-1 //up
    if (page > max_page) page = max_page
    if (page < 0) page = 0

    html.scrollTo(0, page * window.innerHeight)
}

window.addEventListener("wheel", (e) => {
    scroll(e.deltaY > 0)
})

var lastY = 0;
window.addEventListener("touchmove", (e) => {
    scroll(e.touches[0].pageY - lastY > 0)
    lastY = e.touches[0].pageY
})

function ShowMD(b = true) {
    max_page = b ? 2 : 1
    scroll(b)
}