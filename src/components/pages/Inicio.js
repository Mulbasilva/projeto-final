import React from "react"
import styles from "./inicio.module.css"

function Inicio(){
    return(
        <section>

            <div className={styles.parte1}>
                <div className={styles.imagem1}>
                    <img src="https://via.placeholder.com/800x430" alt="" />
                </div>

                <div className={styles.imagem1}>
                    <img src="https://via.placeholder.com/430x430" alt="" />
                </div>
            </div>

            <div className={styles.parte2}>
                <div className={styles.imagem2}>
                    <img src="https://via.placeholder.com/250x250" alt="" />
                </div>

                <div className={styles.imagem2}>
                    <img src="https://via.placeholder.com/250x250" alt="" />
                </div>

                <div className={styles.imagem2}>
                    <img src="https://via.placeholder.com/250x250" alt="" />
                </div>

                <div className={styles.imagem2}>
                    <img src="https://via.placeholder.com/250x250" alt="" />
                </div>
            </div>


            <div className={styles.parte3}>
                
                    <h2 className={styles.titulo_info}>+Info</h2>
                    <p className={styles.titulo_p}>Documetos necessários:</p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2 className={styles.texto}>TOTI</h2>
                    </div>

                    <div className={styles.card}>
                        <h2  className={styles.texto}>Língua</h2>
                    </div>

                    <div className={styles.card}>
                        <h2  className={styles.texto}>PF</h2>
                    </div>
                    
                    <div className={styles.card}>
                        <h2  className={styles.texto}>UNILAB</h2>
                    </div>
                </div>

            </div>

        </section>

    )
}
export default Inicio