import React from "react"
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"
import styles from "./footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.parceiro}>
                <h4 >Parceiro:</h4>
                <p>Toti</p>
            </div>

            <div>
                <h5 className={styles.rtitle}>R-sociais:</h5>
                <ul className={styles.rsociais}>
                    <li className={styles.item}><FaGithub className={styles.link}/></li>
                    <li className={styles.item}><FaInstagram className={styles.link}/></li>
                    <li className={styles.item}><FaFacebook className={styles.link}/></li>
                    <li className={styles.item}><FaLinkedin className={styles.link}/></li>
                </ul>
            </div>

            <div>
                <p className={styles.copy_1}>Desevolvido por: NOME/grupo</p>
                
                <p className={styles.copy}>Copyright &copy;2022</p>
            
            </div>
        </footer>
    )
}
export default Footer