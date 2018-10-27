{
  $('button#play-pause').on('click', function() {
    helper.playPauseandUpdate();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on(
    'click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }
      const nextSong = album.songs[nextSongIndex];
      helper.playPauseandUpdate(nextSong);
    });

    $('button#previous').on(
      'click', function() {
        if (player.playState !== 'playing') { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const prevSongIndex = currentSongIndex - 1;
        if (prevSongIndex < 0) { return; }
        const prevSong = album.songs[prevSongIndex];
        helper.playPauseandUpdate(prevSong);
      });

    $('#time-control input').on('input', function(event) {
      player.skipTo(event.target.value);
    });

    setInterval( () => {
      if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const prettyCurrent = player.prettyTime(currentTime);
      const durationTime = player.getDuration();
      const prettyDuration = player.prettyTime(durationTime);
      const timepercent = (currentTime/durationTime)*100;
      $('#time-control .current-time').text(prettyCurrent);
      $('#time-control input').val(timepercent);
    }, 1000);

    $('#volume-control input').on('input', function(event) {
      player.setVolume(event.target.value);
    })

}
