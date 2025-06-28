function ThirdPage({ register, errors }) {
  return (
    <>
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
        {errors.expect && <p className="error">{errors.expect.message}</p>}
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
        {errors.social && <p className="error">{errors.social.message}</p>}
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
        {errors.allergies && (
          <p className="error">{errors.allergies.message}</p>
        )}
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
        {errors.antidote && <p className="error">{errors.antidote.message}</p>}
      </div>
    </>
  );
}

export default ThirdPage;
