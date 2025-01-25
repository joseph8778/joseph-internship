import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";

const TopSellers = () => {
  const [data, setData] = useState();

  useEffect(() => {
  async function fetchData() {
      try {
          const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers')
          setData({})
          console.log(response.data)
        } catch(error) {
          if (error.response) {
            console.log('Error response:' + error.response.data)
          } else if (error.request) {
            console.log('Error request:' + error.request)
          } else {
            console.log('Error message:' + error.message)
          }
      }
  }
      
    fetchData();
  }, []);
    
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {data ? (
                data.map((item, index) => (
                  <li key={index}>
                  <div className="author_list_pp">
                  <Link to="/author">
                  <img
                  className="lazy pp-author"
                  src={item.authorImage}
                  alt=""
                  />
                      <i className="fa fa-check"></i>
                      </Link>
                      </div>
                      <div className="author_list_info">
                      <Link to="/author">{item.authorName}</Link>
                      <span>{item.price} ETH</span>
                      </div>
                      </li>
                    ))
                  ) : (
                    Array.from({length: 12}).map((_, index) => {

                      <li key={index}>
                    <div className="author_list_pp">
                    <Link to="/author">
                    <img
                    className="lazy pp-author"
                    src={AuthorImage}
                    alt=""
                    />
                        <i className="fa fa-check"></i>
                        </Link>
                        </div>
                        <div className="author_list_info">
                        <Link to="/author">Joseph Rigby</Link>
                        <span>1.42 ETH</span>
                        </div>
                        </li>
                      }))
                    }
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
