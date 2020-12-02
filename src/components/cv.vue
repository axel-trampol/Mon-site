<template>
    <div class="cv">
        <div>
            <iframe src="../static/cv.pdf" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cv',
}
</script>

<style scoped>

  .cv {
      width: 100%;
      height: 100%;
  }
  .cv div {
      width: 100%;
      height: 100%;
  }
  .cv div iframe {
      width: 100%;
      height: 100%;
  }

</style>