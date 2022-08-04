	
		animate(0,20, '.who-are-we .one')
		animate(100,50, '.who-are-we .two', direction ='right')
		animate(50,0, '.who-are-we .three', direction ='top')
		animate(50,100, '.who-are-we .four', direction ='bottom')
		
	

function animate(top, left, object_class, direction ='left', rotate =[10, 90])
		{
			let	object = document.querySelector(object_class)
			var top = top
			var left = left
			
			
			object.style.left = left + "%"
			object.style.top = top + "%"
			
			
			
			move = setInterval(()=> 
			{
			
				
				if(left >= 	100){direction = 'bottom'}
				if(left > rotate[1] & left <= 100){direction = 'left-bottom'}
				if(top >= 100){ direction = 'right'}
				
				if(top > rotate[1] & left > rotate[1] ){direction = 'top-right'}
				
				if(left <= 0 &	top >= rotate[1]){direction = 'top'}
				
				if(left <  rotate[0] & top > rotate[1]) {direction = 'bottom-top'}
				
				
				if(left <=rotate[0] &	top <= 0){ direction = 'left'}
				if (left < rotate[0] & top < rotate[0]){ direction = 'left-right'}
				

				
				
				
				
				
				if (direction == 'left')
				{
					
					left += 2
					update_position(object,top,left)
				
					
				}
				
				if (direction == 'bottom'){
					top += 2
					update_position(object,top,left)
				}
				
				if (direction == 'right') { 
					left -= 2
					update_position(object,top,left)
				}
				
				if (direction == 'top') {
					top -= 2
					update_position(object,top,left)
				}

				
				if (direction =='left-bottom'){
					left += 2
					top += 2
					update_position(object,top,left)
				}
				if (direction =='top-right'){
					left -= 2
					top += 2
					update_position(object,top,left)
				}
				
				if (direction =='bottom-top'){
					left -= 2
					top -= 2
					update_position(object,top,left)
				}
				
				if (direction =='left-right'){
					left += 2
					top -= 2
					update_position(object,top,left)
				}
				
				
				
				
				
			}, 500)
			
			
			
		}
		
		
		function update_position(object, top,left)
		{


			if(left > 100)
			{
				left  = 100
			}
			if(left < 0)
			{
				left = 0;
			}
			if (top > 100)
			{
				top = 100
			}
			if(top < 0)
			{
				top = 0
			}
			object.style.left = left + '%'
			object.style.top = top + '%'
		}	