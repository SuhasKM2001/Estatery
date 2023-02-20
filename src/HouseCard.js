import * as React from 'react';
import './HomeCard.css'
import { MdOutlineBed, MdOutlineBathroom } from 'react-icons/md'
import { TbSquareRotated } from 'react-icons/tb'

function HouseCard({item}) {
  return (
    // <div className='cardContainer'>
        <div className='card'>
            {/* <img src= "https://thumbs.dreamstime.com/b/luxury-big-modern-house-electric-car-luxury-modern-house-electric-car-141295838.jpg" height={170}/> */}
            <img src={item?.Image} height={170}/>
            <div className='contentStyle'>
                <h3 className='priceStyle'>{item?.Price}</h3>
                <p className='TextStyle'>/month</p>
                <h3 className='PlaceStyle'>{item?.Location}</h3>
                <p className='DateStyle'>{item?.Date}</p>
                <p className='AddressStyle'>2699 Green Valley, Highland</p>
                <span className='IconStyle'>
                    <MdOutlineBed size={13} style={{ fill: '#675ecb' }}/><p className='IconTextStyle'> {item?.PropertyType} </p>
                    <MdOutlineBathroom size={13} style={{ fill: '#675ecb' }}/><p className='IconTextStyle'> 2 Bathroom </p>
                    <TbSquareRotated size={13} style={{ fill: '#675ecb' }}/><p className='IconTextStyle'> 5*7 m </p>
                </span>
            </div>
        </div>

  );
}

export default HouseCard;