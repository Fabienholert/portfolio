import React, { useEffect, useState } from "react";
import "./filtre.scss";

function Filtre() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
   
  }, []);

  console.log(datas);
 <div className="filtres">{datas.map()=> {
  return (<div></div>)
  }}</div>;
}

export default Filtre;
