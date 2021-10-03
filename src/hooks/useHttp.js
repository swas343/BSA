import {useState, useEffect} from 'react';

const useHttp = (key) =>{
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);
	
	const fetchData = async () => {
		setIsLoading(true)
		try {
	      const response = await fetch('./data.json');

	      if (!response.ok) {
	        throw new Error('Request failed!');
	      }

	      const recievedData = await response.json();
		  
          if(key in recievedData){
            setData(recievedData[key]);    
          }else{
            throw new Error('No Such data found!');
          }
		  
	    } catch (err) {
	      setError(err.message || 'Something went wrong!');
	    }

        // using set timeout just to simulate an api call time
	    setTimeout(() => {
            setIsLoading(false)    
        }, 2000);
        
	}

	useEffect(() => {
    	fetchData();
  	}, []);

    return [isLoading, error, data]

}

export default useHttp;