const documentHeight = document.documentElement.scrollHeight;
const screenHeight = window.innerHeight
const footer = document.querySelector( '#footer' )

if ( documentHeight <= screenHeight ) {
    footer.classList.add( 'footer-bottom' )
}

window.onscroll = () => {
    const header = document.querySelector( '#mainHeader' )
    const navbar = document.querySelector( '#menu' )
    const limit = header.clientHeight - navbar.clientHeight
    const scroll = document.body.scrollTop || document.documentElement.scrollTop

    if ( scroll >= limit )
        navbar.classList.add( 'menu-fixed' )
    else
        navbar.classList.remove( 'menu-fixed' )
}
