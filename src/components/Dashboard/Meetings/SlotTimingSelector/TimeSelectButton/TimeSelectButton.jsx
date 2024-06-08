import styles from "./timeSelectButton.module.scss";

function TimeSelectButton({ time, changeTime, dateTime}) {
  let active = (dateTime["time"]) === time;
  return (
    <button
    onClick={()=>{changeTime(time)}} 
    className={`${styles.button} ${active?styles.active:null}`} >
      {!(active) ?(<svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M10.752 18.3332C15.3544 18.3332 19.0854 14.6022 19.0854 9.99984C19.0854 5.39746 15.3544 1.6665 10.752 1.6665C6.14966 1.6665 2.4187 5.39746 2.4187 9.99984C2.4187 14.6022 6.14966 18.3332 10.752 18.3332Z"
          stroke="#A0A0A0"
          strokeWidth="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.252 7.5L9.06445 12.5L6.25195 10.2273"
          stroke="#A0A0A0"
          strokeWidth="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </svg>):(<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.752 18.3337C15.3544 18.3337 19.0854 14.6027 19.0854 10.0003C19.0854 5.39795 15.3544 1.66699 10.752 1.66699C6.14966 1.66699 2.4187 5.39795 2.4187 10.0003C2.4187 14.6027 6.14966 18.3337 10.752 18.3337Z" fill="#FB723D"/>
<path d="M15.252 7.5L9.06445 12.5L6.25195 10.2273" stroke="#FFECE5" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
</svg> )}
      <p>{time} AM</p>
    </button>
  );
}
export default TimeSelectButton;
