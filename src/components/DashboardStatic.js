import React, { useEffect ,useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {Button, Avatar , Paper , Grid ,Badge , Box} from '@material-ui/core';
import ItemsCarousel from 'react-items-carousel';

const useStyles = makeStyles((theme) => ({
 root: {
    flexGrow:1,
    width:'100%',
    height:'100%'
 },
 
}));
  
export default function DashboardStatic(props){
  const [children,setChildren]=useState([]);
  const [activeItemIndex,setActiveItemIndex]=useState(0);
  useEffect(()=>{
        
  },[])  
  const classes = useStyles();
 
  
 function changeActiveItem(activeItemIndex){}//setActiveItemIndex({ activeItemIndex })};
  return( 
   <Paper style={{height:100,width:'100%'}}>
       <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={changeActiveItem(activeItemIndex)}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
       <div key={1} style={{ height: 200, background: '#333' }}>{1}</div>
       <div key={2} style={{ height: 200, background: '#333' }}>{2}</div>
       <div key={3} style={{ height: 200, background: '#333' }}>{3}</div>
      </ItemsCarousel> 
   </Paper>
  );
}