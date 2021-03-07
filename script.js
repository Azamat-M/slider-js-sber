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
      aEl.addEventListener('click', (e) => {
        e.preventDefault()
        this.setEntity(i)
        this.currentIndex = i
      })
    }
  }
  setDots() {
    for (let i = 0; i < this.slidesLength; i++) {
      let liEl = document.createElement('li')
      let aEl = document.createElement('a')
      let dotEl = document.createElement('span')
      aEl.setAttribute('href', '#')
      aEl.classList.add('projects_link')
      aEl.classList.add('projects_link_dots')

      liEl.appendChild(aEl)

      this.sliderNav.appendChild(liEl)
      aEl.addEventListener('click', (e) => {
        e.preventDefault()
        this.setEntity(i)
        this.currentIndex = i
      })
    }
  }
  setArrows() {
    for (let i = 0; i < 2; i++) {
      let liEl = document.createElement('li')
      let aEl = document.createElement('a')
      let svgEl = document.createElement('img')
      aEl.setAttribute('href', '#')
      aEl.classList.add('projects_link')
      liEl.appendChild(aEl)

      aEl.appendChild(svgEl)

      if (i == 0) {
        aEl.classList.add('next')
        svgEl.setAttribute('src', 'images/right.svg')
        svgEl.setAttribute('alt', 'right arrow')
        this.sliderNav.appendChild(liEl)
        aEl.addEventListener('click', (e) => {
          e.preventDefault()

          if (this.currentIndex > this.slidesLength - 2) {
            this.currentIndex = -1
          }
          this.setEntity(this.currentIndex + 1)
          this.currentIndex += 1
        })
      } else {
        aEl.classList.add('prev')
        svgEl.setAttribute('src', 'images/left.svg')
        svgEl.setAttribute('alt', 'left arrow')

        this.sliderNav.insertBefore(liEl, this.sliderNav.children[0])
        aEl.addEventListener('click', (e) => {
          e.preventDefault()
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
