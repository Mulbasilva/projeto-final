import React from "react"
import styles from "./sobre.module.css"
import imag from "./about-us.jpg"

function Sobre(){
    return(
        <section>
            <h2 className={styles.titulo}>Sobre-nós</h2>

            <div className={styles.sobre}>

                <div>
                    <img className={styles.imagem_sobre} src={imag} alt="sobre-nos" width={500} height={300}/>
                </div>
                <div>
                    <h3 className={styles.sobre_h}>Sobre-nos</h3>
                    <p className={styles.sobre_p}>A página NOME foi criada com objetivo de ajudar as pessoas imigrantes a encontrar os orgões que, tanto
                    ajudam para se instalar 
                    no país como também  para entrar no mercado.</p>
                </div>
            </div>


        </section>
    )
}
export default Sobre