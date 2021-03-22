$(document).ready(function(){
	var icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

	$('#cards').on('change', function getSelected() {
			var selectedIcons = [];
			var value = document.getElementById("cards").value;
			if(value.toLowerCase() == "all"){
				selectedIcons = icons;
			}
			else {
				// var selectedIcons = icons.filter(icon => icon.name.toLowerCase() == value.toLowerCase());
				for (var i = 0; i < icons.length; i++) {
					if(icons[i].type.toLowerCase() == value.toLowerCase()){
						selectedIcons.push(icons[i]);
					}
				}
			}
				for (var i = 0; i < selectedIcons.length; i++) {
				$('.row').append(`<div class="col-3">
						 <div class="card">
							<div class="container-elements">
							<div class="i-container">
							<i class="${selectedIcons[i].family} ${selectedIcons[i].prefix}${selectedIcons[i].name} ${selectedIcons[i].type}"></i>
						 </div>
						 <label class="label-icons">${selectedIcons[i].name}</label>
						 </div>
						 </div>
						 </div>`
					 );
			}
		}
  );

});
