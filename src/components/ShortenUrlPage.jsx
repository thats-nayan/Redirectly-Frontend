import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
   const { url } = useParams();   // ✅ destructure param
   console.log("URL:", url);

    useEffect(() => {
        // Logic to handle the shortened URL
        if(url) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + '/' + url;
        }
     }, [url]);

    return (
        null
    )
}

export default ShortenUrlPage