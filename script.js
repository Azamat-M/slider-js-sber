class Slider {
	constructor({ slides }) {
		this.slides = slides
		this.slidesLength = slides.length
		this.currentIndex = 0
		this.sliderNav = document.querySelector('.projects_nav')
		this.sliderNavText = document.querySelector('.projects_tabs')
		this.slide = document.querySelector('.projects_imgs')
		this.text = document.querySelector('.projects_txt p')
		this.city = document.querySelector('.info_city p')
		this.area = document.querySelector('.info_area p span')
		this.time = document.querySelector('.info_time p')
		this.cost = document.querySelector('.info_cost p')
	}
	setEntity(index) {
		this.slide.style.backgroundImage = `url(${this.slides[index].img})`
		this.text.textContent = this.slides[index].text
		this.city.textContent = this.slides[index].city
		this.area.textContent = this.slides[index].area
		this.time.textContent = this.slides[index].time
		this.cost.textContent = this.slides[index].cost
		// add class active

		const tabEls = document.querySelectorAll('.projects_tab_link')
		const dotEls = document.querySelectorAll('.projects_link_dots')
		tabEls.forEach((e) => {
			e.classList.remove('active')
		})
		dotEls.forEach((e) => {
			e.classList.remove('active')
		})
		tabEls[index].classList.add('active')
		dotEls[index].classList.add('active')
	}
	setTextNav() {
		for (let i = 0; i < this.slidesLength; i++) {
			let liEl = document.createElement('li')
			let aEl = document.createElement('a')
			aEl.setAttribute('href', '#')
			aEl.classList.add('projects_tab_link')
			aEl.textContent = this.slides[i].heading
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
			aEl.classList.add('projects_link')
			aEl.classList.add('projects_link_dots')

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
			rectEl.setAttribute('fill', 'white')
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
			aEl.classList.add('projects_link')
			liEl.appendChild(aEl)
			svgEl.setAttribute('width', '42')
			svgEl.setAttribute('height', '14')
			svgEl.setAttribute('viewBox', '0 0 42 14')
			svgEl.setAttribute('fill', 'none')
			aEl.appendChild(svgEl)
			pathEl1.setAttribute('fill-rule', 'evenodd')
			pathEl1.setAttribute('clip-rule', 'evenodd')
			pathEl1.setAttribute('fill', 'white')
			pathEl2.setAttribute('fill-rule', 'evenodd')
			pathEl2.setAttribute('clip-rule', 'evenodd')
			pathEl2.setAttribute('fill', 'white')
			svgEl.appendChild(pathEl1)
			svgEl.appendChild(pathEl2)
			if (i == 0) {
				aEl.classList.add('next')
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
				aEl.classList.add('prev')
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
		this.setTextNav()
		this.setDots()
		this.setArrows()
		this.setEntity(this.currentIndex)
	}
}
const entities = [
	{
		heading: 'ROSTOV-ON-DON, ADMIRAL',
		img: 'images/01.png',
		text:
			'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
		city: 'Rostov-on-Don LCD admiral',
		area: '81',
		time: '3.5 months',
		cost: 'Upon request',
	},
	{
		heading: 'SOCHI THIEVES',
		img: 'images/02.png',
		text:
			'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
		city: 'Sochi Thieves',
		area: '105',
		time: '4 months',
		cost: 'Upon request',
	},
	{
		heading: 'ROSTOV-ON-DON PATRIOTIC',
		img: 'images/03.png',
		text:
			'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
		city: 'Rostov-on-Don Patriotic',
		area: '93',
		time: '3 months',
		cost: 'Upon request',
	},
]
const opions = {
	slides: entities,
}
const slider = new Slider(opions)
slider.run()
