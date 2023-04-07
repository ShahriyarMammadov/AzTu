import React from "react";
import "./index.scss";
import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.jpg";
import image3 from "../../assets/images/img3.jpeg";
import image4 from "../../assets/images/img4.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const HomePage = () => {
  return (
    <>
      <section id="section1">
        <div className="coverText">
          <h1>Azərbaycan Texniki Universiteti</h1>
        </div>
      </section>

      <section id="section2">
        <div className="section2">
          <div className="left">
            <p>
              Azərbaycanda texniki təhsilin əsası ilk dəfə 1887-ci ilin noyabr
              ayında Bakı şəhər Duması tərəfindən Bakıda texniki məktəbin
              yaradılması ilə qoyulub. Əvvəlcə bu məktəbin Mexanika şöbəsi üzrə
              50, İnşaat şöbəsi üzrə 55 nəfərdən ibarət buraxılışı olub. 1916-cı
              ildə məktəbdə artıq 494 tələbə təhsil alırdı. Onlardan cəmi 20
              nəfəri azərbaycanlı tələbələr olub. 1918-ci ildə verilən qərara
              əsasən məktəb Politexnikum adlanıb. 188 nəfər tələbəsi olan təhsil
              ocağında Neft sənayesi, Elektromexanika və İnşaat-memarlıq
              şöbələri fəaliyyət göstərib. O zaman Azərbaycanda cəmi 62 nəfər
              ali təhsillidən 12 nəfəri mühəndis olub.
            </p>
            <hr />
            <p>
              14 noyabr 1920-ci ildə Azərbaycan İnqilab Komitəsinin sədri
              Nəriman Nərimanovun dekreti ilə tərkibində Neft sənayesi,
              Memarlıq-inşaat və Elektromexanika şöbələri olan Bakı Politexnik
              Məktəbinin bazasında ali texniki mütəxəssislər hazırlayan Bakı
              Politexnik İnstitutu yaradılıb. Bu institutun tərkibində beş
              fakültə - Neft sənayesi, Elektromexanika, İnşaat-mühəndis, Kənd
              təsərrüfatı və İqtisadiyyat fakültələri fəaliyyət göstərib.
            </p>
          </div>
          <div className="right">
            <Zoom>
              <img src={image1} alt="AzTu" />
            </Zoom>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="section2">
          <div className="right">
            <Zoom>
              <img src={image2} alt="AzTu" />
            </Zoom>
          </div>
          <div className="left">
            <p>
              Bakı Politexnik İnstitutu 1923-cü ildən Azərbaycan Neft İnstitutu,
              1943-cü ilin noyabr ayından isə Azərbaycan Sənaye İnstitutu
              adlandırılıb. Sonuncunun tərkibində Memarlıq-inşaat,
              Neft-mexanika, Energetika, Neft-mədən, Dəmir yolu və
              Mühəndis-iqtisadiyyat fakültələri olub. Azərbaycan Sənaye
              İnstitutunda, əsasən neft sahəsi üçün mühəndis kadrların
              hazırlanması, İkinci Dünya Müharibəsindən sonra xalq
              təsərrüfatının bütün sahələrinin bərpası, inkişafı, yeni sənaye
              müəssisələrinin açılmasının vacibliyi, müxtəlif sahələr üzrə
              mühəndis kadrlarının hazırlanmasına olan ehtiyac və Azərbaycanda
              müəyyən intellektual texniki potensialın olması Azərbaycan
              Politexnik İnstitutunun yenidən yaradılmasına imkan verdi.
            </p>
            <hr />
            <p>
              Azərbaycan Respublikasının texniki təhsil sahəsində aparıcı
              universitetlərindən biri olan Azərbaycan Texniki Universiteti
              (AzTU) 1950-ci ildə ölkəmizin paytaxtı Bakı şəhərində tərkibində 4
              fakültə olmaqla Azərbaycan Politexnik İnstitutu adı altında
              yaradılıb.
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="section2">
          <div className="left">
            <p>
              1950-1955-ci illərdə universitetin fakültələri müxtəlif ünvanlarda
              yerləşən binalarda fəaliyyət göstərib. 1955-ci ildən bütün
              fakültələri əhatə etməklə universitet indiki binasına köçürülüb.
              Qərb və şərq memarlığının ən gözəl üslublarını özündə birləşdirən
              universitetin yaraşıqlı binasında tələbələrin dərin biliklərə
              yiyələnməsi üçün hər bir şərait yaradılıb. 1975-ci ildə
              universitetin bazası əsasında Azərbaycanda iki yeni ali texniki
              məktəb Azərbaycan İnşaat və Memarlıq Universiteti və Gəncə
              Texnologiya İnstitutu yaradılıb. 1978-ci ildən başlayaraq AzTU-da
              SSRİ-nin müxtəlif respublikaları və bir sıra Asiya, Afrika və
              Latın Amerikası ölkələri üçün kütləvi mütəxəssis hazırlığına
              başlanıb. Həmin dövrlərdə universitetdə 12 mindən artıq əcnəbi
              tələbə təhsil alırdı.
            </p>
            <hr />
            <p>
              Müxtəlif dövrlərdə universitetdə 40-dan artıq xarici ölkənin
              vətəndaşları təhsil alıb və hazırda təhsil almaqda davam edirlər.
              1983-cü ildə universitet tədris-metodiki və elmi-texniki sahələrdə
              qazandığı nailiyyətlərə görə SSRİ Ali və Orta İxtisas Təhsili
              Nazirliyinin keçici bayrağını və birinci dərəcəli pul mükafatını
              alıb.
            </p>
          </div>
          <div className="right">
            <Zoom>
              <img src={image3} alt="AzTu" />
            </Zoom>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="section2">
          <div className="right">
            <Zoom>
              <img src={image4} alt="AzTu" />
            </Zoom>
          </div>
          <div className="left">
            <p>
              1991-ci ildən universitet indiki Azərbaycan Texniki Universiteti
              (AzTU) adını daşıyır. Halhazırda universitetdə maşınqayırma,
              metallurgiya, informatika və kompüter texnologiyaları,
              elektrotexnika, telekommunikasiya, nəqliyyat, mühəndis biznesi və
              digər sahələri əhatə edən 38 ixtisas üzrə bakalavr və 100-dən çox
              ixtisaslaşma üzrə magistr hazırlanır. Universitetdə Nəqliyyat və
              logistika, Energetika və avtomatika, Metallurgiya və
              materialşünaslıq, Maşınqayırma və robototexnika, İnformasiya və
              telekommunikasiya texnologiyaları, İqtisadiyyat və idarəetmə,
              Xüsusi texnika və texnologiya fakültələri fəaliyyət göstərir.
            </p>
            <hr />
            <p>
              Universitetin elmi nailiyyətləri Elmi əsərlər və Maşınşünaslıq
              adlı elmi-texniki jurnallarda çap olunur. 500 mindən artıq kitab
              fondu olan universitet kitabxanası və oxu zalları, eləcə də
              400-dən artıq fərdi kompüteri olan 20-dək tədris və multimedia
              zalları, ixtisaslaşdırılmış laboratoriyalar tələbələrə və
              əməkdaşlara xidmət edir. Universitet BMT, YUNESKO, TRASEKA və
              digər Beynəlxalq təşkilatların müvafiq strukturları, bir çox
              xarici ölkələrin tanınmış universitetləri ilə sıx əməkdaşlıq edir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
