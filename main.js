const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

drawRect({
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    stroke: true,
    fill: true,
    strokeStyle: "red",
    fillStyle: "green",
    lineWidth: 2
})

function drawRect(param) {
    context.beginPath()
    context.rect(param.x, param.y, param.width, param.height)

    context.strokeStyle = param.strokeStyle
    context.fillStyle = param.fillStyle
    context.lineWidth = param.lineWidth

    if (param.fill) {
        context.fill()
    }

    if (param.stroke) {
        context.stroke()
    }

}
