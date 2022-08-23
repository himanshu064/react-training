import React, { useEffect, useState } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./Firebase";
import { v4 } from "uuid";
const UploadImage = () => {
  const [image, setImage] = useState(null);
  const ImageUrl = ref(storage, "images/");
  const HandleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const [imageList, setImageList] = useState([]);
  const SubmitImage = (event) => {
    event.preventDefault();
    if (image === null) return;
    const ImageFolder = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(ImageFolder, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };
  useEffect(() => {
    listAll(ImageUrl).then((response) => {
      const { items } = response;
      items.map((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prevList) => [...prevList, url]);
        });
      });
    });
  }, []);
  return (
    <>
      <form className="p-3" onSubmit={SubmitImage}>
        <div className="mb-3">
          <label for="formFile" className="form-label">
            Upload Image
          </label>
          <input className="form-control" type="file" onChange={HandleChange} />
        </div>
        <button className="btn btn-primary" type="submit">
          upload Image
        </button>
      </form>
      {imageList.map((images) => {
        return (
          <>
            <img
              src={images}
              alt="userImage"
              width="300px"
              height="300px"
            ></img>
          </>
        );
      })}
    </>
  );
};
export default UploadImage;
