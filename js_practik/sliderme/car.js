var car1 = {
	name: "Reno Stepway",
	isTurnOn: false,
	speed: 0,
	engine: {
		v: 1.6,
		horsesPower: 120
	},
	start: function () {
		this.isTurnOn = true
		this.speed = 10

	}
}


car1.start()

window.alert(car1.isTurnOn)
