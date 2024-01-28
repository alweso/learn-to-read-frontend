import React from 'react'
import YouTube from 'react-youtube'

interface YouTubePlayerProps {
  videoUrl: string
}

const YouTubePlayer = ({ videoUrl }: YouTubePlayerProps) => {
  // Extract the YouTube video ID from the URL
  const getYouTubeID = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/)
    return match && match[1]
  }

  // Options for the YouTube player (you can customize these as needed)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  const videoId = getYouTubeID(videoUrl)

  if (!videoId) {
    return <div>Error: Invalid YouTube URL</div>
  }

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  )
}

export default YouTubePlayer
