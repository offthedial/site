import React from "react"	

const Mention = ({ children }) => (	
  <span
    style={{	
      fontSize: "85%",
      color: "#7289da",	
      padding: "2px",
      borderRadius: "2px",	
      background: "rgba(114,137,218,.1)",	
    }}
  >	
    {children}	
  </span>	
)	

export default Mention	
