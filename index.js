const image = document.getElementById('tag-img')
const title = document.getElementById('title')

const buttons = document.getElementById('buttons')
const buttonPrimary = document.getElementById('b-primary')
const buttonSecondary = document.getElementById('b-secondary')

let index = 0

buttonPrimary.addEventListener('click', () => {
    if (index === 0) {
        image.src = './assets/gp1.gif'
        index++

        title.textContent = '¿Segura? 🥹'
        buttonPrimary.textContent = 'Segurisima'
    } else {
        image.src = './assets/gp2.webp'

        title.textContent = '!Muchas gracias por ser mi valentin! (/≧▽≦)/ 💗'
        buttons.remove()

        const defaults = {
            spread: 360,
            ticks: 100,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["heart"],
            colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
          };
          
          confetti({
            ...defaults,
            particleCount: 50,
            scalar: 2,
          });
          
          confetti({
            ...defaults,
            particleCount: 25,
            scalar: 3,
          });
          
          confetti({
            ...defaults,
            particleCount: 10,
            scalar: 4,
          });
    }
})

buttonSecondary.addEventListener('click', () => {
    if (index === 0) {
      image.src = `./assets/bp1.gif`
      index++

      title.textContent = '¿Podrias reconsiderarlo? 😞'
      buttonPrimary.textContent = 'Si'
    }

    if (index < 5) {
      index++
      
      let currentWidth = buttonPrimary.offsetWidth
      let currentHeight = buttonPrimary.offsetHeight
      let currentSize = parseInt(window.getComputedStyle(buttonPrimary).fontSize)
      buttonPrimary.style.width = (currentWidth + currentWidth * 0.2) + 'px'
      buttonPrimary.style.height = (currentHeight + currentHeight * 0.2) + 'px'
      buttonPrimary.style.fontSize = (currentSize + 5) + 'px'
    }
})