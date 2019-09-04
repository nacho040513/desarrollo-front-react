import React, {Component} from 'react';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import Collapse from '../components/collapse';
import {indigo400} from 'material-ui/styles/colors';

import data from '../requests/places';
import Benefit from '../components/benefit';
import PlaceCard from '../components/places/PlaceCard';
import Carouse from '../components/carousel';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            places: data.places
        }
        this.hidePlace = this.hidePlace.bind(this);
    }

    places(){
        return this.state.places.map((place,index)=>{
          return(
            <PlaceCard onRemove={this.hidePlace} place={place} index={index}></PlaceCard>
          );
        })
      }
    hidePlace(place){
        this.setState({
            places: this.state.places.filter(el => el != place)
        })
    }



    render(){
        return(
            <section>
            <div className = "Header-background">
            <div className= "Container">
            <div className="head1">
            <div className="row">
               
                <div className="col-sm-12 col-xs-12">
                  <h2>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit neque,
                  senectus tempor urna.
                  </h2>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <p>
                  Pulvinar tincidunt platea euismod iaculis magna ad accumsan mi ut, massa nisi posuere viverra cras mus tellus sem nostra, faucibus cursus velit tristique semper laoreet penatibus ante.
                   Donec vulputate ornare hac semper sapien ad arcu in, est tincidunt nisi non senectus ligula gravida.
                  </p>
                </div>
                </div>

              </div>
              <div>
                <Carouse></Carouse>
              </div>

              <div style={{'paddingBottom':'20px'}}>
                <Benefit></Benefit>
              </div>

              <hr noshade="noshade" />
              <div>
                <Collapse></Collapse>
              </div>
              
              <hr noshade="noshade" />


            </div>
          </div>

          <div style={{'backgroundColor':indigo400, 'padding':'50px' }}>
              <div className="row">
              {this.places()}
              </div> 
          </div>
          </section>
        );
    }

}