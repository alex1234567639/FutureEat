<template>
  <div>
    <div>
      施工中
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'routePath',
  head() {
    return {
      titleTemplate: '%s - 雅咪',
      script: [{
        src: 'https://code.jquery.com/jquery-3.3.1.js',
        integrity: 'sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=',
        crossorigin: 'anonymous'
      }],
    }
  },
  data() {
    return {}
  },
}
</script>
