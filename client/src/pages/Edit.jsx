import React from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  return <div className="container">{id}</div>;
}

export default Edit;
