import React from "react"
import imagem1 from "./contact.png"
import imagem from "./whatsapp.svg"


function Contato(){
    return(
        <section>
            <h2>Contato</h2>
            <div>
                <div>
                    <img src={imagem1} alt="" />
                </div>

                <div>
                    <h2>Whatsapp:</h2>
                    <img src={imagem} alt="" />
                </div>
            </div>

            
        </section>
    )
}
export default Contato