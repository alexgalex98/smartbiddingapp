import React, { Fragment, useState } from "react";
import axios from "axios";

export const FileUpload = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      console.log(filePath, "PATH");
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.dat.msg);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          {/* <div className="input-group mb-4">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />

          <button
            className="btn btn-primary btn-block mt-4"
            type="button"
            id="inputGroupFileAddon04"
          >
            Button
          </button>
        </div> */}
        </div>
        <div className="custom-file mb-4">
          <input
            className="custom-file-input"
            type="file"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <button
          className="btn btn-primary btn-block mt-4"
          type="submit"
          id="inputGroupFileAddon04"
          value="Upload"
        >
          Button
        </button>
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img
              style={{ width: "100%" }}
              src={uploadedFile.filePath}
              alt=""
            ></img>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
