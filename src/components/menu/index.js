import { useDispatch, useSelector } from "react-redux";
import cx from 'classnames';

import { M_ITEMS } from "@/constants";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEraser, faRotateLeft, faRotateRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import styles from './index.module.css';

const Menu = () => {
    const dispatch = useDispatch()

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))
    }

    return (
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === M_ITEMS.PENCIL})} onClick={() => handleMenuClick(M_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
            </div>
            <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === M_ITEMS.ERASER})} onClick={() => handleMenuClick(M_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faArrowDown} className={styles.icon} />
            </div>
        </div>
    )
}

export default Menu;