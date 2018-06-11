$(document).ready(
	function() {
		$('#calendar').fullCalendar({
			theme: false,
			header: {
				left: 'title',
				center: 'prev,next',
				right: 'today'
			},
			height: 'parent',
			footer:{
				center: 'prev,next',
				right: 'today'
			},
			buttonText:{
			 	today: 'Today',
			},
			buttonIcons:{
				prev:'left-single-arrow',
				next:'right-single-arrow'
			}
		})
	}
);