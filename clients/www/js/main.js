$(document).ready(function() {
	$('.dasboard-page-body-contents').css('height', $(window).height()-120);
	$('.attendance-page-body-contents').css('height', $(window).height()-110);
	$('.marks-page-body-contents').css('height', $(window).height()-110);
	$('.attendance-search-page-body-contents').css('height', $(window).height()-110);
	$('.marks-search-page-body-contents').css('height', $(window).height()-110);
	$('.faculty-upload-page-body-contents').css('height', $(window).height()-110);

	if(localStorage && localStorage.loggedUserInfo){
		var userInfo = JSON.parse(localStorage.loggedUserInfo);
		$('.logged-user-name').text(userInfo.name);
	}

});
var base_url = 'http://demo.attrac.in/api/';
collegeDetails = [];

function appendLocations(){
	// console.log(collegeDetails);
	$('#location-select-menu').empty();
	var tpl = _.template($('#dropdown-options').html());
	var dummyTpl = _.template($('#dummy-select-option').html());
	$('#location-select-menu').append(dummyTpl({dummyName: 'Location'}));
	var uniqueLocations = [];
	_.each(collegeDetails, function(college, idx){
	    if($.inArray(college.location.toLowerCase(), uniqueLocations) === -1){
	    	uniqueLocations.push(college.location.toLowerCase());
	    }
	    if(idx == collegeDetails.length - 1){
	    	_.each(uniqueLocations, function(location, idx){
				$('#location-select-menu').append(tpl({name: location}));
				if(idx == (uniqueLocations.length -1)){
					$('#location-select-menu').selectmenu('refresh');
				}
			});
	    }
	});
}

function renderInstitutes(){
	if($('#location-select-menu').val() == ''){
		$('#institution-select-menu').selectmenu('disable');
		return;
	} else {
		$('#institution-select-menu').selectmenu('enable');
		$('#institution-select-menu').empty();
		var tpl = _.template($('#dropdown-options').html());
		var dummyTpl = _.template($('#dummy-select-option').html());
		$('#institution-select-menu').append(dummyTpl({dummyName: 'Institute'}));
		_.each(collegeDetails, function(college, idx){
			if(college.location.toLowerCase() == $('#location-select-menu').val()){
				$('#institution-select-menu').append(tpl({name: college.institute_name}));	
			}
			if(idx == (collegeDetails.length -1)){
				$('#institution-select-menu').selectmenu('refresh');
			}
		});
	}
}

$(document).ready(function(){
	$('#institution-select-menu').change(function(event) {
		if($('#institution-select-menu').val() == ''){
			return;
		} else {
			window.location.href = 'login-option.html';
		}
	});
});

function userType(ele){
	var selectedUserType = $(ele).attr('name');
	localStorage.setItem('user_type', selectedUserType);
	window.location.href = 'login.html';
	// if(selectedUserType == 'faculty'){
	// 	window.location.href = 'login.html';
	// } else {
	// 	alert('login option not available');
	// }
}

function userLogin(){
	var email = $('#username').val();
	var password = $('#password').val();
	var userType = localStorage.user_type;
	console.log(userType);
	if(email && password){
		$.ajax({
			url: base_url+'verify_login?',
			type: 'POST',
			data: {user_type: userType, email: email, password: password}
		}).done(function(response) {
			console.log(response);
			localStorage.setItem("loggedUserInfo", JSON.stringify(response));
			window.location.href = 'dashboard.html?name='+response.name+'&id='+response.id;
		}).error(function(error, err) {
			console.log(error);
			$('.invalid-login-msg').show();
		});
	} else {
		if(email == '' && password == ''){
			alert('Please Enter User id & Password');
		}else if(email == ''){
			alert('Please Enter User id');
		}else if(password == ''){
			alert('Please Enter Password');
		}
	}
}

function dashboardPage(){
	window.location.href = 'dashboard.html';
}

function attendancePage(){
	window.location.href = 'attendance.html';
}

function marksPage(){
	window.location.href = 'marks.html';	
}

function viewAttendancePage(){
	// window.location.href = 'attendance-search.html';
	window.location.href = 'templates/faculty/view_attendance.html';
}

function viewMarksPage(){
	window.location.href = 'marks-search.html';
}

function renderUploadAttendancePage(){
	window.location.href = 'templates/faculty/upload_attendance.html';
}
