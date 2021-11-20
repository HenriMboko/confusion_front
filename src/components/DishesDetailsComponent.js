import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderDish ({dishe}){

    if (dishe != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={ dishe.image} alt={dishe.name}/>
                    <CardImgOverlay>
                       <CardTitle>{dishe.name}</CardTitle>
                       <CardText>{dishe.description}</CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        );} else {
            return (
                <div></div>
            )
        }
}


function RenderComment({comments}){
    if (comments != null){
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comments) => {
                        return (
                            <div key={comments.id}>
                                 <li>
                                 <p>{comments.comment}</p>
                                  <p>-- {comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                                 </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return(
            <div></div>
            );
    }

   
}

const Dishdetail = (props) =>{
    if(props.dishe != null){
        return(
            <div className = "container">
                <div className="row">
                    <RenderDish dishe={props.dishe} />
                     <RenderComment comments={props.dishe.comments} /> 
                </div>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
    

}



/* class Dishdetail extends Component{

    constructor(props){
        super(props);
        this.state ={

        }

    }

    renderDish(dishe){
        if(dishe != null){
            return (
                <Card>
                      <CardImg width="100%" src={dishe.image} alt={dishe.name} />
                      <CardBody>
                          <CardTitle>{dishe.name}</CardTitle>
                          <CardText>{dishe.description}</CardText>
                      </CardBody>
                </Card>
            )
        }else {
            return(
                <div></div>
            )
        }
    }

render(){
   

    const dishes = this.props.dishes.map((dishe) =>{
        return(
            <div key={dishe.id} className="col-12 col-md-5 m-1">
                <Card>
                        <CardImg width="100%" src={dishe.image} alt={dishe.name} />

                    <CardImgOverlay>
                        <CardTitle>{dishe.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
        })
        return(
            <div className="container">
                <div className="row">
                        {dishes}
                </div>
            </div>
        )
    }} */


export default Dishdetail