import React, { useState } from "react";
/* eslint-disable */

const Row = (props) => {
  const [display, setDisplay] = useState(true);
  const [certificate, setCertificate] = useState({
    name: props.value.name,
    credentials: props.value.credentials
  });

  const edit = () => {
    setDisplay(!display);
  };

  const save = (index) => {
    edit();
    props.editHandler(index, certificate);
  };

  const change = (e) => {
    let { name, value } = e.target;
    setCertificate({ ...certificate, [name]: value });
  };

  return (
    <tr>
      {display ? (
        <>
          <td className="value">{certificate.name}</td>
          <td className="value">{certificate.credentials}</td>
        </>
      ) : (
        <>
          <td className="value">
            <input name="name" value={certificate.name} placeholder="Title" onChange={change} />
          </td>
          <td className="value">
            <input name="credentials" value={certificate.credentials} placeholder="Credentials" onChange={change} />
          </td>
        </>
      )}
      {display ? (
        <>
          <td className="button">
            <button className="edit" onClick={edit}>Edit</button>
          </td>
          <td className="button">
            <button className="delete" onClick={() => props.deleteHandler(props.value)}>
              Delete
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="button">
            <button className="save" onClick={() => save(props.index)}>Save</button>
          </td>
          <td></td>
        </>
      )}
    </tr>
  );
};

export default Row;
