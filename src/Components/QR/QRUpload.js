import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';

function QRUpload(){
    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',image);
        fetch("http://localhost:5000/api/qr/upload", {
            method: 'POST',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            },
            body:formData
        }).then(res=>res.json())
        .then(data=>console.log(data));
    }

    const [image, setImage] = useState();
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.File
                    type="file"
                    id="qr-file"
                    label="QR file input"
                    accept="image/"
                    onChange={e=>setImage(e.target.files[0])}
                    name="file"
                >
                </Form.File>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default QRUpload;