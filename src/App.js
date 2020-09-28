import React, { useState } from "react";
import Row from "./Row";
import "./App.css";

const App = () => {
  const [certificate, setCertificate] = useState({
    name: "",
    credentials: "",
  });
  const [certificates, setCertificates] = useState([]);

  const change = (e) => {
    let { name, value } = e.target;
    setCertificate({ ...certificate, [name]: value });
  };
  /* eslint-disable */
  const del = (value) => {
    setCertificates(certificates.filter((val) => value !== val));
    // setTimeout(setEquipments(eqp), 2000)
  };

  const edit = (index, value) => {
    const tmp = certificates;
    tmp[index] = value;
    setCertificates(tmp);
  };

  const add = () => {
    if (certificate.name && certificate.credentials) {
      setCertificates([...certificates, certificate]);
      setCertificate({
        name: "",
        credentials: "",
      });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Certifications</h1>
        <table>
          <tbody>
            {certificates.map((value, index) => {
              return (
                <Row
                  value={value}
                  index={index}
                  deleteHandler={del}
                  editHandler={edit}
                  key={value.name}
                >
                  {value.a}
                </Row>
              );
            })}
            <tr>
              <td className="value">
                <input
                  name="name"
                  value={certificate.name}
                  onChange={change}
                  placeholder="Title"
                />
              </td>
              <td className="value">
                <input
                  name="credentials"
                  value={certificate.credentials}
                  onChange={change}
                  placeholder="Credentials"
                />
              </td>
              <td className="button">
                <button className="add" onClick={add}>Add</button>
              </td>
              <td className="button"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
