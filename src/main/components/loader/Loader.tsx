import styles from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infinite}>
                <div className={styles.loadingText}/>
                <div className={styles.shadow}/>
            </div>
        </div>
    )
}

export default Loader;
