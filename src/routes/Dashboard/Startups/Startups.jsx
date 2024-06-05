import React, { useState } from "react";
import { Input, Dropdown } from "antd";
import * as styles from "./Startups.module.scss";
import StartupCard from "../../../components/Startups/StartupCard/StartupCard";

const exampleData = [
  {
    id: 1,
    img: "img",
    name: "Startup Name Startup Name",
    tags: ["Climate Tech", "EV", "Fin-Tech", "Climate Tech", "EV", "tagC"],
  },
  {
    id: 2,
    img: "img",
    name: "name2",
    tags: ["tagA", "tagB", "tagC"],
  },
  {
    id: 3,
    img: "img",
    name: "name3",
    tags: ["tagA", "tagB", "tagC"],
  },
  {
    id: 4,
    img: "img",
    name: "name3",
    tags: ["tagA", "tagB", "tagC"],
  },
  {
    id: 5,
    img: "img",
    name: "name3",
    tags: ["tagA", "tagB", "tagC"],
  },
];

const FilterSVG = () => {
  <svg
    width="31"
    height="18"
    viewBox="0 0 31 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.5781 4.17188H2.42188C2.03648 4.17188 1.66687 4.01878 1.39436 3.74626C1.12185 3.47375 0.96875 3.10414 0.96875 2.71875C0.96875 2.33336 1.12185 1.96375 1.39436 1.69124C1.66687 1.41872 2.03648 1.26563 2.42188 1.26562H28.5781C28.9635 1.26562 29.3331 1.41872 29.6056 1.69124C29.8782 1.96375 30.0312 2.33336 30.0312 2.71875C30.0312 3.10414 29.8782 3.47375 29.6056 3.74626C29.3331 4.01878 28.9635 4.17188 28.5781 4.17188ZM23.7344 10.9531H7.26562C6.88023 10.9531 6.51062 10.8 6.23811 10.5275C5.9656 10.255 5.8125 9.88539 5.8125 9.5C5.8125 9.11461 5.9656 8.745 6.23811 8.47249C6.51062 8.19997 6.88023 8.04688 7.26562 8.04688H23.7344C24.1198 8.04688 24.4894 8.19997 24.7619 8.47249C25.0344 8.745 25.1875 9.11461 25.1875 9.5C25.1875 9.88539 25.0344 10.255 24.7619 10.5275C24.4894 10.8 24.1198 10.9531 23.7344 10.9531ZM17.9219 17.7344H13.0781C12.6927 17.7344 12.3231 17.5813 12.0506 17.3088C11.7781 17.0363 11.625 16.6666 11.625 16.2812C11.625 15.8959 11.7781 15.5262 12.0506 15.2537C12.3231 14.9812 12.6927 14.8281 13.0781 14.8281H17.9219C18.3073 14.8281 18.6769 14.9812 18.9494 15.2537C19.2219 15.5262 19.375 15.8959 19.375 16.2812C19.375 16.6666 19.2219 17.0363 18.9494 17.3088C18.6769 17.5813 18.3073 17.7344 17.9219 17.7344Z"
      fill="black"
    />
  </svg>;
};

const Startups = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.startups}>
      <div className={styles.heading}>
        List of <span>Startups:</span>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <Input
            className={styles.searchBarInput}
            placeholder="Placeholder Text..."
            onChange={(e) => setValue(e.target.value)}
            prefix={
              <svg
                style={{ margin: "0.5rem" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.49928 1.91687e-08C7.14387 0.000115492 5.80814 0.324364 4.60353 0.945694C3.39893 1.56702 2.36037 2.46742 1.57451 3.57175C0.788656 4.67609 0.278287 5.95235 0.0859852 7.29404C-0.106316 8.63574 0.0250263 10.004 0.469055 11.2846C0.913084 12.5652 1.65692 13.7211 2.63851 14.6557C3.6201 15.5904 4.81098 16.2768 6.11179 16.6576C7.4126 17.0384 8.78562 17.1026 10.1163 16.8449C11.447 16.5872 12.6967 16.015 13.7613 15.176L17.4133 18.828C17.6019 19.0102 17.8545 19.111 18.1167 19.1087C18.3789 19.1064 18.6297 19.0012 18.8151 18.8158C19.0005 18.6304 19.1057 18.3796 19.108 18.1174C19.1102 17.8552 19.0094 17.6026 18.8273 17.414L15.1753 13.762C16.1633 12.5086 16.7784 11.0024 16.9504 9.41573C17.1223 7.82905 16.8441 6.22602 16.1475 4.79009C15.4509 3.35417 14.3642 2.14336 13.0116 1.29623C11.659 0.449106 10.0952 -0.000107143 8.49928 1.91687e-08ZM1.99928 8.5C1.99928 6.77609 2.6841 5.12279 3.90308 3.90381C5.12207 2.68482 6.77537 2 8.49928 2C10.2232 2 11.8765 2.68482 13.0955 3.90381C14.3145 5.12279 14.9993 6.77609 14.9993 8.5C14.9993 10.2239 14.3145 11.8772 13.0955 13.0962C11.8765 14.3152 10.2232 15 8.49928 15C6.77537 15 5.12207 14.3152 3.90308 13.0962C2.6841 11.8772 1.99928 10.2239 1.99928 8.5Z"
                  fill="#959595"
                />
              </svg>
            }
          ></Input>
        </div>
        <div className={styles.filter}></div>
        <div className={styles.tags}></div>
      </div>
      <h2>Showing results for {value ? value : ".."}</h2>
      <div className={styles.startupList}>
        {exampleData
          .filter((item) => {
            if (item.name.includes(value)) return true;
          })
          .map((startup) => (
            <StartupCard key={startup.id} {...startup} />
          ))}
      </div>
    </div>
  );
};

export default Startups;
