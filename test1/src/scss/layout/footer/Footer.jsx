import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12 g-4 ">
            <ul className={styles.list}>
              <li>
                <div>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg"
                    alt=""
                  />{" "}
                </div>
              </li>
              <li>
                <div className={styles.images}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/facebook.8291c7f7c187e8f09292cced2ed0278d.svg"
                    alt=""
                  />{" "}
                </div>
                Facebook
              </li>
              <li>
                <div className={styles.images}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/vimeo.539e4985d2c0dced329fe8bfebf273db.svg"
                    alt=""
                  />{" "}
                </div>
                Vimeo
              </li>
              <li>
                <div className={styles.images}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/youtube.bb2387598b5621f3a2e92ab928da4fe0.svg"
                    alt=""
                  />{" "}
                </div>
                YouTube
              </li>
              <li>
                <div className={styles.images}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/telegram.5acad1587076bc12320cadff0f4aa3f3.svg"
                    alt=""
                  />{" "}
                </div>
                Telegram
              </li>
              <li>
                <div className={styles.images}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/twitter.f56ce1bc9eb5120250ac80ed561cf82f.svg"
                    alt=""
                  />{" "}
                </div>
                Twitter
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12 g-4 ">
            <ul className={styles.second_list}>
              <h6>Getting started</h6>
              <li>Installation</li>
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Editor Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12 g-4 ">
            <ul className={styles.second_list}>
              <h6>Explore</h6>
              <li>Design features</li>
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Customers</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12 g-4 ">
            <ul className={styles.second_list}>
              <h6>Resources</h6>
              <li>Best practices</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Learn design</li>
              <li>Whats new</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12 g-4 ">
            <ul className={styles.second_list}>
              <h6>Resources</h6>
              <li>Best practices</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Learn design</li>
              <li>Whats new</li>
              <li>Releases</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
