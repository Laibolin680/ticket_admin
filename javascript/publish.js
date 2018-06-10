window.onload = function() {
	var backIn = document.getElementById('back_in');
	backIn.onclick = function() {
		history.go(-1);
	}

	var imaCh = document.getElementById('ima_ch');
	imaCh.onclick = function() {
		window.location.href = 'photo.html';
	}
}