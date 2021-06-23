import React, { useState } from "react";
import "./App.css";
import SearchIcon from "@material-ui/icons/Search";

//access key:
//Z4TT9B1mLYzJBO6Ew0GXZ2FfvKNzRHQSgnB5h8lviZo

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState("");

  //

  //

  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=Z4TT9B1mLYzJBO6Ew0GXZ2FfvKNzRHQSgnB5h8lviZo&query=${value}&orientation=landscape`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.total);
        setResults(data.results);
        setTotal(data.total);
      });
  };
  return (
    <div className="App">
      {/* <form> */}
      <div class="search-box">
        <input
          type="text"
          class="search-txt"
          name=""
          placeholder="Search for photos..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <a href="#" class="search-btn">
          <button onClick={() => fetchImages()} class="btnIcon" type="submit">
            <SearchIcon />
          </button>
        </a>
      </div>
      <p>{value} </p>
      <h2>{total} Images has been found</h2>
      {/* <div className="gallerydiv">
  <div className="gallery">
         {
           results.map((item)=>{
             return  <img class="item" key={item.id} src={item.urls.regular} />
                  
             
           })
         
         }  
     
                
        
         </div>
         
          </div> */}

      {/*  */}
      <div class="load-more-container">
        <input type="checkbox" id="load-more" />
        <ul>
          {results.map((item) => {
            //  return  <li><img class="item" key={item.id} src={item.urls.regular} style={{width:"250px"}}/></li>
            return (
              <li>
                <img class="item" key={item.id} src={item.urls.regular} />
              </li>
            );
          })}
        </ul>
        <label class="load-more-btn" for="load-more">
          <span class="unloaded">Load More</span>
          <span class="loaded">View Less</span>
        </label>
      </div>
      {/*  */}
      {/* </form> */}
      {/* ******* */}
    </div>
  );
}

export default App;
