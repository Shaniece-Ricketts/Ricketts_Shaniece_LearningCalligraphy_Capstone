import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CollectionOne = () => {
  return (
    <div className="container">
     
      <h1>Collection One</h1>
      <h3><Link to="/videos/video-1">Video 1</Link></h3>
      <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/vslfxwmlUkA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3><Link to="/videos/video-2">Video 2</Link></h3>
      <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/Q8tezXBjXsM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3><Link to="/videos/video-3">Video 3</Link></h3>
      <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/2_p2O9GTxbE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3><Link to="/frontend/public/Videos/Video-4.html">Video 4</Link></h3>
      <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/NZo5DlfTGgo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3><Link to="/videos/video-5">Video 5</Link></h3>
      <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/NSGuuxi2zgw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3><Link to="/videos/video-6">Video 6</Link></h3>
      <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/B943qmDfc2c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <hr />
      <footer>&copy; Copyright 2024</footer>
    </div>
  );
};

export default CollectionOne;
