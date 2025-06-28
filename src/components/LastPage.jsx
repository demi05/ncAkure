function LastPage({ register, errors }) {
  return (
    <>
      <div>
        <label htmlFor="room_with_opps">
          Would you share a tent (room) with an explorer of the opposite gender?
        </label>
        <div className="radio-group">
          <label className="radio-option">
            <span className="radio-text">Yes</span>
            <input
              type="radio"
              value="yes"
              name="room_with_opps"
              {...register("room_with_opps", {
                required: "Pls Select Yes or No",
              })}
            />
          </label>
          <label className="radio-option">
            <span className="radio-text">No</span>
            <input
              type="radio"
              value="no"
              name="room_with_opps"
              {...register("room_with_opps", {
                required: "Pls Select Yes or No",
              })}
            />
          </label>
        </div>
        {errors.room_with_opps && (
          <p className="error">{errors.room_with_opps.message}</p>
        )}
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
        {errors.emergency && (
          <p className="error">{errors.emergency.message}</p>
        )}
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
        {errors.related_by && (
          <p className="error">{errors.related_by.message}</p>
        )}
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
        {errors.aob && <p className="error">{errors.aob.message}</p>}
      </div>
    </>
  );
}

export default LastPage
