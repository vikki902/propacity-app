import React from "react";
import "./Amenties.css";

import gym_img from "../assets/gym-image.png";

const Amenties = () => {
  return (
    <>
      <div className="container-fluid">
        <h5 className="amenties-title">ARANYA’S SERVICES</h5>
        <h4 className="amenties-title2">30+ PREMIUM AMENTIES</h4>

        <div class="row">
          <div class="col colum-amneties">
            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                  <i class="fa-solid fa-phone"></i>
                </td>
                <td className="amentie-data">RECEPTION</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                  6 area for receptionist serve 24/7
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                  <i class="fa-solid fa-car"></i>
                </td>
                <td className="amentie-data">PARKING</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                  Parking area with extra capacity
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                </td>
                <td className="amentie-data">SUPERMARKET</td>
              </tr>
              <tr>
                <td className="amentie-data2">5 supermarket in each block</td>
              </tr>
            </table>
          </div>

          <div class="col colum-amneties">
            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                <i class="fa-solid fa-shield"></i>
                </td>
                <td className="amentie-data">SECURITY</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                Security team with 24/7 camera system
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                <i class="fa-solid fa-people-line"></i>
                </td>
                <td className="amentie-data">CONFERENCE ROOM</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                5 conference room setup in each block
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                <i class="fa-solid fa-spa"></i>
                </td>
                <td className="amentie-data">SPA AND MASSAGE</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                Spa and Massage service for better health
                </td>
              </tr>
            </table>
          </div>

          <div class="col colum-amneties">
            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                <i class="fa-regular fa-bell"></i>
                </td>
                <td className="amentie-data">FIRE ALARM</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                Automatic fire extinguishing system
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                <i class="fa-solid fa-mattress-pillow"></i>
                </td>
                <td className="amentie-data">CONDITIONING</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                ensure ventilation and air conditioning
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td rowspan="2" className="amentie-icon">
                <i class="fa-solid fa-person-swimming"></i>
                </td>
                <td className="amentie-data">4 SEASON POOL</td>
              </tr>
              <tr>
                <td className="amentie-data2">
                5 star indoor swimming 4 seasons 
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

       
      <img
          src={gym_img}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "0px 70%",
            display:"block"
          }}
        />

    </>
  );
};

export default Amenties;
