import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/action/getDataAction";
import Loading from "../../../assets/components/loading";

const FexriMezunlar = () => {
  const data = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("fexriMezunlar"));
  }, []);

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <div id="mezunlar">
          <div className="mezunlar">
            <div className="headerText">
              <h1>Fəxri Məzunlarımız</h1>
              <div className="hr"></div>
            </div>

            <div className="detailCard">
              {data.data.map((element, index) => {
                return (
                  <div className="detailText" key={index}>
                    <div className="about">
                      <h4>{element.name}</h4>
                      <p>{element.text}</p>
                    </div>
                    <hr />
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

export default FexriMezunlar;
