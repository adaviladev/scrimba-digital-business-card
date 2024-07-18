import React from 'react';

export default function Main() {
    return (
        <div className="info">
            <img src="../public/Rectangle-90.png" alt="photo" />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <div className="website-link">
                <a href="">laurasmith.website</a>
            </div>
            
            <div className="email-linkedin">
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>   
            </div>

        </div>
    )
}