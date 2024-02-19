import React, { useState } from "react";
import moment from 'moment'; 


const SearchResults = ({results})=>{

  const[isRowSelect, setIsRowSelect]= useState(null);

//console.log(results);

  // Function to calculate the number of nights between check-in and check-out dates

      const calculateNights = (checkInDate, checkOutDate) =>{
        const checkInMoment = moment(checkInDate);
        const checkOutMoment = moment(checkOutDate);
        return checkOutMoment.diff(checkInMoment, 'days'); // Calculate the number of nights 
      }; 

// create function for handlers of on click
        const handleSelect=(rowId)=>{
            setIsRowSelect(rowId)
            console.log(rowId)
        }


    return(
        <table className = "table table-dark">

        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
          </tr>
        </thead> 
        <tbody>

           {/* way of using props always use curly brackets while creating props */}

        {
          results.map((booking) =>{

            return(
              <tr className={isRowSelect===booking.id ? "table-active" : ""}onClick={()=>handleSelect (booking.id)}>

            <th scope="row">{booking.id}</th>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{calculateNights(booking.checkInDate, booking.checkOutDate)}</td>
          </tr>
            )
          })
        }

              
        </tbody>
       </table>
    )
}
 export default SearchResults;