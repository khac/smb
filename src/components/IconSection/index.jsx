import React from 'react';
import {images_one, images_two} from '../../constants/IconSectionData';
import "./style.css";

const IconSection = () => {
    const data = images_one.icons;
    const data_two = images_two.icons;
    return (
        <div style={{display:"flex", flexDirection: "column"}}>
        <div style={{display:"flex", flexDirection: "row", margin:"20px 0"}}>
        {data.map((item, idx) => {
            return (
              <div style={{marginLeft: "115px"}}>
              <div
                alt={item.text}
                key={idx}
                className={'icon-div'}
                style={{ 
                    backgroundImage: `url("${item.src}")`,
                    backgroundSize: '75%',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                  }}
              >
              </div>
              <p className='icon-text'>
                {item.text}
              </p>
              </div>
            );
        })}
        </div>
        <div style={{display:"flex", flexDirection: "row"}}>
        {data_two.map((item, idx) => {
            return (
              <div style={{marginLeft: "115px"}}>
              <div
                alt={item.text}
                key={idx}
                className={'icon-div'}
                style={{ 
                    backgroundImage: `url("${item.src}")`,
                    backgroundSize: '75%',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                  }}
              >
              </div>
              <p className='icon-text'>
                {item.text}
              </p>
              </div>
            );
        })}
        </div>
        </div>

        
    );
};


export default IconSection;