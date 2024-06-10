import FormPillList2 from '../../../components/Dashboard/Forms/FormPill2/List/List'

import * as styles from './forms.module.scss'

export default function Forms() {
    return (
        <div className={styles.forms}>
            <h1 className={styles.pageHeading}>Forms</h1>
            <FormPillList2 />
        </div>
    )
}