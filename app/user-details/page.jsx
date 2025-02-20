import React from "react";
import "./user-details.css";
import Sidebar from "../helpers/Sidebar";
import Image from "next/image";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

const UserDetails = () => {
  return (
    <div className='row'>
      <Sidebar />
      <div className='right_dash col'>
        <div className='coach'>
          <div className='coaches_heading'>
            <h2>Coaches</h2>
          </div>
          <Link href='/coaches' className='back-btn'>
            <MdOutlineArrowBackIosNew /> User Details
          </Link>
          <div className='profile'>
            <Image
              src='/images/Ellipse.png'
              alt='Coach Image'
              className='profile-img'
              width={100}
              height={100}
            />
            <div>
              <h3>Isaac Butler</h3>
              <p>Professional Coach</p>
            </div>
          </div>
          <div className='details'>
            <h4>Personal Details</h4>
            <table className='details-table'>
              <tbody className='seco'>
                <tr>
                  <td>
                    <strong>Email Address:</strong>
                  </td>
                  <td>isaacbutler@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone Number:</strong>
                  </td>
                  <td>+223 545 9887</td>
                </tr>
                <tr>
                  <td>
                    <strong>Location:</strong>
                  </td>
                  <td>United States</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <strong>Age:</strong>
                  </td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sex:</strong>
                  </td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>
                    <strong>Interests:</strong>
                  </td>
                  <td>
                    <span className='tag'>Body Composition</span>
                    <span className='tag'>Muscular Fitness</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='details'>
            <h4>Experience Details</h4>
            <table className='details-table'>
              <tbody className='seco'>
                <tr>
                  <td>
                    <strong>Location:</strong>
                  </td>
                  <td>United States</td>
                </tr>

                <tr>
                  <td>
                    <strong>Age:</strong>
                  </td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sex:</strong>
                  </td>
                  <td>Male</td>
                </tr>
              </tbody>
              <tbody></tbody>
            </table>
          </div>

          <div className='videos'>
            <h4>Videos</h4>
            <div className='inner_videos'>
              {" "}
              {/* Fix className */}
              <Image
                src='/images/coach1.png'
                alt='Video'
                width={100}
                height={100}
              />
              <Image
                src='/images/Mask Group.png'
                width={100}
                height={100}
                alt='Mask Group'
              />
              <Image
                src='/images/Mask Group2.png'
                width={100}
                height={100}
                alt='Mask Group2'
              />
              <Image
                src='/images/Mask Group3.png'
                width={100}
                height={100}
                alt='Mask Group3'
              />
              <Image
                src='/images/Mask Group4.png'
                width={100}
                height={100}
                alt='Mask Group4'
              />
              <Image
                src='/images/Mask Group5.png'
                width={100}
                height={100}
                alt='Mask Group5'
              />
            </div>
          </div>
          <div className='certified'>
            <h4>Certificate</h4>
            <Image
              src={"/images/cerified.png"}
              alt='cerified'
              width={100}
              height={100}
              style={{ marginTop: "20px", height: "200px", width: "150px" }}
            />
          </div>

          <div className='social-links'>
            <h4>Social Media Accounts</h4>
            <a href='https://twitter.com/profile'>
              <Image
                src='/images/twitter.png'
                alt='twitter'
                width={50}
                height={50}
              />
              https://twitter.com/profile
            </a>
            <a href='https://facebook.com/profile'>
              <Image
                src='/images/fb.png'
                alt='facebook'
                width={50}
                height={50}
              />
              https://facebook.com/profile
            </a>
            <a href='https://instagram.com/profile'>
              <Image
                src='/images/insta.png'
                alt='instagram'
                width={50}
                height={50}
              />
              https://instagram.com/profile
            </a>
            <a href='https://tiktok.com/profile'>
              <Image
                src='/images/tiktok.png'
                alt='TikTok'
                width={50}
                height={50}
              />
              https://tiktok.com/profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
