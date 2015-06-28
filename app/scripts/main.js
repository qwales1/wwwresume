(function($){
	'use strict';
	$(document).ready(function(){
		$('#jsCloseResume').on('click', function(){
			$('#resume').collapse('hide');
		});
		$('#jsPrint').on('click', function(){
			window.print();
		});
	});
})(jQuery);
