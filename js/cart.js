const cart = () => {

    //get elements from DOM
    const quantityForm = document.querySelector('.quantity')
    const quantiityLess = document.querySelector('.quantity__less')
    const quantiityMore = document.querySelector('.quantity__more')
    const quantiityInput = document.querySelector('.quantity__input')
    const addButton = document.querySelector('.add-to-cart')
    const cartCounter = document.querySelector('.cart__counter')


    //increase number
    const increase = () => {

        //get value from input
        let inputValue = quantiityInput.value 

        //if inputValue is less than 99..
        if(inputValue < 99) {

            //..increase inputValue with one
            inputValue++
            //return new value to input field
            quantiityInput.value = inputValue

        }
        
    }

    //decrease number
    const decrease = () => {

        //get value from input
        let inputValue = quantiityInput.value

        //if inputValue is more than 1..
        if(inputValue > 1){
            
            //..decrease with one
            inputValue--
            //return new value to input field
            quantiityInput.value = inputValue

        }

    }

    //add to cart
    const addToCart = () => {

        //get values from input and counter
        //get values as number literals
        let inputValue = parseInt(quantiityInput.value)
        let currentValue = parseInt(cartCounter.innerText)

        //add the values as a sum
        let sum = inputValue + currentValue

        //add the sum to the counter
        cartCounter.innerText = sum

        //reset input to starting value
        quantiityInput.value = 1
    }
    
    //prevent form from refreshing page when button is clicked
    quantityForm.addEventListener('submit', event => event.preventDefault())

    //Button events
    quantiityMore.addEventListener('click', increase)
    quantiityLess.addEventListener('click', decrease)
    addButton.addEventListener('click', addToCart)
}

cart()