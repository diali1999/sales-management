import React, {useEffect, useState} from 'react';
import {Image, Spinner} from 'react-bootstrap';

function QRDisplay(){
    const [urls, setUrls] = useState([]);
    const [isBusy, setBusy] = useState(true);

    async function getUrls(){
        return fetch('http://localhost:5000/api/qr/',{
            method:'GET',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            }
        })
        .then(data=>data.json());
    }
    useEffect(() => {
        getUrls()
        .then(data=>{
            setUrls(data);
            setBusy(false);
        })
    }, []);
    if(!isBusy){
        return (
        <div>
            <h2>QR Image List</h2>
            {urls.map(url=>{
                return(
                    <div>
                       <Image src={`${url.url}`} width="300" height="300"/>
                    </div>
                )
            })}
        </div>
        )
    }
    else{
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
}

export default QRDisplay;