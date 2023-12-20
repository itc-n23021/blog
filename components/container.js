import styles from 'styles/container.module.css'

const container = ({ children, large = false }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}
export default container
