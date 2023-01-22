import React from "react";
import styles from "./Navbar.module.scss";

import { BsSearch } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.logo}>
              <img
                src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg"
                alt=""
              />
              <form>
                <input type="text" placeholder="Search items" />

                <BsSearch />
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.menuright}>
              <ul>
                <li>Discover</li>
                <li className={styles.help}>Help center</li>
                <div className={styles.icon}>
                  <BsSun />
                </div>

                <button>Create</button>
                <button>Connect Wallet</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
