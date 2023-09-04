import React from "react";
import "./Book.css";
import { useState } from "react";

const Book = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(data);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to Google Sheets
    fetch(
      "https://script.google.com/macros/s/AKfycbzJX65RVSglFmL1iFfO-cVm2HEjie8a7C6eJqWrVYgEN-X9uwrLLwEusetDjMKFQSlbqg/exec",
      {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )


    // Send data to the API
    fetch(
      "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    console.log("sumit button clicked")

  };


  return (
    <>
      <div className="container-fluid book-container">
        <div class="row">
          <div class="col-sm-5 col-md-6 book-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/f905/cdff/951fa7817e4ddc614c1221c44b1ae602?Expires=1694390400&Signature=X0hzlc74bBz8s5UW35GcmmnR0uAvz8hamBHPt3Pp17Xp~cvJWzIsxy3xrF0yq3uevSoYYSSozSW48MVNF2ee6~xWrtZiuOXDq-SbU2-n7CbLjBopqckwR4NB09H9whPpWUTuyY8GBteQ6tbRd9985iR1zeJHV41yu-CS6~UzLzg5dt2~47vdfwJk1RZXufBfxXTxTI40T8gYZn~RgLYSX0vMMXTl0F1hxZJv2q9njhF7YZ04O0e6NIQu9MT7pNjvc3GJ41WtOgh6ziIbm8KP~qpArjwbwHbKfGSJwN-fdPOSJ~p0~WW63NjQ02ar-FIVY2XGCWjVr0M-U~2zUGM5Sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Logo"
            />
          </div>

          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 book-form">
            <div className="cancel-icon icon-x"> </div>

            <div className=" book-section">
              <div className="book-title">
                <span>Book Site Tour</span>
              </div>

              <div className="form-book">
                <form>
                  <label className="form-lable">Name</label>
                  <br />
                  <input
                    className="input-feild icon1"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={(e) => handleChange(e)}
                  />

                  <br />

                  <label className="form-lable">Email</label>
                  <br />
                  <input
                    className="input-feild icon2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <br />

                  <label className="form-lable">Mobile</label>
                  <br />
                  <input
                    className="input-feild icon3"
                    type="number"
                    name="mobile"
                    placeholder="Mobile"
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <div className="button2">
                    <button onClick={handleSubmit} >Book Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
