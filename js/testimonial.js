let scroll_left = document.querySelector('.testimonial .icon-left')
let container = document.querySelector('.testimonial-grid')
let scroll_right = document.querySelector('.testimonial .icon-right')
scroll_right.addEventListener('click', () => 
{
    if (container.scrollLeftMax < container.scrollLeft + 250){
        container.scrollLeft = container.scrollLeftMax
    }
    else{
        container.scrollLeft += 250
    }
    
    
})



scroll_left.addEventListener('click', () => 
{
    if (container.scrollLeft < 250 ){
        container.scrollLeft = 0
    }
    else{
        container.scrollLeft -= 250
    }
    
})
