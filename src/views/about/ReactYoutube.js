import React, { Component } from 'react'
import YouTube from 'react-youtube'

// https://www.youtube.com/watch?v=9fK2uhDEnP0&t=4s
// https://youtu.be/9fK2uhDEnP0

export default class ReactYoutube extends Component {
    videoOnReady(event) {
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            },
        };
        const {videoId} = this.props
        return <YouTube videoId={videoId} opts={opts} videoOnReady={this._onReady} />;
    }
}

