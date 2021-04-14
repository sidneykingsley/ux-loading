<template>
  <div id="canvas"></div>
</template>

<script>
import P5 from 'p5'

export default {
  props: ['delay'],
  data() {
    return {
      results: false,
      timer: null,
      reactionTime: 0,
    }
  },
  mounted() {
    const spacing = -15
    const rectW = 2.5
    const rectH = 10
    var rotateVal = 0

    const script = (p5) => {
      p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight * 0.95)

        p5.rectMode(p5.CENTER)
      }
      p5.draw = () => {
        p5.angleMode(p5.DEGREES)
        p5.clear()
        if (window.innerWidth <= 500) {
          p5.translate(window.innerWidth / 2, (window.innerHeight * 0.95) / 2)
        } else {
          p5.translate(window.innerWidth / 2, (window.innerHeight * 0.9) / 2)
        }
        p5.noStroke()
        p5.rotate(rotateVal)
        p5.fill(255, 255, 255, 255)
        p5.rect(0, spacing, rectW, rectH, 10, 10, 10, 10)
        if (p5.frameCount % 5 === 0) {
          rotateVal += 30
        }
        for (var i = 2; i < 13; i++) {
          p5.rotate(-30)
          p5.fill(255, 255, 255, 255 - 21.5 * i)
          p5.rect(0, spacing, rectW, rectH, 10, 10, 10, 10)
        }
      }
    }
    setTimeout(() => {
      this.$emit('end')
    }, this.delay)
    const p5canvas = new P5(script, 'canvas')
  },
}
</script>

<style></style>
