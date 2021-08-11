$(document).ready(function () {
	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function() 
	{
		var item = $('#todo-list-item').val();
		var date = $('#date-picker').val();
		var events = $('#event').val();
		if(item, date, events){
			$('#list-items').append("<li>" + "<label class='name'>" + item + "</label>" + "<span class='date'>" + date + "</span>" + "<span class='events'>"+ events + "</span>" + "<a class='remove'>x</a>" + "<a class='edit'></a>" + "</li>");
			localStorage.setItem('listItems', $('#list-items').html());		
			$('#todo-list-item').val("");
			$('#date-picker').val("");
			$('#event').val("");
		}	
	});
	
	$('.add').click(function(){
		$('#todo-list-item').focus();
	});
	
	$(document).ready(function(){
		$('#list-items').click('li', function(){
			$('#list-items li label, #list-items li span').attr('contenteditable','true');
			localStorage.setItem('listItems', $('#list-items').html());
		});
	});

	$(document).on('click', '.remove', function(){
		if(confirm('Are you sure?')){
			$(this).parent().remove();	
		}
		$('#todo-list-item').focus();
		localStorage.setItem('listItems', $('#list-items').html());
	});
	//localStorage.clear();

	

});

