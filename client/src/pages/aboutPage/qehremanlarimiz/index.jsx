import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/action/getDataAction";
import Loading from "../../../assets/components/loading";
import Zoom from "react-medium-image-zoom";

const Qehremanlarimiz = () => {
  const data = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("qehremanlarimiz"));
  }, []);

  return (
    <>
      {data?.loading ? (
        <Loading />
      ) : (
        <div id="qehremanlarimiz">
          <div className="qehremanlarimiz">
            <div className="headerText">
              <h1>Qəhrəmanlarımız</h1>
              <div className="hr"></div>
            </div>

            <div className="cards">
              {data?.data?.map((element, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="image">
                      <Zoom>
                        <img src={element?.image} alt={element?.name} />
                      </Zoom>
                    </div>
                    <div className="about">
                      <h4>{element?.name}</h4>
                      <h5>Doğum tarixi: {element?.birthday}</h5>
                      <p>İxtisası: {element?.ixtisasi}</p>
                      <p>Təhsil aldığı qrup: {element?.qrup}</p>
                      <p>Rütbə: {element?.rutbe}</p>
                      <p>Təltifləri: {element?.teltifleri}</p>
                      <p>Şəhid olduğu tarix: {element?.sehidOlduguTarix}</p>
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

export default Qehremanlarimiz;
