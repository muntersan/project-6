const colorSwatch = () => {

    //get elements from DOM
    const colorButtons = document.querySelectorAll('.colors__button')
    const colorItems = document.querySelectorAll('.colors__item')

    //change active color
    const activeColor = (event) => {

        //remove active class from all items
        colorItems.forEach(item => item.classList.remove('colors__item--active'))

        //add active class on parent of clicked button
        event.target.parentNode.classList.add('colors__item--active')

    }

    //foreach button add eventlistener
    colorButtons.forEach(button => button.addEventListener('click', activeColor))

}

colorSwatch()