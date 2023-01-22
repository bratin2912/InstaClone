import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Post/post.css"
// import Navbar from '../Navbar/navbar';
const Post = () => {
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [imageFile, setImageFile] = useState('');
    const [description, setDescritpion] = useState("");

    const uploadPost = () => {
        const formData = new FormData();
        // Map => takes the data in the key value format 
        formData.append("author", username)
        formData.append("location", address)
        formData.append("image_file", imageFile)
        formData.append("description", description)

        fetch("http://localhost:8000/user", {
            method: 'POST',
            body: formData
        })
    }

    return (
        <>
            <Navbar />
            <div className='post_container'>
                <div>
                    <input type="file" onChange={(e) => {
                    setImageFile(e.target.files[0]);
                    }} />
                </div>
                <br/>
                <div>
                    <input placeholder="Author" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder="Location" value={address} onChange={(e) => setAddress(e.target.value)} id="post_address" />
                </div>
                <br />
                <div>
                    <textarea value={description} placeholder="Description" onChange={(e) => setDescritpion(e.target.value)}></textarea>
                </div>
                <Link to="/postview"><button onClick={uploadPost} id="post_btn">Post</button></Link>
            </div>
        </>
    );
}

export default Post;