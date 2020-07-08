import React from "react"	

const Mention = ({ children }) => (	
  <text	
    style={{	
      color: "#7289da",	
      padding: "2px",
      borderRadius: "2px",	
      background: "rgba(114,137,218,.1)",	
    }}	
  >	
    {children}	
  </text>	
)	

export default Mention	
