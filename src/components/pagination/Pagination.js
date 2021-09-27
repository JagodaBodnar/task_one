import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  StyledPageNumber,
  StyledPagination,
  StyledLink,
  StyledNextIcon,
  StyledPrevIcon,
  StyledPaginationDots,
} from "./PaginationStyles";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [paginationDisplay, setPaginationDisplay] = useState([]);
  const pageNumbers = [];
  const paginationDisplayArray = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const setPaginationVisibility = () => {
    for (let i = currentPage; i < currentPage + 1; i++) {
      console.log(currentPage, paginationDisplayArray);
      if (pageNumbers.length < 6) {
        paginationDisplayArray.push(...pageNumbers);
      } else {
        if (currentPage === 1) {
          paginationDisplayArray.push(
            i,
            i + 1,
            i + 2,
            0,
            ...pageNumbers.slice(-3)
          );
        } else if (currentPage < pageNumbers.length - 4 && currentPage > 1) {
          paginationDisplayArray.push(
            i - 1,
            i,
            i + 1,
            0,
            ...pageNumbers.slice(-3)
          );
        } else if (currentPage < pageNumbers.length - 3 && currentPage > 1) {
          paginationDisplayArray.push(
            currentPage,
            currentPage + 1,
            currentPage + 2,
            currentPage + 3
          );
        } else if (currentPage >= Math.ceil(pageNumbers.length / 2)) {
          paginationDisplayArray.push(...pageNumbers.slice(-4));
        }
      }
      console.log(currentPage, pageNumbers.length, paginationDisplayArray);
    }
    setPaginationDisplay([...paginationDisplayArray]);
  };

  useEffect(() => setPaginationVisibility(), [paginate]);

  return (
    <>
      <StyledPagination>
        <StyledPageNumber
          onClick={() =>
            currentPage > 1 ? paginate(currentPage - 1) : paginate(currentPage)
          }
        >
          <StyledLink>
            <StyledPrevIcon />
          </StyledLink>
        </StyledPageNumber>
        {paginationDisplay.map((page) =>
          page === 0 ? (
            <StyledPaginationDots>...</StyledPaginationDots>
          ) : (
            <StyledPageNumber
              key={page}
              style={
                currentPage === page
                  ? {
                      backgroundColor: "#EEF1F5",
                    }
                  : { backgroundColor: "#FFF" }
              }
            >
              <StyledLink
                onClick={() => page !== 0 && paginate(page)}
                href="!#"
              >
                {page}
              </StyledLink>
            </StyledPageNumber>
          )
        )}
        <StyledPageNumber
          onClick={() => {
            currentPage < pageNumbers.length
              ? paginate(currentPage + 1)
              : paginate(currentPage);
          }}
        >
          <StyledLink>
            <StyledNextIcon />
          </StyledLink>
        </StyledPageNumber>
      </StyledPagination>
    </>
  );
};
export default Pagination;
