import React from "react";
import "./index.scss";

const Strategiya = () => {
  return (
    <div id="strategiya">
      <div className="strategiya">
        <h5>
          <span>Məqsəd</span>: AzTU-nun qarşıdakı on ildə inkişafının təməl
          məqsədi rəqəmsal platformada texnoloji gələcək üçün ağıllı həllər
          vermək və bu yönümdə mütəxəssis hazırlığını təmin etməkdir.
        </h5>
        <h5>
          <span>Missiya</span>: Mühəndislik elmləri və ağıllı texnologiyaların
          tətbiqi sahəsində regionda lider universitet olmaq. Əsas strateji
          hədəflər: Sənayenin inkişafını və texnoloji gələcəyi qarşılayan
          məsələlərin həllini öyrədən yenilikçi-təşəbbüskar akademik, məzun və
          tələbə heyəti ilə araşdırma və sahibkar universiteti qurmaq,
          hazırlanan mühəndis kadrların səviyyəsini beynəlxalq standartlar
          səviyyəsinə yüksəltmək.
        </h5>
        <h5>
          {" "}
          <span>Şüar</span>: Yarat, inkişaf etdir, işlət (tətbiq et) (3D:
          design, development, deploy).{" "}
        </h5>
        <a
          href="https://www.aztu.edu.az/web_admin/upload/files/aztu.edu.az/menus/9-2022/Strategiya.pdf"
          target="_blank"
        >
          2021-2030-cu illər üçün inkişaf strategiyası
        </a>
      </div>
    </div>
  );
};

export default Strategiya;
