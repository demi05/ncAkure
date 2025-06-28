import { useState } from "react";
import { useForm } from "react-hook-form";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import LastPage from "./LastPage";
import NavigationButton from "./NavigationButton";
import PageIndicator from "./PageIndicator";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 4;
    const navigate = useNavigate()

  const [selectedLC, setSelectedLC] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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

  const handleNext = async () => {
    
    let isValid = true;

    //  fields to validate for each page
    const pageValidations = [
      ["name", "email", "gender", "dob"],
      ["lc", "year_joined", "role", "first_time"],
      ["expect", "social", "allergies", "antidote"],
      ["room_with_opps", "emergency", "related_by", "aob"],
    ];

    if (currentPage < totalPages - 1) {
      isValid = await trigger(pageValidations[currentPage]);
    }

    if (isValid && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
      setCurrentPage(0);
      navigate("/registration-complete");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {currentPage === 0 && <FirstPage register={register} errors={errors} />}
      {currentPage === 1 && (
        <SecondPage
          register={register}
          toggleDropdown={toggleDropdown}
          selectedLC={selectedLC}
          locations={locations}
          isOpen={isOpen}
          handleSelect={handleSelect}
          errors={errors}
        />
      )}
      {currentPage === 2 && <ThirdPage register={register} errors={errors} />}
          {currentPage === 3 && <LastPage register={register} errors={errors} />}
          <PageIndicator totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <NavigationButton
        currentPage={currentPage}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </form>
  );
}

export default Form;
