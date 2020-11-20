import React, { useRef, useEffect } from 'react';
import * as typeformEmbed from "@typeform/embed";

const StaffApply = () => {
    const typeformRef = useRef(null);
  
    useEffect(() => {
      typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/bpH2Ai1E', {
        hideFooter: true,
        hideHeaders: true,
        opacity: 100,
      });
    }, [typeformRef]);
    
    return (
      <div ref={typeformRef} style={{ height: '100vh', width: '100%'}}></div>
    );
}

export default StaffApply