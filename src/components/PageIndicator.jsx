function PageIndicator({totalPages, currentPage}) {
    return (
      <div className="page-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentPage === index ? "active" : ""}`}
          />
        ))}
      </div>
    );
}

export default PageIndicator
