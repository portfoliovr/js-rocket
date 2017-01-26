var sayMyName = function (name) {
	alert('My Name is: '+name);
}

// this is function does this.
var doCoolstuff = function () {
	var currentClassName = document.getElementById('cool').className;
	
	if (currentClassName =='cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}


var car = {
		make: 'VW',
		type: 'Polo',
		color: 'blue',
		isTurnOn: false,
		numberofWheels: 4,
		seat: ['seat1', 
		'seat2',
		'seat3',
		'seat4'
		],
		turnOn: function () {
			this.isTurnOn = true;
		},
		fly: function () {
			alert('fly');
		},
		switchCar: function (isOn) {
			console.log('turn car ' +isOn)
			;
			if (true == true) {
				this.isTurnOn = true;
			} else {
				this.isTurnOn = false;
			}
			
		}
	};


		console.log('hello there friends!');