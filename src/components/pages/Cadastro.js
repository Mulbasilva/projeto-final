import React from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function Cadastro(){
    return(
        <section>
            <h2>Aqui é cadastre-se</h2>

            <h2>Card Wendy e Mirinda</h2>
           
            
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </section>
    )
}
export default Cadastro