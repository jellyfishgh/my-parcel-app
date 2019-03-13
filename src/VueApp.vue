<template lang="pug">
  .app
    canvas.canvas(ref='canvas' :width='200' :height='200' @mousedown='onMouseDown' @mousemove='onMouseMove' @mouseup='onMouseUp')
    .desc {{title}}
    input(type='text' v-model='title')
</template>

<script>
export default {
  name: 'vue-app',
  data () {
    return {
      title: 'Vue App',
      startDrawing: false,
      ctx: null,
      startX: 0,
      startY: 0,
      left: 0,
      top: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const { canvas } = this.$refs
      this.ctx = canvas.getContext('2d')
      this.left = canvas.offsetLeft
      this.top = canvas.offsetTop
    },
    onMouseDown ({ clientX, clientY }) {
      this.startDrawing = true
      this.startX = clientX - this.left
      this.startY = clientY - this.top
      this.ctx.beginPath()
      this.ctx.moveTo(this.startX, this.startY)
    },
    onMouseMove ({ clientX, clientY }) {
      if (this.startDrawing) {
        const newStartX = clientX - this.left
        const newStartY = clientY - this.top
        this.ctx.lineTo(newStartX, newStartY)
        this.ctx.stroke()
        this.startX = newStartX
        this.startY = newStartY
      }
    },
    onMouseUp () {
      this.startDrawing = false
      this.ctx.closePath()
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  background-color: green;
  padding: 10px;
  .desc {
    color: red;
  }
  .canvas {
    border: 1px solid #000;
    margin: 20px;
  }
}
</style>
