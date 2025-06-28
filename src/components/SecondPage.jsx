function SecondPage({
  register,
  toggleDropdown,
  selectedLC,
  locations,
  isOpen,
  handleSelect,
  errors,
}) {
  return (
    <>
      <div>
        <label htmlFor="lc" className="block mb-1 font-medium">
          Where do you call home?
        </label>

        <input
          type="hidden"
          {...register("lc", { required: "Pls Pick an Option" })}
        />

        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full mb-11 text-left border dropdown-button border-[#E28B3F] bg-[#E28B3F] text-white font-medium shadow-[5px_5px_0_0_#000]"
          >
            {selectedLC || "LC"}
          </button>

          {isOpen && (
            <ul className="absolute z-10 mt-6 w-full border border-[#E28B3F] rounded bg-[#E28B3F] shadow-[5px_5px_0_0_#000]">
              {locations.map((loc, index) => (
                <li
                  key={loc}
                  onClick={() => handleSelect(loc.toLowerCase())}
                  className={`list text-white cursor-pointer hover:bg-[#d97c2e] ${
                    index !== locations.length - 1
                      ? "border-b border-black"
                      : ""
                  }`}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {errors.lc && <p className="text-red-600 mt-1">{errors.lc.message}</p>}
      </div>
      <div>
        <label for="year_joined">
          In what year did your journeyings begin?
        </label>
        <input
          type="text"
          placeholder="Year you Joined AIESEC"
          id="year_joined"
          {...register("year_joined", {
            required: "Please enter the year you joined AIESEC",
          })}
        />
        {errors.year_joined && (
          <p className="error">{errors.year_joined.message}</p>
        )}
      </div>
      <div>
        <label for="role">
          Other than being an Ajala, what else do you do?
        </label>
        <input
          type="text"
          placeholder="Role"
          id="role"
          {...register("role", {
            required: "Please state your role",
          })}
        />
        {errors.role && <p className="error">{errors.role.message}</p>}
      </div>
      <div>
        <label for="first_time">
          Is this your first time on the road? Or are you an experienced
          voyager?
        </label>
        <input
          type="text"
          placeholder="First Conference Experience?"
          id="first_time"
          {...register("first_time", {
            required: "Is this your First Conference?",
          })}
        />
        {errors.first_time && (
          <p className="error">{errors.first_time.message}</p>
        )}
      </div>
    </>
  );
}

export default SecondPage;
