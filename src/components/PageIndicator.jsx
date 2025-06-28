function PageIndicator({totalPages, currentPage, setCurrentPage}) {
    return (
      <div className="page-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentPage === index ? "active" : ""}`}
            // onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    );
}

export default PageIndicator
