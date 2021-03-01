import React from 'react';
import { Link } from "react-browser-router";

const Header = () => {
    return (
        <div className='header'>

            <Link className='routingButtons homeButton' to='/'>Home</Link>

            <Link className='routingButtons' to='/Countdown'>Countdown</Link>

            <Link className='routingButtons' to='/ImgUploader'>Image Uploader</Link>

            <Link className='routingButtons' to='/ToDoList'>To Do List</Link>

            <Link className='routingButtons' to='/ApiList'>API Lists</Link>

            <Link className='routingButtons' to='/SliderList'>Slider lists</Link>
                               
        </div>
    )
};

export default Header;