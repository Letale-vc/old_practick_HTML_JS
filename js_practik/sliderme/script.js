
function Slider() {
	this.possImgURLS = 0
	this.imgURLS = [
		"img/01.jpg",
		"img/02.jpg",
		"img/03.jpg",
		"img/04.jpg"]
	this.showPrevBtn = null
	this.showNextBtn = null
	this.imnSliderEl = null
}

Slider.prototype.start = function (elId) {
	var that = this
	var el = document.querySelector("#" + elId)
	this.showPrevBtn = el.querySelector(".left-button")
	this.showNextBtn = el.querySelector(".right-button")
	this.imnSliderEl = el.querySelector(".img-slider")
	this.imnSliderEl.src = this.imgURLS[this.possImgURLS]
	this.showPrevBtn.addEventListener("click", function (e) {
		that.onShowPrevBtn(e)
	})
	this.showNextBtn.addEventListener("click", function (e) {
		that.onshowNextBtn(e)
	})
	this.showPrevBtn.disabled = true
	if (this.imgURLS.length <= 1) {
		this.showNextBtn.disabled = true
	}
}

Slider.prototype.onShowPrevBtn = function (e) {
	this.possImgURLS--
	this.imnSliderEl.src = this.imgURLS[this.possImgURLS]
	this.showNextBtn.disabled = false
	if (this.possImgURLS === 0) {
		this.showPrevBtn.disabled = true
	}
}

Slider.prototype.onshowNextBtn = function (e) {
	this.showPrevBtn.disabled = false
	this.possImgURLS++
	this.imnSliderEl.src = this.imgURLS[this.possImgURLS]
	if (this.possImgURLS === this.imgURLS.length - 1) {
		this.showNextBtn.disabled = true
	}
}







var slider1 = new Slider()
var slider2 = new Slider()
slider1.start("slider2")
slider2.start("slider1")
