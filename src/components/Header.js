import React from 'react';
import { Link } from "react-browser-router";
import headerLogo from "../images/3DLogo.png"

const Header = () => {
    return (
        <div className='header'>

            <Link className='routingButtons homeButton' to='/'>            
                <img className="headerLogo" src={headerLogo} />
            </Link>

            <Link className='routingButtons' to='/Countdown'>Countdown</Link>

            <Link className='routingButtons' to='/ImgUploader'>Image Uploader</Link>

            <Link className='routingButtons' to='/ApiList'>API Lists</Link>

            <Link className='routingButtons' to='/SliderList'>Slider lists</Link>

            <Link className='routingButtons' to='/Codex'>Lore Codex</Link>

            <Link className='routingButtons' to='/ToDoList1'>Update To Do List</Link>

            <Link className='routingButtons' to='/ToDoList2'>Add taks to To Do List</Link>

            <Link className='routingButtons' to='/ToDoList3'>Simple To Do List</Link>
                               
        </div>
    )
};

export default Header;