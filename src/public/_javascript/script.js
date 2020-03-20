
const inputs = document.querySelectorAll( '.inputContainer' )    
        
inputs.forEach( container => {
    const input = container.querySelector( '.inputForm' )
    if ( input.type !== 'subimit' )
        input.addEventListener( 'blur', () => { blur(container) } )
})

function blur( container ) {
    const input = container.querySelector( '.inputForm' )
    const label = container.querySelector( 'label.labelForm' )
    const border = container.querySelector( 'div' )

    if ( input.type !== 'submit' && input.value.length > 0 ) {
        label.classList.add( 'constains-character' )
        border.classList.add( 'constains-character' )
    } else {
        label.classList.remove( 'constains-character' )
        border.classList.remove( 'constains-character' )
    }
}
