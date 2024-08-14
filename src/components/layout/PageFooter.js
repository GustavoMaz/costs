import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './PageFooter.module.css'

function PageFooter() {
  return (
    <footer className={styles.pageFooter}>
      <ul className={styles.socialsList}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copyright}><span>Costs</span> &copy; 2024</p>
    </footer>
  )
}

export default PageFooter