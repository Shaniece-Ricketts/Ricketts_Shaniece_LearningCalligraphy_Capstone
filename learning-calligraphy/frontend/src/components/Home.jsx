import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <h2>FEATURED</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/vslfxwmlUkA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </td>
            <td>
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/Z322_3zyN7o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </td>
            <td>
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/fVjUcCuCKx8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <footer>&copy; Copyright 2024</footer>
    </div>
  );
};

export default Home;
