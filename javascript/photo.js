window.onload = function() {
	var backPu = document.getElementById('back_pu');
	backPu.onclick = function() {
		history.go(-1);
	}
}