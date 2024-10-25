/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const baseurl = "http://localhost:8080";
function App() {
  const [file, setfile] = useState("");
  const [filedata, setfiledata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get("http://localhost:8080/getfiles")
      .then((res) => {
        setfiledata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleclick = () => {
    console.log(file);
    axios
      .post(
        "http://localhost:8080/upload",
        { file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        getdatafromdb();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdatafromdb();
  }, []);

  return (
    <>
      <input
        onChange={(e) => setfile(e.target.files[0])}
        type="file"
        name="file"
      />
      <button onClick={handleclick}>Upload</button>

      <h1>Uploaded Files</h1>
      {filedata.map((item, index) => {
        return (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 200px)" }}
          >
            <img
              src={baseurl + "/" + item.filename}
              alt={item.filename}
              height={300}
              width={300}
            />
          </div>
        );
      })}
    </>
  );
}

export default App;
