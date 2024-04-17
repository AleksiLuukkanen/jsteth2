import React, { useState } from "react";

const UrlPilkkominen = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlObject = new URL(url);
    setData({
      host_nimi: urlObject.hostname,
      port: urlObject.port,
      pathname: urlObject.pathname,
      search: urlObject.search,
      hash: urlObject.hash,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Syötä URL" />
      <button type="submit">Pilko URL</button>
      <table>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default UrlPilkkominen;