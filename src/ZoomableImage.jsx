import { Component, createElement } from "react";
import "./ui/ZoomableImage.css";
import ReactPanZoom from 'react-image-pan-zoom-rotate';
export class ZoomableImage extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        debugger
        return (
            <div style={{width:this.props.imgWidth + "%" ,height : this.props.imgHeight +"%" , overflow:'scroll' , overflowX:'hidden',overflowY:'hidden'}}>
                <ReactPanZoom 
                
                image={this.props.EntityName.value?.uri}
                alt="Image Not Found"
                
            />

            </div>
            
        );
    }
  
}
