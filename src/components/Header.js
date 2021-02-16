import React from 'react';
import { Link } from "react-browser-router";

const Header = () => {
    return (
        <div className='header'>

            <Link className='routingButtons homeButton' to='/'>Home</Link>

            <Link className='routingButtons' to='/Countdown'>Countdown</Link>

            <Link className='routingButtons' to='/ImgUploader'>Image Uploader</Link>

            <Link className='routingButtons' to='/ToDoList'>To Do List</Link>
                               
        </div>
    )
};

export default Header;