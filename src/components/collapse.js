import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';



export default class Collapse extends React.Component{
    render(){
        return(
            <div className="row colla">
                <div className="col-xs-12 col-sm-6">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat elementum nisl et aliquam. Suspendisse potenti.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat elementum nisl et aliquam. Suspendisse potenti. Vivamus non libero augue. Vivamus lacinia turpis nunc, ac consectetur enim luctus eget. In hac habitasse platea dictumst. Duis ante massa, placerat et ligula sit amet, gravida imperdiet ipsum. Maecenas in blandit arcu. Quisque gravida tincidunt nisi quis ultrices. Integer hendrerit ex lorem, in malesuada lacus fringilla vitae. Aenean cursus rutrum ante sed luctus. Sed tristique turpis ac magna tristique placerat.</p>

                </div>
                <div className="col-xs-12 col-sm-6">
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                </div>



            </div>

        );
    }


}