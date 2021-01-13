import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import  "./collection.component.scss";

const CollectionPage= ({collection}) =>{
    console.log(collection);
    return(
        <div className='collection-page'>
            <h2 className='title'>{collection.title}</h2>
            <div className='items'>
                {
                    collection.items.map(item =>(
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps= (state, ownprops)=>({
    collection: selectCollection(ownprops.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);