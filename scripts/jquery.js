$player.each(function (index) {
  var $this = $(this)
    , id = 'audio-player-' + index

  $this.attr('id', id)

  $this.find('.js-control')[0].addEventListener('click', function () {
    resetPlayback(id)
    playback($this, $this.find('audio'), $this.find('video'))
  })

  // Reset state once audio has finished playing
  $this.find('audio')[0].addEventListener('ended', function () {
    resetPlayback()
  })
})



