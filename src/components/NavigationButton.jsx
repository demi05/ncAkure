function NavigationButton({currentPage, totalPages, handleNext, handlePrev}) {
    return (
      <div>
        <div className="navigation-buttons">
          {currentPage > 0 && (
            <button
              type="button"
              className={`font-raleway flex items-center justify-center text-center font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-white bg-[#CF4638] border-[5px] border-black w-[30%] sm:w-[22%] md:w-[22%] lg:w-[15%] xl:w-[13%] h-[35px] shadow-[0_2px_0_0_#FAA137] `}
              onClick={handlePrev}
            >
              Previous
            </button>
          )}

          {currentPage < totalPages - 1 ? (
            <button
              type="button"
              className={`font-raleway flex items-center justify-center text-center font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-white bg-[#CF4638] border-[5px] border-black w-[30%] sm:w-[22%] md:w-[22%] lg:w-[15%] xl:w-[13%] h-[35px] shadow-[0_2px_0_0_#FAA137] `}
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className={`font-raleway flex items-center justify-center text-center font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-white bg-[#CF4638] border-[5px] border-black w-[30%] sm:w-[22%] md:w-[22%] lg:w-[15%] xl:w-[13%] h-[35px] shadow-[0_2px_0_0_#FAA137] `}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
}

export default NavigationButton
