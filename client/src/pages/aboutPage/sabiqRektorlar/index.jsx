import React, { useEffect } from "react";
import "./index.scss";
import Zoom from "react-medium-image-zoom";
import Loading from "../../../assets/components/loading";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/action/getDataAction";

const SabiqRektorlar = () => {
  const data = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("sabiqRektorlarimiz"));
  }, []);

  return (
    <>
      {data?.loading ? (
        <Loading />
      ) : (
        <div id="sabiqRektorlar">
          <div className="sabiqRektorlar">
            <div className="headerText">
              <h1>Prorektorlar</h1>
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

export default SabiqRektorlar;
