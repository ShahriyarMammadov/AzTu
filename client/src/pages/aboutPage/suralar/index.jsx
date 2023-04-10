import React from "react";
import { Table } from "antd";
import "./index.scss";

const Suralar = () => {
  const columns = [
    {
      title: "Soyadı, adı və atasının adı",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Vəzifəsi",
      dataIndex: "position",
      key: "position",
      responsive: ["md"],
    },
  ];

  const data = [
    {
      key: "1",
      name: "	Vəliyev Vilayət Məmməd oğlu",
      position: "Rektor, i.e.d. professor, sədr",
    },
    {
      key: "2",
      name: "Yusifbəyli Nurəli Adil oğlu",
      position: "Tədris işləri üzrə prorektor, t.e.d., professor, sədr müavini",
    },
    {
      key: "3",
      name: "Namazov Sübhan Nadir oğlu",
      position: "Elm və innovasiyalar üzrə prorektor, t.e.d., professor",
    },
    {
      key: "4",
      name: "Mustafayev Fariz Front oğlu",
      position: "Ümumi işlər üzrə prorektor",
    },
    {
      key: "5",
      name: "Məmmədov Fariz Orucalı oğlu",
      position: "Beynəlxalq əlaqələr üzrə prorektor",
    },
    {
      key: "6",
      name: "Əliyev Rəşad Yavər oğlu",
      position: "Rəqəmsallaşma və layihələr üzrə prorektor",
    },
    {
      key: "7",
      name: "Rzayeva Nərmin Eldar qızı",
      position: "Sosial məsələlər və ictimayyətlə əlaqələr üzrə prorektor",
    },
    {
      key: "8",
      name: "Poladov Nizami Qədim oğlu",
      position:
        "Metallurgiya və materialşünaslıq fakültəsinin dekanı, t.f.d, dosent",
    },
    {
      key: "9",
      name: "Qarayev Malik Fikrət oğlu",
      position:
        "Maşınqayırma və robototexnika fakültəsinin dekanı, t.e.n dosent",
    },
    {
      key: "10",
      name: "Musayeva Fərqanə Qəzənfər qızı",
      position:
        "İqtisadiyyat və idarəetmə fakültəsinin dekanı, i.ü.f.d., dosent",
    },
    {
      key: "11",
      name: "Şirinov Taleh Voraşil oğlu",
      position:
        "İnformasiya və telekommunikasiya texnologiyaları fakültəsinin dekanı, f.r.e.n., dosent",
    },
    {
      key: "12",
      name: "Rzayev Elçin David oğlu",
      position:
        "Xüsusi texnika və texnologiya fakültəsinin dekanı, t.e.n., dosent",
    },
    {
      key: "13",
      name: "Quliyev Hüseynqulu Bayram oğlu",
      position:
        "Energetika və avtomatika fakültəsinin dekan əvəzi, dosent, t.e.n.",
    },
    {
      key: "14",
      name: "Şərifov Allahverdi Camal oğlu",
      position:
        "Nəqliyyat və logistika fakültəsinin dekan əvəzi, dosent, t.f.d.",
    },
  ];

  return (
    <div id="suralar">
      <div className="suralar">
        <div className="headerText">
          <h1>Şura</h1>
          <div className="hr"></div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Suralar;
