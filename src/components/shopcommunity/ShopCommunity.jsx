import './shopcommunity.css';
export default function ShopCommunity() {
  return (
    <>
      <section className="community">
        <div className="container">
          <div className="community__content">
            <h3 className="community__title">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </h3>
            <div className="community__desc">
              <span>
                Type your email down below and be young wild generation
              </span>
            </div>
            <form>
              <label>
                Email:
                <input type="text" />
              </label>
              <input
                type="submit"
                value="Submit"
                placeholder="Add your email here"
                className="input"
              />
              <button className="input__btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
