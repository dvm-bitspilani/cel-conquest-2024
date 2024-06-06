import { useContext } from "react";
import { WebContext } from "../../../store/website-context";

import * as styles from './btn.module.scss'

export default function GoogleSignOut() {
    const { glogout } = useContext(WebContext)
    return (
        <button onClick={glogout} className={styles.btn}>Log Out</button>
    )
}