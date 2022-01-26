import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagenation from "../../components/pagenation/pagenation";

const PagenationCotainer = () => {
  const lastPage = useSelector(({ products }) => products.lastPage);
  const currentIndex = Math.floor((Number(useParams().page || "1") - 1) / 5);
  const pageList = [...Array(5).fill(Number(currentIndex * 5))].map(
    (v, i) => v + i + 1
  );

  return <Pagenation pageList={pageList} lastPage={lastPage} />;
};

export default PagenationCotainer;
