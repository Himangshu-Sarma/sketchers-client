import { useSelector, useDispatch } from "react-redux";
import styles from "@/components/toolbox/index.module.css";
import cx from 'classnames';

import { COLORS, M_ITEMS } from "@/constants";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";

const Toolbox = () => {
    const dispatch = useDispatch();
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const { color } = useSelector((state) => state.toolbox[activeMenuItem]);

    const showColor = activeMenuItem === M_ITEMS.PENCIL;
    const showStroke = activeMenuItem === M_ITEMS.PENCIL || activeMenuItem === M_ITEMS.ERASER;

    // const showStrokeTool = activeMenuItem === M_ITEMS.PENCIL

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }))
    }

    const updateColor = (newColor) => {
        dispatch(changeColor({ item: activeMenuItem, color: newColor }))
    }

    return (
        <div className={styles.toolBoxContainer}>
            {showColor &&
                <div className={styles.toolItem}>
                    <h4 className={styles.toolText}>Color</h4>
                    
                    <div className={styles.itemContainer}>
                        <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.BLACK })}
                            style={{ backgroundColor: COLORS.BLACK }} onClick={(e) => updateColor(COLORS.BLACK)} />

                        <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.RED })}
                            style={{ backgroundColor: COLORS.RED }} onClick={(e) => updateColor(COLORS.RED)} />

                        <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.GREEN })}
                            style={{ backgroundColor: COLORS.GREEN }} onClick={(e) => updateColor(COLORS.GREEN)} />

                        <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.BLUE })}
                            style={{ backgroundColor: COLORS.BLUE }} onClick={(e) => updateColor(COLORS.BLUE)} />

                        <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.ORANGE })}
                            style={{ backgroundColor: COLORS.ORANGE }} onClick={(e) => updateColor(COLORS.ORANGE)} />

                        <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.YELLOW })}
                            style={{ backgroundColor: COLORS.YELLOW }} onClick={(e) => updateColor(COLORS.YELLOW)} />
                    </div>
                    
                </div>
            }
            {showStroke &&
                <div className={styles.toolItem}>
                    <h4 className={styles.toolText}>Stroke</h4>
                    <div className={styles.itemContainer}>
                        <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Toolbox;