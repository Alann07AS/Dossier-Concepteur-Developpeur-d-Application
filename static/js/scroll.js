{
    const html = document.querySelector('html')
    const md = document.querySelector('#md-div')
    html.scrollTo(0, 0)

    var page = 0;
    let max_page = 1
    var timeout
    const scroll = (condition) => {
        if ((page * window.innerHeight) - html.scrollTop) return
        if (md.scrollHeight > window.innerHeight && md.scrollTop !== 0) {
            if (!timeout) timeout = setTimeout(()=>{
                html.scrollTo(0, (page * window.innerHeight))
                timeout = undefined
            }, 1000)//reset fixed
            return
        }
        page += condition ? 1 /**down */ : -1 //up
        if (page > max_page) page = max_page
        if (page < 0) page = 0

        html.scrollTo(0, page * window.innerHeight)
    }

    window.addEventListener("wheel", (e) => {
        scroll(e.deltaY > 0)
    })

    var lastY = 0;
    window.addEventListener("touchstart", (e) => {
        lastY = e.touches[0].pageY
    })
    window.addEventListener("touchmove", (e) => {
        const dif = lastY - e.touches[0].pageY
        if (Math.abs(dif) > 40) scroll(dif > 0)
        // lastY = e.touches[0].pageY
    })

    function ShowMD(b = true) {
        max_page = b ? 2 : 1
        scroll(b)
    }
}