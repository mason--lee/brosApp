$(function(){
	$.get('/players', function(players) {
		var $playerList = $(".attendancePanel");
		var $table = $("<table/>", {
			"class": "table table-bordered"
		}).appendTo($playerList);
		var $tableHead = "<thead><tr><th>Name</th><th>Attendance</th><th>Back Number</th><th>Position</th></tr></thead><tbody></tbody>";
		$($table).html($tableHead);

		$.each(players, function(i, player) {
			var name = player.name,
				attendance= player.attendance,
				backNumber = player.backNumber,
				position = player.position;

			
			var $playerRow = $("<tr/>", {
				"class": "player-row"
			}).appendTo($table);
			
			$("<td/>", {
				"text": name
			}).appendTo($playerRow);

			$("<td/>", {
				"text": attendance
			}).appendTo($playerRow);

			$("<td/>", {
				"text": backNumber
			}).appendTo($playerRow);

			$("<td/>", {
				"text": position
			}).appendTo($playerRow);

		})
	})
});
