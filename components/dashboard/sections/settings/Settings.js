import React, { useState } from "react";
import { Link } from "@material-ui/core";
import { useWindowDimensions } from "../../../../utils/windowUtils";

import styles from "./Settings.module.scss";
import AccountOverview from "./sections/AccountOverview";
import EditProfile from "./sections/EditProfile";

function Settings() {
  const [menu, setMenu] = useState("AccountOverview");
  const { width } = useWindowDimensions();

  // Function to render different menu screens
  const renderMenu = (value) => {
    switch (value) {
      case "AccountOverview":
        return <AccountOverview />;
      case "EditProfile":
        return <EditProfile />;
      // case "SETTINGS":
      //   return <Settings />;
      default:
        return null;
    }
  };

  const changeMenu = (screen) => setMenu(screen);

  const activeLinkStyle = {
    borderLeft: "1px solid #FD5457",
    color: "#FD5457",
  };

  return (
    <>
      {/* {width < 768 ? (
        <SidebarOverlay menu={menu} activeLinkStyle={activeLinkStyle} />
      ) : null} */}
      <div className={styles.settings__main}>
        {width > 768 ? (
          <div className={styles.settings__sidebar}>
            <div className={styles.sidebar__container}>
              <div className={styles.sidebar__image__container}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="profile"
                  className={styles.sidebar__image}
                />
              </div>
              <ul className={styles.sidebar__list}>
                <li
                  className={styles.sidebar__item}
                  style={menu === "AccountOverview" ? activeLinkStyle : null}
                  onClick={() => changeMenu("AccountOverview")}
                >
                  Account Overview
                </li>
                <li
                  className={styles.sidebar__item}
                  style={menu === "EditProfile" ? activeLinkStyle : null}
                  onClick={() => changeMenu("EditProfile")}
                >
                  Edit Profile
                </li>
                <li className={styles.sidebar__item}>Change Password</li>
                <li className={styles.sidebar__item}>Transactions</li>
                <li className={styles.sidebar__item}>Support</li>
                <li className={styles.sidebar__item}>Privacy and Terms</li>
                <li className={styles.sidebar__item}>About</li>
              </ul>
            </div>
          </div>
        ) : null}
        <div className={styles.settings__content}>{renderMenu(menu)}</div>
      </div>
    </>
  );
}

function SidebarOverlay({ menu, activeLinkStyle }) {
  return (
    <div className={styles.settings__sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__image__container}>
          <img
            src="https://via.placeholder.com/200x200"
            alt="profile"
            className={styles.sidebar__image}
          />
        </div>
        <ul className={styles.sidebar__list}>
          <li
            className={styles.sidebar__item}
            style={menu === "AccountOverview" ? activeLinkStyle : null}
            onClick={() => changeMenu("AccountOverview")}
          >
            Account Overview12
          </li>
          <li
            className={styles.sidebar__item}
            style={menu === "EditProfile" ? activeLinkStyle : null}
            onClick={() => changeMenu("EditProfile")}
          >
            Edit Profile
          </li>
          <li className={styles.sidebar__item}>Change Password</li>
          <li className={styles.sidebar__item}>Transactions</li>
          <li className={styles.sidebar__item}>Support</li>
          <li className={styles.sidebar__item}>Privacy and Terms</li>
          <li className={styles.sidebar__item}>About</li>
        </ul>
      </div>
    </div>
  );
}
export default Settings;
