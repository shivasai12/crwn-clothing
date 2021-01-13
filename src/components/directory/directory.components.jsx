import React from "react";
import MenuIem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory= ({sections}) =>(
    
            <div className='directory-menu'>
               {
                   sections.map(({id, ...otherSectionProps}) =>(
                       <MenuIem Key={id} {...otherSectionProps}/>
                   ))
               }
            </div>
      
)
const mapStateToProps= createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);