import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Pagenation from "../../components/pagenation/pagenation";
import qs from "qs";

const PagenationCotainer = () => {
  const query = qs.parse(useLocation().search, { ignoreQueryPrefix: true });
  const lastPage = useSelector(({ products }) => products.lastPage);
  const currentIndex = Math.floor((Number(query.page || "1") - 1) / 5);
  const pageList = [...Array(5).fill(Number(currentIndex * 5))].map(
    (v, i) => v + i + 1
  );

  const navigate = useNavigate();

  const onPageClick = (e) => {
    const page = Number(e.target.innerText);
    if (page && page <= lastPage) {
      navigate(`/?page=${page}`);
    }
  };

  return (
    <Pagenation
      pageList={pageList}
      lastPage={lastPage}
      onPageClick={onPageClick}
    />
  );
};

export default PagenationCotainer;
