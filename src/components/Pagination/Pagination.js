import ReactPaginate from "react-paginate";

export const Pagination = ({ totalPage ,setActivePage, activePage}) => {
  return (
    <>
      <ReactPaginate
        pageCount={totalPage}
        previousLabel="Prev"
        nextLabel="Next"
        forcePage={activePage === 1? 0 : activePage - 1}
        className="pagination justify-content-center my-5 gap-3"
        pageLinkClassName=" page-link"
        pageClassName="page-item"
        previousLinkClassName="btn btn-primary text-white"
        nextLinkClassName="btn btn-primary text-white"
        activeClassName="active"
        onPageChange={ (data) =>{
            setActivePage(data.selected + 1)

        }}
      />
    </>
  );
};
