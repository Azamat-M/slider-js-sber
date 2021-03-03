class Slider {
	constructor({ slides, containerClass }) {
		this.slides = slides
		this.slidesLength = slides.length
		this.currentIndex = 0
		this.containerClass = document.querySelector(containerClass)
		this.sliderWrapper = document.createElement('div')
		this.sliderNav = document.createElement('ul')
		this.sliderNavText = document.createElement('ul')
		this.slide = document.createElement('div')
	}
	buildHtml() {
		this.sliderWrapper.classList.add('slider_wrapper')
		this.sliderNav.classList.add('slider_nav')
		this.sliderNavText.classList.add('slider_nav_text')
		this.slide.classList.add('slide')
		this.containerClass.appendChild(this.sliderWrapper)
		this.containerClass.appendChild(this.sliderNav)
		this.sliderWrapper.appendChild(this.sliderNavText)
		this.sliderWrapper.appendChild(this.slide)
	}
	setEntity(index) {
		this.slide.style.backgroundImage = `url(${this.slides[index].img})`
	}
	setTextNav() {
		for (let i = 0; i < this.slidesLength; i++) {
			let liEl = document.createElement('li')
			let aEl = document.createElement('a')
			aEl.setAttribute('href', '#')
			aEl.setAttribute('class', 'slider_link')
			aEl.textContent = this.slides[i].text
			liEl.appendChild(aEl)
			this.sliderNavText.appendChild(liEl)
			aEl.addEventListener('click', () => {
				this.setEntity(i)
			})
		}
	}
	setDots() {
		for (let i = 0; i < this.slidesLength; i++) {
			let liEl = document.createElement('li')
			let aEl = document.createElement('a')
			let svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
			let rectEl = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'rect'
			)
			aEl.setAttribute('href', '#')
			aEl.setAttribute('class', 'slider_link')
			liEl.appendChild(aEl)
			svgEl.setAttribute('width', '10')
			svgEl.setAttribute('height', '11')
			svgEl.setAttribute('viewBox', '0 0 10 11')
			svgEl.setAttribute('fill', 'none')
			aEl.appendChild(svgEl)
			rectEl.setAttribute('x', '0.0583191')
			rectEl.setAttribute('y', '0.456543')
			rectEl.setAttribute('width', '9.56667')
			rectEl.setAttribute('height', '9.56667')
			rectEl.setAttribute('rx', '4.78333')
			rectEl.setAttribute('fill', 'black')
			rectEl.setAttribute('fill-opacity', '0.3')
			svgEl.appendChild(rectEl)
			this.sliderNav.appendChild(liEl)
			aEl.addEventListener('click', () => {
				this.setEntity(i)
			})
		}
	}
	setArrows() {
		for (let i = 0; i < 2; i++) {
			let liEl = document.createElement('li')
			let aEl = document.createElement('a')
			let svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
			let pathEl1 = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'path'
			)
			let pathEl2 = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'path'
			)
			aEl.setAttribute('href', '#')
			aEl.setAttribute('class', 'slider_link')
			liEl.appendChild(aEl)
			svgEl.setAttribute('width', '42')
			svgEl.setAttribute('height', '14')
			svgEl.setAttribute('viewBox', '0 0 42 14')
			svgEl.setAttribute('fill', 'none')
			aEl.appendChild(svgEl)
			pathEl1.setAttribute('fill-rule', 'evenodd')
			pathEl1.setAttribute('clip-rule', 'evenodd')
			pathEl1.setAttribute('fill', 'black')
			pathEl2.setAttribute('fill-rule', 'evenodd')
			pathEl2.setAttribute('clip-rule', 'evenodd')
			pathEl2.setAttribute('fill', 'black')
			svgEl.appendChild(pathEl1)
			svgEl.appendChild(pathEl2)
			if (i == 0) {
				pathEl1.setAttribute(
					'd',
					'M35.0451 0L41.6831 6.63804L35.0451 13.2761L34.0975 12.3285L39.788 6.63804L34.0975 0.947567L35.0451 0Z'
				)

				pathEl2.setAttribute(
					'd',
					'M40.7356 7.30784L0.227569 7.30784L0.22757 5.96777L40.7356 5.96778L40.7356 7.30784Z'
				)
				this.sliderNav.appendChild(liEl)
				aEl.addEventListener('click', () => {
					if (this.currentIndex > this.slidesLength - 2) {
						this.currentIndex = -1
					}
					this.setEntity(this.currentIndex + 1)
					this.currentIndex += 1
				})
			} else {
				pathEl1.setAttribute(
					'd',
					'M6.63807 13.2761L2.29917e-05 6.63808L6.63807 3.80641e-05L7.58563 0.947606L1.89516 6.63808L7.58563 12.3286L6.63807 13.2761Z'
				)
				pathEl2.setAttribute(
					'd',
					'M0.947579 5.96828L41.4556 5.96829L41.4556 7.30835L0.947578 7.30834L0.947579 5.96828Z'
				)

				this.sliderNav.insertBefore(liEl, this.sliderNav.children[0])
				aEl.addEventListener('click', () => {
					if (this.currentIndex == 0) {
						this.currentIndex = this.slidesLength
					}
					this.setEntity(this.currentIndex - 1)
					this.currentIndex -= 1
				})
			}
		}
	}
	run() {
		this.buildHtml()
		this.setEntity(this.currentIndex)
		this.setTextNav()
		this.setDots()
		this.setArrows()
	}
}
const entities = [
	{
		text: 'Первая картинка',
		img: 'img/01.jpg',
	},
	{
		text: 'Вторая картинка',
		img: 'img/02.jpg',
	},
	{
		text: 'Третья картинка',
		img: 'img/03.jpg',
	},
]
const opions = {
	slides: entities,
	containerClass: '.slider_container',
}
const slider = new Slider(opions)
slider.run()
