<template>
  <div class="canvas-wrapper">
    <div id="canvas"></div>
  </div>
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
    var loadingValue = 0
    var redValue = 300
    var greenValue = 0

    const script = (p5) => {
      p5.setup = () => {
        p5.createCanvas(315, 30)
        p5.frameRate(18.33)
      }
      p5.draw = () => {
        p5.translate(3.75, 3.75)
        p5.clear()
        p5.fill(0, 0, 0, 0)
        p5.stroke(255)
        p5.rect(0, 0, 307.5, 22.5, 22.5, 22.5)
        p5.fill(redValue * 0.85, greenValue * 0.85, 100, 255)
        p5.noStroke()
        p5.rect(3.75, 3.75, loadingValue, 15, 15, 15)

        if (loadingValue < 300) {
          loadingValue += 1
          if (loadingValue > 200) {
            if (redValue >= 0) {
              redValue -= 3
            }
          } else if (loadingValue <= 200) {
            if (greenValue >= 0) {
              greenValue += 1.5
            }
          }
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

<style scoped>
.canvas-wrapper {
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  .canvas-wrapper {
    height: 95vh;
  }
}
</style>
