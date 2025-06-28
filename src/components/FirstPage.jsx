function FirstPage({
  register,
  errors,
}) {
  return (
    <>
      <div>
        <label for="name">
          We know you're a bonafide Ajala. But what do we call you on this
          expenditure?
        </label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          {...register("name", {
            required: "Please enter your Name",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label for="email">
          There's a lot to experience on this journey, and we want to always
          give you updates. To what address do we send the pigeon with the
          message?
        </label>
        <input
          type="email"
          placeholder="Mail"
          id="email"
          {...register("email", {
            required: "Pls type in your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label for="gender">Are you an adventurer? Or adventuress?</label>
        <select {...register("gender", { required: "Pls Pick an Option" })}>
          <option value="" disabled selected hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="error">{errors.gender.message}</p>}
      </div>
      <div>
        <label for="dob">In what year were you born to Explore?</label>
        <input
          type="date"
          {...register("dob", {
            required: "Date of birth is required",
            validate: (value) => {
              const selectedDate = new Date(value);
              const today = new Date();
              if (selectedDate > today) {
                return "Date of birth cannot be in the future";
              }
              return true;
            },
          })}
        />
        {errors.dob && <p className="error">{errors.dob.message}</p>}
      </div>
    </>
  );
}

export default FirstPage
