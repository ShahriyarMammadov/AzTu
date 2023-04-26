import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Loading from "../../assets/components/loading";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    let { data } = await axios.get(`http://localhost:3000/blogData`);
    setAllData(data);
    setloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="blogPage">
      <div className="blogPage">
        {loading ? (
          <Loading />
        ) : (
          <div className="allCard">
            {allData.map((e) => {
              return (
                <>
                  <div className="blogCards">
                    <div className="image">
                      <img src={e?.blogImage} alt="" />
                    </div>
                    <div className="texts">
                      {" "}
                      <div className="aboutText">
                        <h4>{e?.blogName}</h4>
                      </div>
                      <div className="date">{e?.expiredDate}</div>
                      <div className="text">
                        <p>{e?.blogText}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hrCard"></div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
