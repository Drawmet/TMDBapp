import React from 'react';
import { compose, lifecycle } from 'recompose';
import shaka from 'shaka-player';
import injectStyles from 'react-jss';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    background: '#000000aa',
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
  video: {
    width: '80%',
    height: '70%',
    padding: '1em 10%',
  },
  link: {
    position: 'absolute',
    right: '1em',
    top: '1em',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '2em',
    color: '#000',
  },
};

const manifestUri =
  'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd';

function initApp() {
  shaka.polyfill.installAll();

  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error('Browser not supported!');
  }
}

function initPlayer() {
  // Create a Player instance.
  var video = document.getElementById('video');

  // shaka.media.ManifestParser.registerParserByExtension(
  //   'm3u8',
  //   shaka.hls.HlsParser
  // );
  // shaka.media.ManifestParser.registerParserByMime("Application/vnd.apple.mpegurl", shaka.hls.HlsParser);
  // shaka.media.ManifestParser.registerParserByMime("application/x-mpegURL", shaka.hls.HlsParser);

  var player = new shaka.Player(video);
  player.configure('manifest.defaultPresentationDelay', 0);
  window.player = player;

  player.addEventListener('error', onErrorEvent);

  player
    .load(manifestUri)
    .then(function() {
      console.log('The video has now been loaded!');
    })
    .catch(onError);
}

function onErrorEvent(event) {
  onError(event.detail);
}

function onError(error) {
  console.error('Error code', error.code, 'object', error);
}

const Video = ({ classes, match: { url } }) => (
  <div className={classes.container}>
    <Link
      className={classes.link}
      to={`/${url.split('/')[2]}/${url.split('/')[3]}`}
    >
      x
    </Link>
    <video
      id="video"
      className={classes.video}
      width="80%"
      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
      controls
      autoPlay
    />
  </div>
);

export default compose(
  lifecycle({
    componentDidMount() {
      initApp();
    },
  }),
  injectStyles(styles)
)(Video);
