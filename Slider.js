class Slider {
	constructor(slides, imgWidth = 0, imgHeight = 0) {
		this.slides = slides
		this.slidesLength = slides.length
		this.imgWidth = imgWidth
		this.imgHeight = imgHeight
		// this.text = document.querySelector('.text')
		this.img = document.querySelector('.slide')
		this.prev = document.querySelector('.prev')
		this.next = document.querySelector('.next')
		this.textNav = document.querySelector('.slider_nav_text')
		this.currentIndex = 0
	}
	setEntity(index) {
		// this.text.innerText = this.slides[index].text
		this.img.style.backgroundImage = `url(${this.slides[index].img})`
	}
	setHandlers() {
		this.prev.addEventListener('click', () => {
			if (this.currentIndex == 0) {
				this.currentIndex = this.slidesLength
			}
			this.setEntity(this.currentIndex - 1)
			this.currentIndex -= 1
		})
		this.next.addEventListener('click', () => {
			if (this.currentIndex > this.slidesLength - 2) {
				this.currentIndex = -1
			}
			this.setEntity(this.currentIndex + 1)
			this.currentIndex += 1
		})
	}
	setTextNav() {
		for (let i = 0; i < this.slidesLength; i++) {
			let liEl = document.createElement('li')
			let aEl = document.createElement('a')
			aEl.setAttribute('href', '#')
			aEl.setAttribute('class', 'slider_link')
			aEl.textContent = this.slides[i].text
			liEl.appendChild(aEl)
			this.textNav.appendChild(liEl)
			aEl.addEventListener('click', () => {
				this.setEntity(i)
			})
		}
	}
	setDots() {
		for (let i = 0; i < this.slidesLength; i++) {
			let liEl = document.createElement('li')
			let aEl = document.createElement('a')
			aEl.setAttribute('href', '#')
			aEl.setAttribute('class', 'slider_link')
			aEl.textContent = this.slides[i].text
			liEl.appendChild(aEl)
			this.textNav.appendChild(liEl)
			aEl.addEventListener('click', () => {
				this.setEntity(i)
			})
		}
	}
	setArrows() {}
	run() {
		this.setHandlers()
		this.setEntity(this.currentIndex)
		this.setTextNav()
	}
}
const entities = [
	{
		text: 'Первая картинка',
		img: 'img/01.jpg',
	},
	{
		text: 'Втоаря картинка',
		img: 'img/02.jpg',
	},
	{
		text: 'Третья картинка',
		img: 'img/03.jpg',
	},
]
const slider = new Slider(entities)
slider.run()
