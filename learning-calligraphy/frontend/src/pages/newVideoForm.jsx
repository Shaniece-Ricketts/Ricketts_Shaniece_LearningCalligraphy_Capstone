import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Adjust the path according to your project structure

const NewVideoForm = () => {
  return (
    <div className="container">

      <h1>Add New Video</h1>
      <form autoComplete="on" action="/action_page.php" target="_target" method="post">
        <label htmlFor="videoTitle">
          <h2>Video Title</h2>
        </label>
        <input
          id="videoTitle"
          name="videoTitle"
          type="text"
          size="35"
          placeholder="Input value"
          required
        />
        <br /><br />

        <label htmlFor="message">
          <h2>Description</h2>
        </label>
        <textarea id="message" name="message" rows="8" cols="25"></textarea>

        <label htmlFor="types">
          <h2>Video</h2>
        </label>
        <input type="file" />

        <br /><br />

        <input name="setting" id="public" type="radio" value="public" />
        <label htmlFor="public">Public</label>

        <input name="setting" id="private" type="radio" value="private" />
        <label htmlFor="private">Private</label>

        <br /><br />

        <label htmlFor="chooseCollection"></label>
        <select id="chooseCollection" name="chooseCollection">
          <option value="choose">Choose Collection</option>
          <option value="collectionone">Collection 1</option>
          <option value="collectiontwo">Collection 2</option>
          <option value="collectionthree">Collection 3</option>
        </select>

        <br /><br /><br />
        <button type="submit">Upload Video</button>
      </form>

      <img
        src="https://media1.giphy.com/media/l3J4H4zp2nAdKZFebK/giphy.gif"
        alt="Gif"
        className="gif"
      />
      <hr />
      <footer>&copy; Copyright 2024</footer>
    </div>
  );
};

export default NewVideoForm;
