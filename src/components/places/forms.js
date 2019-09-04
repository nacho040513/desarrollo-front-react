import React, { Component } from 'react';

import Container from '../Container';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import RaisedButton from 'material-ui/RaisedButton';




export default class forms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            nombre:"",
            apellidos:"",
            celular:"",
            ciudad:"",
            mensaje:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    handleChange(event) {  this.setState({email: event.target.value});}
      handleChange1(event) {this.setState({nombre: event.target.value});}
      handleChange2(event) {this.setState({apellidos: event.target.value});}
      handleChange3(event) {this.setState({celular: event.target.value});}
      handleChange4(event) {this.setState({ciudad: event.target.value});}
      handleChange5(event) {this.setState({mensaje: event.target.value});}

    Submit(event) {
        alert(this.state.nombre +' Te informamos que los datos del formulario se han enviado con éxito');
        event.preventDefault();
        // fetch ('localhost:3000/${this.state.email}', {
           // method: 'POST'
          //})
          //.then(res => res.json())
          //.then(res => {
            //if (res.success) { // exito
              //alert('ok');
            //}
          //});
          
        const datos = [{'correo':this.state.email},
        {'nombre':this.state.nombre},
        {'apellidos':this.state.apellidos},
        {'celular':this.state.celular},
        {'ciudad':this.state.ciudad},
        {'mensaje':this.state.mensaje}
        ];
        //const express = require('express');
          //const app = express();
        //app.get('/',(req,res)=>{
          //  res.json(datos);
        //});

        //app.use(express.static('public'));
        //app.listen(3000,function(){
          //  console.log('listo')
        //});

        console.log(datos);
      }

    render(){
        return(
           
            <div className="row formu">
                <div className="col-xs-12 col-sm-7">
                     <Container>
                         <div className="for">
                
                        <h1 style={{'textAlign':'left' ,'paddingBottom':'20px'}}>Formulario</h1>
                        <Form onSubmit={this.Submit} method='POST' action="">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Correo" required value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>
                        
                        <Form.Group >
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                            <Form.Control type="text" placeholder="Nombres" required value={this.state.nombre} onChange={this.handleChange1}/>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                            <Form.Control type="text" placeholder="Apellidos" required value={this.state.apellidos} onChange={this.handleChange2}/>
                            </div>
                        </div>
                        </Form.Group>
                        <Form.Group >
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                            <Form.Control type="number" placeholder="Celular" required value={this.state.celular} onChange={this.handleChange3}/>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select"  required value={this.state.ciudad} onChange={this.handleChange4}>
                                <option value="0">Ciudad</option>
                                <option value="Bogota">Bogota</option>
                                <option value="Medellin">Medellin</option>
                                <option value="Cali">Cali</option>
                                </Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="4" placeholder="Mensaje" value={this.state.mensaje} onChange={this.handleChange5}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{'alignItems':'right'}}>
                            Enviar
                        </Button>

                        </Form> 
                        </div>                   
                </Container>
                </div>
                
                <div className="contacto col-xs-12 col-sm-5">

                    <div className="Login-background"
                            >
                         <img 
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'images/contacto.jpg'}
                        alt="First slide"/>
                    </div>

                    </div>

            </div>
           
        
        );
    }
}