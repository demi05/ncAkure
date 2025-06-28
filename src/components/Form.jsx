import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLC, setSelectedLC] = useState("");

  const locations = [
    "Abeokuta",
    "Abuja",
    "Akure",
    "Benin",
    "Calabar",
    "Enugu",
    "Ibadan",
    "Ife",
    "Ilorin",
    "Jos",
    "Lagos",
    "Port-Harcourt",
    "EST",
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    setSelectedLC(value);
    setValue("lc", value, { shouldValidate: true });
    setIsOpen(false);
  };
  return (
    <form>
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
      </div>
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
      </div>
      <div>
        <label for="expect">
          You've experienced it all, but what would make a magical experience
          this time?
        </label>
        <input
          type="text"
          placeholder="Expectations"
          id="expect"
          {...register("expect", {
            required: "Please state your expectations",
          })}
        />
      </div>
      <div>
        <label for="social">What do they call you in the digital sphere?</label>
        <input
          type="text"
          placeholder="Social Media Handle"
          id="social"
          {...register("social", {
            required: "Please type in your social media handle",
          })}
        />
      </div>
      <div>
        <label for="allergies">
          Before we set off on this journey, is there anything your body rebels
          against?
        </label>
        <input
          type="text"
          placeholder="Allergies"
          id="allergies"
          {...register("allergies", {
            required: "Do you have any Allergies?",
          })}
        />
      </div>
      <div>
        <label for="antidote">What's the balm that heals this ache?</label>
        <input
          type="text"
          placeholder="Antidote"
          id="antidote"
          {...register("antidote", {
            required: "What is the antidote",
          })}
        />
      </div>
      <div>
        <label for="room_with_opps">
          Would you share a tent (room) with an explorer of the opposite gender?
        </label>
        <label>
          <input
            type="checkbox"
            value="yes"
            id="room_with_opps"
            {...register("room_with_opps", {
              required: "Pls Select Yes or No",
            })}
          />
          Yes
        </label>
        <label>
          <input
            type="checkbox"
            value="no"
            id="room_with_opps"
            {...register("room_with_opps", {
              required: "Pls Select Yes or No",
            })}
          />
          No
        </label>
      </div>
      <div>
        <label for="emergency">Who do we call if things head south?</label>
        <input
          type="text"
          placeholder="Emergency Contact"
          id="emergency"
          {...register("emergency", {
            required: "What is your emergency contact",
          })}
        />
      </div>
      <div>
        <label for="related_by">
          We know you're a bonafide Ajala. But what do we call you on this
          expenditure?
        </label>
        <input
          type="text"
          placeholder="Relationship with Emergency Contact"
          id="related_by"
          {...register("related_by", {
            required: "How are you Related",
          })}
        />
      </div>
      <div>
        <label for="aob">
          Is there anything else you'll like to say to us?
        </label>
        <input
          type="text"
          placeholder="Any Special Instructions"
          id="aob"
          {...register("aob", {
            required: "Do you have any special instructions?",
          })}
        />
      </div>
    </form>
  );
}

export default Form;
