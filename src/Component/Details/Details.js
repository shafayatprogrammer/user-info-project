import React from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    const { img, name, occupation, age, salary } = props.details;

    return (
        <div className="body">
            <div className="wrapper">
                <div className="box">
                    <div className="box-img">
                        <img src={img} alt="" />
                    </div>


                    <div className="box-text">
                        <h1>{name}</h1>
                        <h4>{occupation}</h4>
                        <small>Age: {age}</small>
                        <p><h3>About</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quas consequuntur, beatae rem tempore voluptatum.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora commodi ex voluptates iure sequi accusantium necessitatibus beatae mollitia excepturi blanditiis.</p>
                        <h5>Salary: ${salary}</h5>
                        <div className="btn">
                            <button
                                className="main-btn"
                                onClick={() => props.handleAddProduct(props.details)}
                            ><FontAwesomeIcon className="icon" icon={faInfoCircle} /> click to add info</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    );
};


export default Details; 