






function type_text(text, duration=200)
{
    var count = 1
    text_container = text
    text = text.innerText
    length = text.length
    var animate = setInterval(() => {
            
        
        count +=1
        if (count >= length)
        {
            text_container.innerHTML =  text.slice(0,count)
            clearInterval(animate)
        }
        else
        {
            text_container.innerHTML =  text.slice(0,count) + '|'
        }
       
        
        
        
    }, duration);
}


let type_observer = new IntersectionObserver((entries, type_observer) =>
{
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            type_text(entry.target, 200)
            type_observer.unobserve(entry.target)
        }
    });

})

var type_texts = document.querySelectorAll('[type-animation]')
type_texts.forEach(text => {

    type_observer.observe(text)
});


