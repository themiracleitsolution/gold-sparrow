import React, { useState, useEffect } from 'react';

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    isLoading ? <div className='fixed top-0 left-0 right-0 bottom-0  z-20 flex justify-center items-center w-full h-full bg-white'> 
  
  <video autoPlay muted>
  <source  src="/logoloader.mp4" type="video/mp4" width={50} height={50}/>
</video>
    </div>
    : <div></div>
  );
}

export default Loader;