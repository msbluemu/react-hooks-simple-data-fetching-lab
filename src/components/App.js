// create your App component here
import React, {useEffect, useState}  from "react";

function App(){
  const [imageURL, setImageURL] = useState("");
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
     .then(res => res.json())
     .then((data) => {
       setImageURL(data.message);
       setIsLoading(false);
     });
  }, [])
 
  return (
   <div>
     {isLoading? <p>Loading...</p> : 
      <img src={imageURL} alt="A Random Dog"/>
     }
   </div>
   )
  }
export default App;