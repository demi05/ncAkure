import { useState } from "react";
import { useForm } from "react-hook-form";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import LastPage from "./LastPage";
import NavigationButton from "./NavigationButton";
import PageIndicator from "./PageIndicator";
import { useNavigate } from "react-router-dom";
import { submitForm } from "./api/SubmitForm";

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
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [selectedLC, setSelectedLC] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const locations = [
    "Abeokuta",
    "Abuja",
    "Akure",
    "Benin",
    "Benue",
    "Calabar",
    "Enugu",
    "Ibadan",
    "Ife",
    "Ilorin",
    "Jos",
    "Kano",
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
    //  fields to validate for each page

    const pageValidations = [
      ["name", "email", "gender", "dob"],
      ["lc", "year_joined", "role", "first_time"],
      ["expect", "social", "allergies", "antidote"],
      ["room_with_opps", "emergency", "related_by", "aob"]
    ];

    if (currentPage < totalPages - 1) {
      if (await trigger(pageValidations[currentPage])) {
        setCurrentPage(currentPage + 1);
      }
    } 
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onSubmit = async (data) => {
    console.log("Form data before submission:", data);
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitForm(data);

      reset();
      setCurrentPage(0);
      navigate("/registration-complete");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error.message || "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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

      {submitError && <div className="error-message">{submitError}</div>}

      {currentPage === 2 && <ThirdPage register={register} errors={errors} />}
      {currentPage === 3 && <LastPage register={register} errors={errors} />}
      <PageIndicator
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NavigationButton
        currentPage={currentPage}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isSubmitting={isSubmitting}
      />
    </form>
  );
}

export default Form;
