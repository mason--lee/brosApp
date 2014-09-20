alert("hello");
// $(function(){

	$.ajax({
	       type: "GET",
	       dataType: "json",
	       url: "http://localhost:1337/players",
	       success: function (d) {
	           // replace div's content with returned data
	           $('#loading').html(d);
	           alert("am I here ");
	       }
	    });
	// $.get( "/players", function(data) {
	// 	console.log( "Data Loaded: " + data);
	// });

	// $.each(players, function(i, player) {
	// 	renderItem(player);
	// });

	// var renderItem = function(player) {
	// 	var name = player.name,
	// 			amount = player.attendance;
	// 	console.log(name);
	// 	console.log(amount);
	// };

	// console.log("hello");
// });
