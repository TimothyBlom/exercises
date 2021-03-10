import React, {useEffect, useState} from 'react';
import sliderImg1 from "../images/addButton.png"

const Codex = () => {

    return (
      <div>

        <p className="pageHeaderText">
          This is an easy place to read some of the lore I have wrote about an sci-fi world (this page looks like shit right now)
        </p>

        <div className="codexNav">
          <p>consept 1</p>
          <p>consept 1</p>
          <p>consept 1</p>
          <p>consept 1</p>
          <p>consept 1</p>
        </div>

        <div className="codexSubNav">
          <p>consept 1</p>
          <p>consept 1</p>
          <p>consept 1</p>
          <p>consept 1</p>
          <p>consept 1</p>
        </div>

        <div className='codexContainer'>

          <img className="codexTopImg" src={sliderImg1} alt="" />

        </div>
                               
      </div>
    )
};

export default Codex;