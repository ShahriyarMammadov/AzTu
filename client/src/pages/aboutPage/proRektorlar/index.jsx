import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/action/getDataAction";
import Loading from "../../../assets/components/loading";
import Zoom from "react-medium-image-zoom";

const ProRektorlar = () => {
  const data = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("prorektorlar"));
  }, []);

  return (
    <div>
      <>
        {data.loading ? (
          <Loading />
        ) : (
          <div id="prorektorlar">
            <div className="prorektorlar">
              <div className="headerText">
                <h1>Prorektorlar</h1>
                <div className="hr"></div>
              </div>

              <div className="proCard">
                {data.data.map((element, index) => {
                  return (
                    <>
                      <div className="detail" key={index}>
                        <div className="image">
                          <Zoom>
                            <img src={element.image} alt={element.name} />
                          </Zoom>
                        </div>
                        <div className="about">
                          <h2>{element.name}</h2>
                          <p>{element.text}</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ProRektorlar;
