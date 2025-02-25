let lastRenderTime = 0
const SNAKE_SPEED = 20

function main(currentTime) {
window.requestAnimationFrame(main)
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000



 lastRenderTime = currentTime
 console.log(secondsSinceLastRender)
}