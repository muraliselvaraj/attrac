var faculty_base_url = "http://demo.attrac.in/facultyApi/";
var loggedUserInfo = JSON.parse(localStorage.loggedUserInfo);
$(document).ready(function(){
	var optTpl = _.template($('#select-options-tpl').html());
	
	$.ajax({
		url: faculty_base_url+'upload_attendance?',
		type: 'POST',
		data: {id: loggedUserInfo.id}
	}).done(function(response) {
		console.log(response);
		localStorage.setItem("facultyClassDetails", JSON.stringify(response));
		// $('#faculty-class-select').append(optTpl({value: '', name: 'Select Class'})).trigger('create');
		// $('#faculty-class-select').val('');
		_.each(response.details, function(info, idx){
			$('#faculty-class-select').append(optTpl({value: info.id, name: info.title})).trigger('create');
		});
	}).error(function(error, err) {
		console.log(error);
	});
});

function checkAttendanceExist(){
	var selectedClass = $('#faculty-class-select').val();
	// console.log(selectedClass);
	$.ajax({
		url: faculty_base_url+'attendance_exist?',
		type: 'POST',
		data: {id: loggedUserInfo.id, section_sem: selectedClass}
	}).done(function(response) {
		console.log(response);
		if(response && response.success == true){
			$('.attendance-taken-circle').hide();
			$('.attendance-not-taken-circle').show();
			$('.attendance-not-taken-circle').addClass('active-circle-fill');
		}
	}).error(function(error, err) {
		console.log(error);
	});
}

function showUploadOpts(){
    var tpl2 = _.template($("#section-and-subject-selection-tpl").html());
    var tpl3 = _.template($("#student-attendance-table-tpl").html());
    var date = $("#faculty-date-select").val();
    var selectedClass = $('#faculty-class-select').val();
    var time = $('#faculty-time-select').val();
    // var ampm = 'AM';
    // if(time){
    // 	var checkTime = time.split(':');
    // 	if(parseInt(checkTime[0]) < 12){
    // 		ampm = 
    // 	}
    // }
    
    // console.log(time);
    $('.upload-opt-container-section').html('');
    $('.upload-opt-container-section').append(tpl2({date: date, time: time})).trigger('create');
    $('.faculty-upload-opt-box').after(tpl3({})).trigger('create');
    $('.hours-select-opts').trigger('create');
}
function getStudentsList(){
	if($('.attendance-not-taken-circle').hasClass('active-circle-fill')){
		var selectedClass = $('#faculty-class-select').val();
		$.ajax({
			url: faculty_base_url+'student_details?',
			type: 'POST',
			data: {id: loggedUserInfo.id, section_sem: selectedClass}
		}).done(function(response) {
			console.log(response);
			showUploadOpts();
			// if(response && response.success == true){
				
			// }
		}).error(function(error, err) {
			console.log(error);
		});
	}
}