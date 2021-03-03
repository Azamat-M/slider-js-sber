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

const text = document.querySelector('.text')
const img = document.querySelector('.slide')

const setEntity = (index) => {
	text.innerText = entities[index].text
	img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0

prev.addEventListener('click', () => {
	setEntity(currentIndex - 1)
	currentIndex -= 1
})
next.addEventListener('click', () => {
	setEntity(currentIndex + 1)
	currentIndex += 1
})
