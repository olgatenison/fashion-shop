import './community.css';

export default function Community() {
  return (
    <>
      <section className="community">
        <div className="community__content">
          <h3 className="community__title">
            JOIN SHOPPING COMMUNITY TO <br />
            GET MONTHLY PROMO
          </h3>
          <div className="community__desc">
            Type your email down below and be young wild generation
          </div>
          <form className="form">
            <label>
              <input
                className="input_email"
                type="text"
                placeholder="Add your email here"
              />
            </label>
            <button className="input_btn" type="submit">
              SEND
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
