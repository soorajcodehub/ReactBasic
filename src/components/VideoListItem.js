import React from 'react';

const VideoListItem = ({video, onSelectedVideo}) => {

  const imageeUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li 
      onClick={ () => onSelectedVideo(video)}
      className="list-group-item"> 
      <div className="bideo-list media">
        <div className="media-left">
          <img className="media-object" src={imageeUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading"> {title} </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem