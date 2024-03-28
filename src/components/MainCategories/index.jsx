import React from 'react';
import { Card } from "flowbite-react";

function CardWithText(props) {
  return (
    <Card className="max-w-sm m-4" imgSrc={props.img} >
      <h5 className="text-2l font-bold tracking-tight text-gray-900 dark:text-white">
        {props.heading}
      </h5>
      <p className="font-normal text-gray-400 dark:text-gray-400">
        {props.text}
      </p>
    </Card>

  );
}

function MainCategories(props) {
    return (
        <div style={{marginTop:"40px"}}>
            <h1 className="text-2xl dark:text-gray-400">
                {"Popular Categories"}
            </h1>
            <div style={{"display": "flex", "flexDirection":'row', margin:"20px 40px", borderRadius:"5px"}}>
                <div style={{"display": "flex", "flexDirection":'row', border: "0.1px solid grey", margin:"20px", width:"50%", borderRadius:"15px"}}>
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/04/21/01/43/painter-2247395_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/03/19/18/41/roller-tape-measure-2157306_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2023/04/11/16/00/brush-7917641_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection":'row', border: "0.1px solid grey", margin:"20px", width:"50%", borderRadius:"15px"}}>
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/04/21/01/43/painter-2247395_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/03/19/18/41/roller-tape-measure-2157306_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2023/04/11/16/00/brush-7917641_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                </div>
                
            </div>
            
            <div style={{"display": "flex", "flexDirection":'row', margin:"20px 40px"}}>
                <div style={{"display": "flex", "flexDirection":'row', border: "0.1px solid grey", margin:"20px", width:"50%", borderRadius:"15px"}}>
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/04/21/01/43/painter-2247395_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/03/19/18/41/roller-tape-measure-2157306_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2023/04/11/16/00/brush-7917641_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection":'row', border: "0.1px solid grey", margin:"20px", width:"50%", borderRadius:"15px"}}>
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/04/21/01/43/painter-2247395_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2017/03/19/18/41/roller-tape-measure-2157306_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                    <CardWithText 
                        img = {'https://cdn.pixabay.com/photo/2023/04/11/16/00/brush-7917641_1280.jpg'}
                        heading={'Noteworthy technology acquisitions 2021'} 
                        text={''}
                    />
                </div>
                
            </div>
            
        </div>
        
        
    );
  }

export default MainCategories;