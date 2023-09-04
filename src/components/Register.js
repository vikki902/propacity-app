import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="navbar1">
        <div className="logo1">
          <img
            src="https://s3-alpha-sig.figma.com/img/b92c/14b7/83fd501f7b7d0ec49be8a0e59fc3cce9?Expires=1694390400&Signature=V09WEXPWgSPOoxX9oRATzBOZeNShPZLv6UWrr1KAVRo9l5ptIgRNhBE4a~RIk6S~Lnd94FzSPx6CDz6OSFgjMwa5hwaxz7Wix7JtTorXm648sR~61KH50dG0wzuHUZ~4RtDYBogyQ2ZDS-R1DInB4PW1yIyICAwWizsNdWjOf7A5dIiisKtccj2mEYHAed8wBT74v7QVjPJ2Xd5O8rxowZfIf7tKTlOKABxd2ZRrBr7ouAVEfWOyEuVXhPHZvCs~uoXfaLBpYV5uMGWZ1RVbXUb9VRdkVSibsxZLONqLvGSWioWX~b2V7wogyNcuSpOJCgsUWe7C4FmWHkdY-AUdUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Logo"
          />
        </div>
        <div className="reg-button">
          <button className="btn btn-outline-light">+91-8197883993</button>
        </div>
      </div>

      <div className="container-fluid my-container">
        <div className="row">
          <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-6 col-img">
              <img
                src="https://s3-alpha-sig.figma.com/img/f905/cdff/951fa7817e4ddc614c1221c44b1ae602?Expires=1694390400&Signature=X0hzlc74bBz8s5UW35GcmmnR0uAvz8hamBHPt3Pp17Xp~cvJWzIsxy3xrF0yq3uevSoYYSSozSW48MVNF2ee6~xWrtZiuOXDq-SbU2-n7CbLjBopqckwR4NB09H9whPpWUTuyY8GBteQ6tbRd9985iR1zeJHV41yu-CS6~UzLzg5dt2~47vdfwJk1RZXufBfxXTxTI40T8gYZn~RgLYSX0vMMXTl0F1hxZJv2q9njhF7YZ04O0e6NIQu9MT7pNjvc3GJ41WtOgh6ziIbm8KP~qpArjwbwHbKfGSJwN-fdPOSJ~p0~WW63NjQ02ar-FIVY2XGCWjVr0M-U~2zUGM5Sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Logo"
              />
            </div>
            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 col-desc">
              <div className="reg">
                <p>
                  Thanks for <br /> registering!
                </p>
              </div>
              <div className="reg-des">
                <p>Our experts will get in touch with you shortly</p>
              </div>

              <div className="button1">
                <button>Back to Homepage</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" disclamer">

        <span className="heading-disclamer">Disclamer</span>
        <p className="para-disclamer">This is not the official website of developer, 
          it belongs to the authorised channel partner for information & marketing purposes only.
           All rights for logo & images are reserved by the developer.</p>

           <p className="para-disclamer">Digital Media planned by <span className="propacity">Propacity </span></p>


      </div>
    </>
  );
};

export default Register;
