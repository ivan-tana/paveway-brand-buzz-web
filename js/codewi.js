window.addEventListener("load", () => {
	
	var grids = document.querySelectorAll("[grid]")
    var texts = document.querySelectorAll('[text-ratio]')
    var aspect_ratio_content = document.querySelectorAll("[aspect-ratio]")

    generate_text_ratio(texts)
	generateGrid(grids)
    generate_aspect_ratio(aspect_ratio_content)
})


window.addEventListener("resize", () => {
	
	var grids = document.querySelectorAll("[grid]")
    var texts = document.querySelectorAll('[text-ratio]')
    var aspect_ratio_content = document.querySelectorAll("[aspect-ratio]")

    generate_text_ratio(texts)
	generateGrid(grids)
    generate_aspect_ratio(aspect_ratio_content)
})









function generate_text_ratio(texts)
{
    for (let index = 0; index < texts.length; index++) {
        const element = texts[index];
        value = element.getAttribute("text-ratio")
        ratio = eval(value)
        width = element.clientWidth
    
        element.style.fontSize = ratio * width + "px"
        
    }
}


function generateGrid(grids)
{
	for(var i = 0; i < grids.length; i++)
	{
		grid = grids[i]
		grid_value = Number(grid.getAttribute("grid")) + 20
		grid.style.display = "grid"
		grid.style.margin = "2%"
		
		if(window.innerWidth > grid_value)
		{
			grid.style.gridTemplateColumns = "repeat(auto-fill,minmax(" + grid_value + "px, 1fr))"
			
		}
		if(window.innerWidth < grid_value)
		{
			grid.style.gridTemplateColumns = "1fr"
			
		}

	}
}



function generate_aspect_ratio(aspect_ratio_content)
{
	for(i = 0; i < aspect_ratio_content.length; i++)
	{
		var element = aspect_ratio_content[i]
		aspect = eval(element.getAttribute("aspect-ratio"))
		
		var width = element.clientWidth
		
		element.style.height = aspect * width + "px"
		
	}
}