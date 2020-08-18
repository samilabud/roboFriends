import React from 'react';

const MyScroll = (props)=> {

    return ( 
        <div style={{overflowY:'scroll', border:'5px solid black', height:'400px'}}>
        {props.children}
        </div>
    );
} 

export default MyScroll;