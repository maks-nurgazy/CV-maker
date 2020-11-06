import { useEffect, useState } from 'react'

export default (initialVal) => {
  const [file, setFile] = useState(initialVal);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };


  useEffect(()=>{
    if(file.name!==undefined){
      let reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  },[file]);


  return [file, handleChange, preview];
};
