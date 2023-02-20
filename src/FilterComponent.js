import React from "react";
import { useState } from "react";
import './FilterComponent.css'
function FilterComponent({housetype, onLocationFilter, onHomeFilter,onDateFilter, onPriceFilter})
{

    const [filters, setFilters] =useState({
        location:"",
        date:"",
        price:"",
        propertytype:"",
    });


    const handleInput = (field) =>(event)=>{
        const {value}=event.target;

        setFilters({
            ...filters,
            [field]:value,
        });

        switch (field) 
        {
            case "location": onLocationFilter(value);
            break;

            case "date": onDateFilter(value,"from");
            break;

            case "price": onPriceFilter(value);
            break;

            case "propertytype": onHomeFilter(value);
            break;
        }
    }
return(
    <div className="FilterContainer">
            <div className="FilterContent">
                <h5 className="MainheadStyle">Location</h5>
                <input type = "text" id="location" value={filters.location} onChange={handleInput("location")} className="SubtextboxStyle"/>
            </div>

            <div className="FilterContent">
                <h5 className="MainheadStyle">When</h5>
                <input type="date" className="SubdateStyle"  onChange={handleInput("date")}/>
            </div>

            <div className="FilterContent">
                <h5 className="MainheadStyle">Price</h5>
                <input type = "text" id="price" value={filters.price} onChange={handleInput("price")} className="SubtextboxStyle"/>
            </div>

            <div className="FilterContent1">
                <h5 className="MainheadStyle">Property Type</h5>
                <select id="propertytype" onChange={handleInput("propertytype")} className="SubhouseStyle">
                    <option >Houses</option>
                    {housetype.map((housetypedropdown)=>(
                        <option value={housetypedropdown} key={housetypedropdown} >{housetypedropdown}</option>
                    ))}
                </select>
            </div>

        </div>
);
}

export default FilterComponent; 