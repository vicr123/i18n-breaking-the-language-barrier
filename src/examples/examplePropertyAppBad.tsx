import Styles from "./examplePropertyApp.module.css";

export function ExamplePropertyApp() {
    return <div className={`${Styles.appRoot}`}>
        <div className={Styles.appHeader}>
            Find a property
        </div>
        <div className={Styles.appContent}>
            <div className={Styles.appFilter}>
                <span>Price</span>
                <input type={"range"} max={100} value={85}/>
                <span className={Styles.appValue}>$1,200,000</span>
            </div>
            <div className={Styles.appFilter}>
                <span>Bedrooms</span>
                <div className={Styles.appNumericFilter}>
                    From <input type={"number"} value={2}/> to <input type={"number"} value={5}/>
                </div>
            </div>
            <div className={Styles.appFilter}>
                <span>Bathrooms</span>
                <div className={Styles.appNumericFilter}>
                    From <input type={"number"} value={2}/> to <input type={"number"} value={5}/>
                </div>
            </div>
            <div className={Styles.appFilter}>
                <span>Garage</span>
                <div className={Styles.appNumericFilter}>
                    From <input type={"number"} value={2}/> to <input type={"number"} value={5}/>
                </div>
            </div>
        </div>
        <div className={Styles.appFooter}>
            <button>Search</button>
        </div>
    </div>
}