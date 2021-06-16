<template>
    <div class="cv" id="scroller">
        <div id="example1">
            <!-- <iframe id="iframe" scrolling=no src="../static/CV et Lettre de motivation.pdf" frameborder="0"></iframe> -->
            <embed src="../static/CV et Lettre de motivation.pdf" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
        </div>
    </div>
</template>
<script src="/js/pdfobject.js"></script>
<script>PDFObject.embed("../static/CV et Lettre de motivation.pdf", "#example1");</script>

<script>
export default {
  name: 'cv',
}

setTimeout(function () {
var startY = 0;
var startX = 0;
var b = document.body;
b.addEventListener('touchstart', function (event) {
    parent.window.scrollTo(0, 1);
    startY = event.targetTouches[0].pageY;
    startX = event.targetTouches[0].pageX;
});
b.addEventListener('touchmove', function (event) {
    event.preventDefault();
    var posy = event.targetTouches[0].pageY;
    var h = parent.document.getElementById("scroller");
    var sty = h.scrollTop;

    var posx = event.targetTouches[0].pageX;
    var stx = h.scrollLeft;
    h.scrollTop = sty - (posy - startY);
    h.scrollLeft = stx - (posx - startX);
    startY = posy;
    startX = posx;
});
}, 1000);
</script>

<style scoped>

  .cv {
      width: 100%;
      height: 100%;
      overflow: hidden;
  }
  .cv div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      min-height: 100vh;
  }
  .cv div iframe {
      width: 100%;
      height: 100%;
  }
    #plugin {
        min-height: 100vh;
        min-width: 100vh;
    }
</style>