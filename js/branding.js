let brand_container = document.querySelector('.branding .container .logos')

let scroll_direction_left = false
let brand_slide = setInterval(()=> 
{
    let max_scroll = brand_container.scrollLeftMax
    let current_scroll = brand_container.scrollLeft


    if(current_scroll < max_scroll){
        if(scroll_direction_left == false)
        {
            brand_container.scrollLeft += 5
        }
    }
    if(current_scroll < max_scroll){
        if(scroll_direction_left == true)
        {
            brand_container.scrollLeft -= 5
        }
    }

    if(current_scroll == max_scroll)
    {
        if(scroll_direction_left == false)
        {
            scroll_direction_left = true
        }
        brand_container.scrollLeft -= 5
    }

    if(current_scroll == 0)
    {
        if(scroll_direction_left == true)
        {
            scroll_direction_left = false
        }
        brand_container.scrollLeft += 5
    }

    
}, 200)