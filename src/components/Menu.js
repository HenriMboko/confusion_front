import React from 'react' ;
import {Card, CardImg , CardImgOverlay, CardTitle} from 'reactstrap';


function RenderMenuItem({dishe ,onClick }){
    return(
        <Card onClick={() => onClick(dishe.id)}>
            <CardImg width="100%" src={dishe.image} alt={dishe.name} />

             <CardImgOverlay>
                <CardTitle>{dishe.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}

const Menu = (props) => {

    const dishes = props.dishes.map((dishe) =>{
        return(
            <div key={dishe.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dishe ={dishe} onClick = {props.onClick} />
            </div>
        )
        });

    return (
        <div className="container">
                <div className="row">
                        {dishes}
                </div>
            </div>
    );
}


export default Menu;