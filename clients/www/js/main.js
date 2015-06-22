$(document).ready(function() {

});

var locations = [
	{
		"city": "Chennai",
		"stateId": "1"
	},
	{
		"city": "Bangalore",
		"stateId": "2"
	},
	{
		"city": "Mysore",
		"stateId": "3"
	}
];
var data = [
	{
		"location": "Bangalore",
		"instituteName": "AAAAA"
	},
	{
		"location": "Chennai",
		"instituteName": "BBBBB"
	},
	{
		"location": "Bangalore",
		"instituteName": "CCCC"
	},
	{
		"location": "Bangalore",
		"instituteName": "DDDD"
	},
	{
		"location": "Chennai",
		"instituteName": "EEEE"
	},
	{
		"location": "Bangalore",
		"instituteName": "FFFF"
	},
	{
		"location": "Bangalore",
		"instituteName": "GGG"
	},
	{
		"location": "Mysore",
		"instituteName": "HHHH"
	},
	{
		"location": "Bangalore",
		"instituteName": "IIIII"
	}
];
function appendLocations(){
	$('#location-select-menu').empty();
	var tpl = _.template($('#dropdown-options').html());
	var dummyTpl = _.template($('#dummy-select-option').html());
	$('#location-select-menu').append(dummyTpl({dummyName: 'Location'}));
	_.each(locations, function(area, idx){
		$('#location-select-menu').append(tpl({name: area.city}));
		if(idx == (locations.length -1)){
			$('#location-select-menu').selectmenu('refresh');
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
		_.each(data, function(opt, idx){
			if(opt.location == $('#location-select-menu').val()){
				$('#institution-select-menu').append(tpl({name: opt.instituteName}));	
			}
			if(idx == (locations.length -1)){
				$('#institution-select-menu').selectmenu('refresh');
			}
		});
	}
}
