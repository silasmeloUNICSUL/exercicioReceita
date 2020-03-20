
function startSlideShow () {

    const figures = document.querySelectorAll( '.slide-show-image' )
    const navegation = document.querySelector( '.slide-navegation' )
    let nextImage = 1
    let interval; 

    function constructor () {
        figures.forEach( ( figure, index ) => {
            const id = `slide-selector-${index}`
            
            const radio = figure.querySelector( '.inputRadio' )
            radio.id = id
    
            const label = document.createElement( 'label' )
            label.htmlFor = id
            label.addEventListener( 'click', () => { 
                onClickSelector( label, index ) 
                restartInterval()
            })

            if ( index === 0 ){
                radio.checked = true
                label.classList.add( 'image-selected' )
            }
    
            navegation.appendChild( label )
        })

        restartInterval()
    }

    function onClickSelector ( label, index ) {
        setNextImage( index )
        updateLabel( label )
    }

    function updateLabel ( label ) {
        const current = document.querySelector( '.image-selected' )
        current.classList.remove( 'image-selected' ) 
        
        label.classList.add( 'image-selected' )
    }

    function changeNextImage () {
        const figure = figures[nextImage]
        
        const radio = figure.querySelector( '.inputRadio' )
        radio.checked = true

        const label = navegation.querySelector( `label[for='${radio.id}']` )

        onClickSelector( label, nextImage )
    }

    function setNextImage( index ) {
        index++;
        nextImage = figures.length === index ? 0: index
    }

    function restartInterval () {
        clearInterval( interval )
        interval = setInterval( changeNextImage, 2000 )
    }

    constructor()
}

startSlideShow()