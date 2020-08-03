import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Header(){

    return(
        <Jumbotron style={{backgroundColor:'black', color:'white'}}>
           <h1 style={{textAlign:'center',fontSize:'32px'}} > This is Divakar and his first steps in Web development </h1>
        </Jumbotron>
    )
}