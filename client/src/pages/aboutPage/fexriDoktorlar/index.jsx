import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/action/getDataAction";
import Loading from "../../../assets/components/loading";
import Zoom from "react-medium-image-zoom";

const fexriDoktorlar = () => {
  const data = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("fexriDoktorlar"));
  }, []);

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <div id="fexriDoktor">
          <div className="fexriDoktor">
            <div className="headerText">
              <h1>Fəxri Doktorlarımız</h1>
              <div className="hr"></div>
            </div>

            <div className="cards">
              {data.data.map((element, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="image">
                      <Zoom>
                        <img src={element.image} alt={element.name} />
                      </Zoom>
                    </div>
                    <div className="about">
                      <h4>{element.name}</h4>
                      <h6>{element.date}</h6>
                      <p>{element.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default fexriDoktorlar;
