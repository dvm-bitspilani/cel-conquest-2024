import { useContext } from 'react';
import styles from './unauthorised.module.scss';
import { WebContext } from '../../store/website-context';
import { useNavigate } from 'react-router-dom';

const Unauthorised = () => {
    const navigate = useNavigate()
    const { glogout } = useContext(WebContext)
    return (
        <div className={styles.container}>
            <h1>401</h1>
            <h2>Unauthorised Access</h2>
            <p>Please contact the administrator for access.</p>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    glogout()
                    navigate('/')
                }}
                className={styles.logoutBtn}
            >
                Logout
            </button>
        </div>
    );
};

export default Unauthorised;