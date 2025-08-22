import React from "react";
import './buildCV.css';

function BuildCV() {

    return (
        <>
            <div className="bCVContainer">
                <div className="bCVHeader">
                    <h2>Welcome to Build Your CV</h2>
                </div>
                <div className="bCVMenu">
                    <a href="#">Home</a><br />
                    <a href="#">Build Your CV</a><br />
                    <a href="#">Get My CV</a>
                </div>
                <div className="bCVContent">
                    <h3></h3>
                    <p></p>
                </div>
                <div className="bCVFooter">
                    <h4>Copyright 2025. All Rights Reserved.</h4>
                </div>
            </div>
        </>
    );
}

export default BuildCV;