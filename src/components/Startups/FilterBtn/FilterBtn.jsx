import React, { useEffect, useRef, useState } from "react";
import { Button, Menu, Dropdown } from "antd";
import * as styles from "./FilterBtn.module.scss";

const FilterSVG = () => {
  return (
    <svg
      width="34"
      height="21"
      viewBox="0 0 34 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5781 7.17188H2.42188C2.03648 7.17188 1.66687 7.01878 1.39436 6.74626C1.12185 6.47375 0.96875 6.10414 0.96875 5.71875C0.96875 5.33336 1.12185 4.96375 1.39436 4.69124C1.66687 4.41872 2.03648 4.26563 2.42188 4.26562H28.5781C28.9635 4.26562 29.3331 4.41872 29.6056 4.69124C29.8782 4.96375 30.0312 5.33336 30.0312 5.71875C30.0312 6.10414 29.8782 6.47375 29.6056 6.74626C29.3331 7.01878 28.9635 7.17188 28.5781 7.17188ZM23.7344 13.9531H7.26562C6.88023 13.9531 6.51062 13.8 6.23811 13.5275C5.9656 13.255 5.8125 12.8854 5.8125 12.5C5.8125 12.1146 5.9656 11.745 6.23811 11.4725C6.51062 11.2 6.88023 11.0469 7.26562 11.0469H23.7344C24.1198 11.0469 24.4894 11.2 24.7619 11.4725C25.0344 11.745 25.1875 12.1146 25.1875 12.5C25.1875 12.8854 25.0344 13.255 24.7619 13.5275C24.4894 13.8 24.1198 13.9531 23.7344 13.9531ZM17.9219 20.7344H13.0781C12.6927 20.7344 12.3231 20.5813 12.0506 20.3088C11.7781 20.0363 11.625 19.6666 11.625 19.2812C11.625 18.8959 11.7781 18.5262 12.0506 18.2537C12.3231 17.9812 12.6927 17.8281 13.0781 17.8281H17.9219C18.3073 17.8281 18.6769 17.9812 18.9494 18.2537C19.2219 18.5262 19.375 18.8959 19.375 19.2812C19.375 19.6666 19.2219 20.0363 18.9494 20.3088C18.6769 20.5813 18.3073 20.7344 17.9219 20.7344Z"
        fill="black"
      />
      <circle cx="29" cy="5" r="4.5" fill="#FB723D" stroke="white" />
    </svg>
  );
};

const MenuSVG = () => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "1rem" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.568189 7.27729C0.352111 7.06095 0.230742 6.76768 0.230742 6.46191C0.230742 6.15614 0.352111 5.86287 0.568189 5.64652L4.91896 1.29421C5.13541 1.07786 5.42895 0.956352 5.735 0.956425C6.04104 0.956496 6.33453 1.07814 6.55088 1.2946C6.76724 1.51106 6.88874 1.80459 6.88867 2.11064C6.8886 2.41669 6.76695 2.71017 6.5505 2.92652L3.01511 6.46191L6.5505 9.99729C6.76078 10.2148 6.87722 10.5062 6.87474 10.8088C6.87225 11.1113 6.75104 11.4008 6.53721 11.6148C6.32338 11.8288 6.03403 11.9503 5.7315 11.9531C5.42896 11.9558 5.13744 11.8397 4.91973 11.6296L0.567419 7.27806L0.568189 7.27729Z"
        fill="#5A5A5A"
      />
    </svg>
  );
};

const items = [
  {
    key: "1",
    icon: <MenuSVG />,
    label: "By Stage",
    children: [
      {
        key: "11",
        label: "Pre-Seed Stage",
      },
      {
        key: "12",
        label: "Seed Stage",
      },
      {
        key: "13",
        label: "Early Stage",
      },
      {
        key: "14",
        label: "Growth Stage",
      },
      {
        key: "15",
        label: "Expansion Stage",
      },
      {
        key: "16",
        label: "Exit Stage",
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const getLabelByKey = (key, items) => {
  for (const item of items) {
    if (item.key === key) {
      return item.label;
    }
    if (item.children) {
      const childLabel = getLabelByKey(key, item.children);
      if (childLabel) {
        return childLabel;
      }
    }
  }
  return null;
};

const levelKeys = getLevelKeys(items);

export default function FilterBtn({
  onClick,
  isFilterBtnActive,
  setIsFilterBtnActive,
  setSelectedStage,
}) {
  const [stateOpenKeys, setStateOpenKeys] = useState([]);
  const menuRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setIsFilterBtnActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isFilterBtnActive]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const handleMenuClick = (e) => {
    let selectedLabel = getLabelByKey(e.key, items);
    // console.log(selectedLabel);
    if (selectedLabel == "Exit Stage") selectedLabel = "";
    setSelectedStage(selectedLabel);
    setIsFilterBtnActive(false);
  };

  return (
    <>
      <div className={styles.filter}>
        <Button onClick={onClick} icon={<FilterSVG />} ref={btnRef}>
          Filter
        </Button>
        <div
          ref={menuRef}
          className={styles.filterMenu}
          style={{ display: isFilterBtnActive ? "" : "none" }}
        >
          <Menu
            mode="inline"
            items={items}
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            expandIcon={null}
            className={styles.menu}
            onClick={handleMenuClick}
          >
            {items.map((item) => (
              <Menu.SubMenu
                key={item.key}
                title={item.label}
                icon={item.icon}
                onClick={handleMenuClick}
              >
                {item.children.map((child) => (
                  <Menu.Item
                    key={child.key}
                    className={
                      stateOpenKeys === child.key ? styles.activeMenuItem : ""
                    }
                  >
                    {child.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
        </div>
      </div>
    </>
  );
}
