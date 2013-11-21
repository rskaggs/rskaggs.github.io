var $rs = {};
(function () {
	var body = document.getElementsByTagName('body')[0],
		navList = document.getElementsByClassName('nav-list')[0];
	function toggleClass($element, $class) {
		var classList = $element.className.split(' '),
			classIndex = classList.indexOf($class);
		
		if (classIndex > -1) {
			classList.splice(classIndex, 1);
		} else {
			classList.push($class);
		}
		$element.className = classList.join(' ');	
	}
	toggleClass(navList, '-no-animate');
	toggleClass(document.getElementsByTagName('body')[0], 'js-enabled');
	setTimeout(function () {
		toggleClass(navList, '-no-animate');
	}, 100);
	
	$rs.toggleNavigation = function () {
		toggleClass(navList, '-open');
	}
	
	document.getElementsByClassName('nav-toggle')[0].addEventListener("click", $rs.toggleNavigation, false);
	document.getElementsByClassName('nav-toggle')[0].addEventListener("touchend", $rs.toggleNavigation, false);
	
})();