import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Home.css";
import styled from "styled-components";
import Card from "./Card";
import Card2 from "./Card2";
import  sort from'./sort.svg';

import  added from'./added.gif';
import {
  FaSearch,
  FaFilter,
  FaPlusCircle
} from "react-icons/fa";

import { Wave, Random } from "react-animated-text";

function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

  const handleButtonClick = () => {
      setIsAlertVisible(true);

        setTimeout(() => {
           setIsAlertVisible(false);
       }, 7000);
  }

  return <div className="title">
<div className='tabs'>
      <Tabs>
        <TabList>
          <Tab>
            <p>Levels</p>
          </Tab>
          <Tab>
            <p>Challenges</p>
          </Tab>
          <Tab>
            <p>Quests</p>
          </Tab>
        </TabList>
      </Tabs>
      </div>
      <div className='search'>   <span className='filtericon'>
      < FaFilter /> filter</span>
      <span className='filtericon2'>
      < img src={sort}/> Sort</span>
   
   
      <div class="containers">


  <input placeholder='...Search...' class='js-search' type="text"/>
  < FaSearch className='i' />
</div>  
      </div>
      

      <div className='next'>
      {/* <Wave text="4 CHALLENGES" effect="fadeOut" effectChange={1.0} /> */}
4 Challenges
       
        <div className='containers2'>
        <div>
          
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleButtonClick}>
      
          {(!isHovering&& !isAlertVisible) && <p> <FaPlusCircle/>Hover me</p>}

          {(isHovering|| isAlertVisible )&&<Wave text="CREATE CHALLENGES" effect="fadeOut" effectChange={5.0} onClick={handleButtonClick} />
}
  
  {/* <button onClick={handleButtonClick}>Show alert</button> */}

        </div>
        {isAlertVisible && 
        <div className='alert-container'>
          <img src={added} className="alert-container"/>
          Created </div> 
}
      </div>


        </div>
      
     
      </div>
      <GridWrapper>
      <Card2/> <Card/> <Card/>    <Card2/>    <Card2/>    <Card2/>    
      <Card/> <Card/> 
      </GridWrapper>
 
  </div>;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  place-content: center;
  place-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 20px;
`;
export default Home;
