import React,{Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} link="https://github.com/DivakarRaut23/private-mooring" title="Private Mooring Application" content="This is my first react app where i learnt how to communicate between server and client.I am learning new things everyday and would like to implement it"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img2} link="https://github.com/DivakarRaut23/team-five-client" title="NSW Community Project Website" content="This two weeks project gave me indepth knowledge of React Js,Bootstrap and express server and rest api.I am really happy with the outcome of this project. "/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img3} link="https://github.com/DivakarRaut23/vessel-transfer" title="Vessel Transfer Application" content="This is my second react app where i learnt more about CRUD functionality and various usability of bootstrap.This project gave me indepth knowledge of rest api."/>
                    </div>
                </div>
            </div>  

        );
    }


}

export default Cards;   