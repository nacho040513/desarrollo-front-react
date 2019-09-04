import React from 'react';

import {indigo400,redA400, lightBlueA400,amberA400} from 'material-ui/styles/colors';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';

export default class Benefit extends React.Component{
    render(){
        return(
            <ul>
              <div className="row">
                  <Card className="Header-Benefit col-sm-6 col-xs-12">
                    <CardText>
                        <div className="Header-Benefit-content">
                          <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit neque,
                             senectus tempor urna per porta porttitor.</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat elementum nisl et aliquam. Suspendisse potenti. Vivamus non libero augue. Vivamus lacinia turpis nunc, ac consectetur enim luctus eget. In hac habitasse platea dictumst. Duis ante massa, placerat et ligula sit amet, gravida imperdiet ipsum. Maecenas in blandit arcu. Quisque gravida tincidunt nisi quis ultrices. Integer hendrerit ex lorem, in malesuada lacus fringilla vitae. Aenean cursus rutrum ante sed luctus. Sed tristique turpis ac magna tristique placerat.</p>
                          <p>Maecenas quis tellus diam. Vivamus vel dolor pretium, vulputate velit non, porttitor lectus. Proin tortor leo, scelerisque vel nibh eu, dignissim pretium ante. Proin vulputate, lacus sit amet congue pellentesque, nibh nulla iaculis ipsum, quis iaculis nunc nunc id metus. Nunc lacinia, ex et euismod pharetra, arcu dolor tempus nibh, a mattis magna nisl quis magna. Quisque porttitor ultricies consectetur. In sit amet leo ut neque viverra auctor eu nec mi. Vestibulum non nibh nisi. Proin pellentesque viverra urna molestie malesuada. Quisque et velit quis dui tincidunt convallis. Donec sit amet pulvinar neque. Donec eget accumsan metus. In mollis, lectus ut faucibus hendrerit, erat nunc convallis libero, scelerisque fringilla neque libero sit amet sem. </p>
                          <p>Sed aliquet nunc vel ante tristique, ac euismod elit fringilla. Phasellus posuere suscipit enim in cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia erat quis enim pharetra, suscipit ultricies tortor imperdiet. Nulla arcu purus, venenatis porttitor vehicula a, iaculis et purus. Sed vulputate, nisl at luctus malesuada, tortor dolor hendrerit lectus, vitae blandit mi nibh at dolor. Donec sit amet rhoncus dolor. Maecenas scelerisque velit tortor, nec sodales urna aliquet et. Vivamus luctus pulvinar justo in sollicitudin. Donec et congue mi. </p>
                        </div>
                      
                    </CardText>
                  </Card>
    
                  <Card className="Header-Benefit col-sm-5 col-xs-12">
                    <CardText>
                        <div className="Header-Benefit-content">
                        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit neque,
                             senectus tempor urna per porta porttitor.</h3>
                       <p>Phasellus magna erat, condimentum sed posuere laoreet, rutrum dictum justo. Quisque sollicitudin diam in odio posuere molestie. Suspendisse sodales dui et lorem hendrerit maximus. In ullamcorper luctus feugiat. Nunc venenatis tellus in sapien tempus, quis mollis ante imperdiet. Maecenas vitae ex dictum magna finibus aliquet ac sit amet turpis. Vivamus vehicula eleifend tellus, viverra tincidunt enim placerat eu.</p>
                       <p>Donec diam metus, sollicitudin eget euismod at, tempus pellentesque tortor. Aenean dui arcu, imperdiet eu ornare et, laoreet eu diam. Morbi pharetra luctus varius. Sed et vestibulum risus. Donec interdum nisi nisi, ullamcorper bibendum ante rutrum sit amet. Nullam odio erat, vestibulum eget ultrices vel, hendrerit at magna. Vestibulum at sodales dolor. Phasellus sed tortor ligula. Donec iaculis dignissim quam eu sollicitudin. Vestibulum egestas, nisl vulputate dapibus varius, leo est sollicitudin quam, non rutrum ex neque vitae eros. Aenean vel magna varius, luctus tellus sed, maximus dui. Nam non libero a turpis egestas tristique. Proin ullamcorper, leo eget pharetra luctus, risus urna scelerisque lectus, eget finibus urna diam in velit. Donec pharetra lobortis luctus. </p>
                       <p>Phasellus magna erat, condimentum sed posuere laoreet, rutrum dictum justo. Quisque sollicitudin diam in odio posuere molestie. Suspendisse sodales dui et lorem hendrerit maximus. In ullamcorper luctus feugiat. Nunc venenatis tellus in sapien tempus, quis mollis ante imperdiet. Maecenas vitae ex dictum magna finibus aliquet ac sit amet turpis. Vivamus vehicula eleifend tellus, viverra tincidunt enim placerat eu.</p>
                        </div>
                     
                    </CardText>
                  </Card>
                </div>
                </ul>
        );
    }
}