import React from 'react'
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


export default function Messenger() {
    const { user } = useContext(AuthContext);

  return (
    <div>Messenger
        {
          console.log("hello"+user._id)
        }

    </div>
  )
}
