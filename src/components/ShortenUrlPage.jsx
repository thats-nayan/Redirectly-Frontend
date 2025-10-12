import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';

const ShortenUrlPage = () => {
   const { shortUrl } = useParams();  // ✅ destructure param

    useEffect(() => {
        // Logic to handle the shortened URL
        if(shortUrl) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + '/shortUrls/' + shortUrl;
        }
     }, [shortUrl]);

    return (
       <Loader/>
    )
}

export default ShortenUrlPage