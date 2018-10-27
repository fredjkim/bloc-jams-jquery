class Helper {
  playPauseandUpdate (song) {
    player.playPause(song)
    let duration = player.prettyTime(player.getDuration(song));
    $('#time-control .total-time').text(duration);
  }
}

const helper = new Helper();
