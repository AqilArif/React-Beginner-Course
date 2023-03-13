import React from 'react'

const Profile = ( props ) => {

  // Destructuring Props Method by call only value you don't need to add props.

  const {name, lastName} = props; // Name and LastName are destructuring from Recieved Props 
  
  console.log(props);

  return (
    <h1>
        Name: {name + ' ' + lastName}
    </h1>
  )
}

export default Profile