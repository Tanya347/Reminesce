import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../useFetch"
import { AuthContext } from '../authContext';
import {Link} from "react-router-dom"
import '../styles/home.css'

const Home = () => {
  const [query, setQuery] = useState("");
    const { user } = useContext(AuthContext)
    const {data, loading} = useFetch(`/entries/author/${user._id}`)

    const keys = ["title", "location","date"];

    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key] && item[key].toLowerCase().includes(query))
      );
    };
    

  return (
    <div>
      <Navbar />
      <div className="search">
          <div className="searchBar">
              <h2>Explore</h2>
              <div className="searchInput">
                  <input
                    type="text"
                    placeholder="Search places or dates"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              </div>
          </div>
      </div>

      <div className="searchedPosts">
        {loading ? (
          <>
            <div className="p" style={{color: "white", "fontFamily": "'Kaushan Script', cursive"}}>Loading...</div>
          </>
        ) : (
          <>
            {search(data)?.map((item, i) => (
              <div className="card" key={item._id} data-aos="fade-up">
                <div class="content">
                  <img id="post-image" src={item.photos[0]} alt="no content" />
                  <h4>{item.title}</h4>
                  <h6>
                    <span>Date : </span> {item.date}
                  </h6>
                  <h6>
                    <span>Location : </span> {item.location}
                  </h6>
                  <p>{item.text.slice(0, 100)}...</p>
                  <Link to={`view/${item._id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Home