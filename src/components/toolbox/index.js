import { useSelector } from "react-redux";
import styles from "@/components/toolbox/index.module.css";
import { COLORS, M_ITEMS } from "@/constants";

const Toolbox = () => { 
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

    const showColor = activeMenuItem === M_ITEMS.PENCIL;
    const showStroke = activeMenuItem === M_ITEMS.PENCIL || activeMenuItem === M_ITEMS.ERASER;

    // const showStrokeTool = activeMenuItem === M_ITEMS.PENCIL

    const updateBrushSize = (e) => {

    }

    return (
        <div className={styles.toolBoxContainer}>
            {showColor && 
                <div className={styles.toolItem}>
                    <h4 className={styles.toolText}>Color</h4>
                    <div className={styles.itemContainer}>
                        <div className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}}/>
                        <div className={styles.colorBox} style={{backgroundColor: COLORS.RED}}/>
                        <div className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}}/>
                        <div className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}}/>
                        <div className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}}/>
                        <div className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}}/>
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