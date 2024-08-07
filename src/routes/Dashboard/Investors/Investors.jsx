import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import * as styles from "./Investors.module.scss";
import FilterBtn from "../../../components/Startups/FilterBtn/FilterBtn";
import axios from "axios";
import CoachCard from "../../../components/Coaches/CoachCard";

const Investors = () => {
  const [value, setValue] = useState("");
  const [isFilterBtnActive, setIsFilterBtnActive] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData")).tokens) {
      axios
        .get("https://portal.conquest.org.in/api/users/expert_list/", {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access
              }`,
          },
        })
        .then((res) => {
          // console.log(res.data.investment_partners)
          setListItems(res.data.investment_partners);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error in fetching data");
    }
  }, [JSON.parse(localStorage.getItem("userData")).tokens.access]);

  const handleClickFilter = (filter) => {
    setIsFilterBtnActive((e) => !e);
    setFilterActive(!!filter);
  };

  return (
    <div className={styles.coaches}>
      <div className={styles.heading}>
        List of <span>Partners:</span>
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
        <FilterBtn
          onClick={handleClickFilter}
          isFilterBtnActive={isFilterBtnActive}
          setIsFilterBtnActive={setIsFilterBtnActive}
          setSelectedStage={setSelectedFilter}
          selectedStage={selectedFilter}
          setFilterActive={setFilterActive}
        />
      </div>
      <h2>Showing results for {value ? value : ".."}</h2>
      <div className={styles.coachList}>
        {listItems
          .filter((item) => {
            const nameMatches =
              !value ||
              (item.company_name &&
                item.company_name
                  .toLowerCase()
                  .includes(value.toLowerCase().trim()));
            const tagMatches =
              !filterActive ||
              !selectedFilter ||
              (item.domain_of_expertise &&
                selectedFilter &&
                item.domain_of_expertise
                  .toLowerCase()
                  .includes(selectedFilter.toLowerCase().trim()));
            return nameMatches && tagMatches;
          })
          .map((investor) => (
            <CoachCard
              key={investor.id}
              img={investor.profile_logo}
              name={investor.company_name}
              tags={investor.type_of_partner}
              website={investor.website}
              id={investor.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Investors;
