import React from "react";

export default function Header(props) {
    return(
        <React.Fragment>
                <header className="header margin-medium">
                    <h1 className="margin-small">
                        1815 Rose Gold Chronograph Watch - Brown Croco Strap
                    </h1>
                    <h2 className="margin-small">{props.title}</h2>
                </header>
            {/* <div className="steps">
                <div className="step1">Review</div>
                <div className="step2">Ratings</div>
                <div className="step3">Review</div>
                <div className="step4">Complete</div>
            </div> */}
        </React.Fragment>

    );
}