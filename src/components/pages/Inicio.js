import React from "react"
import styles from "./inicio.module.css"
import Carousell from "./Carousell"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import imagem1 from "./img/pf.gif"
import imagem2 from "./img/unilab.png"
import imagem3 from "./img/toti.png"
import { Link } from "react-router-dom"






function Inicio(){
    return(
        <section>

            <div className={styles.parte1}>
                <div>
                    <Carousell />
                </div>

                <div className={styles.imagem1}>
                    <img src={imagem3} alt="" />
                </div>
            </div>
                <h2 className={styles.titulo_video}>Vídeos explicativos</h2>

            <div className={styles.parte2}>
                <div className={styles.imagem2}>
                    <img className={styles.imagemh} src="http://luxury-homes-bahamas.com/wp-content/themes/authoritize/squeezes/old/video-fakeout-images/fakeout-player-4.png" alt="" />
                </div>

                <div className={styles.imagem2}>
                    <img className={styles.imagemh} src="http://luxury-homes-bahamas.com/wp-content/themes/authoritize/squeezes/old/video-fakeout-images/fakeout-player-4.png" alt="" />
                </div>

                <div className={styles.imagem2}>
                    <img className={styles.imagemh} src="http://luxury-homes-bahamas.com/wp-content/themes/authoritize/squeezes/old/video-fakeout-images/fakeout-player-4.png" alt="" />
                </div>

                <div className={styles.imagem2}>
                    <img className={styles.imagemh} src="http://luxury-homes-bahamas.com/wp-content/themes/authoritize/squeezes/old/video-fakeout-images/fakeout-player-4.png" alt="" />
                </div>
            </div>


            <div className={styles.parte3}>
                
                    <h2 className={styles.titulo_info}>+Info</h2>
                    <p className={styles.titulo_p}>Documetos necessários:</p>

                <div className={styles.cards}>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imagem3} />
                            <Card.Body>
                                <Card.Title>TOTI</Card.Title>
                                <Card.Text>
                                Toti é uma plataforma de ensino que forma refugiados e migrantes através de um curso preparado para atender as demandas das empresas.<br/>

                                Toti se preocupa principalmente em formar imigrantes residentes no Brasil e, em forma de coloca-los no mercado da tecnologia.<br/>
                                Não perca tempo, acesse o link da toti a baixo.

                                </Card.Text>
                                <Button variant="primary">Saiba mais sobre toti</Button>
                            </Card.Body>
                        </Card>
                        
                    </div>

                    <div >

                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imagem1} />
                            <Card.Body>
                                <Card.Title>Língua</Card.Title>
                                <Card.Text>
                                Sabe-se que os primeiros tempos no pais diferete do nosso, a língua passa a ser um elemento principal para se comunicar com as pessoas local.<br/>

                                Para isso, disponibilizamos nomes de várias escolas de cidades diferentes  para você estudar a língua portuguesa. 

                                <ol>
                                    <li>
                                        <Link>Escola - 1</Link>
                                    </li>
                                    <li>
                                        <Link>Escola - 2</Link>
                                    </li>
                                    <li>
                                        <Link>Escola - 3</Link>
                                    </li>
                                </ol>
                                
                                </Card.Text>
                                <Button variant="primary">Saiba mais várias esolas</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imagem1} />
                            <Card.Body>
                                <Card.Title>PF</Card.Title>
                                <Card.Text>
                                A Polícia Federal do Brasil, ou Departamento de Polícia Federal, é uma instituição policial brasileira, subordinada ao Ministério da Justiça e Segurança Pública.<br/>

                                Por onde os imigrantes regularizam suas situações (estada) dentro do território Brasileiro. Procure por instituição da policia federal no seu estado pela internet e leva em mãos os documentos exigidos. <br/> Acesse site da policia federal abaixo.
                                
                                </Card.Text>
                                <Button variant="primary">Saiba mais sobre PF</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imagem2} />
                            <Card.Body>
                                <Card.Title>UNILAB</Card.Title>
                                <Card.Text>
                                Universidade da Integração Internacional da Lusofonia Afro-Brasileira, é uma universidade federal que também trabalha com parceria com os paises africanos, nomeadamente Angola, Cabo Verde, Guiné-Bissau, Moçambique e São Tomé e Principe, no sentido de trazer os estudantes africanos para o Brasil.<br/> Acesso site da unilab para saber mais sobre e os documentos necessários.
                                </Card.Text>
                                <Button variant="primary">Saiba mais sobre Unilab</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>

        </section>

    )
}
export default Inicio