$(document).ready(function(){
    $('#btn-search').on('click', function(){
       var input = $('.search').val();
       var api = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+input+'&format=json&callback=?';
       var newPage = 'https://en.wikipedia.org/?curid=';
   		var showResults = $(".results").html("");
			$.ajax({
				url: api,
				dataType: "json",
                type: "GET",
                async: false,
				success: function(data){
        console.log(data);
				    for (var i = 0; i < data.length; i++) {
				    showResults.append("<div class='border'><h2 class='title'><a href='"+data[3][i]+"' target='_blank'>"+data[1][i]+"</h2></a>"+"<p class='item-header'>"+data[2][i]+"</p></div>");
				}

                },//AJAX call
                error: function(err){
					'<p>' + error + '</p>';
				}

		});//searchBtn onClick function

	});//document ready function

});