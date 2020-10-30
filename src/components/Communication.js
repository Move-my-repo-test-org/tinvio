import React from 'react';
import communicationImg from '../assets/images/communication-image.png';
import goodCommunication from '../assets/icons/heart.png';

function Communication() {

    const [communicationType, setCommunicationType] = React.useState("before");

    return (
        <section className="communication">
            <div className="container">
                <img className="communication-img" src={ communicationType === 'before' ? communicationImg : goodCommunication } alt="screenshot of communication" />
                <div className="communication-text-section">
                    <h2 className="section-header communication-header">Communication</h2>
                    <div className="communication-btns-block">
                        <button className={ communicationType === 'before' ? "communication-btn active" : "communication-btn" } onClick={ () => {setCommunicationType('before')} }>BEFORE</button>
                        <button className={ communicationType === 'before' ? "communication-btn" : "communication-btn active" } onClick={ () => {setCommunicationType('after')} }>AFTER</button>
                    </div>
                    <hr />
                    <h3 className="section-subtitle communication-subtitle">{ communicationType === 'before' ? "Old-School Chaos" : "New method" }</h3>
                    <p className="section-text communication-text">{ communicationType === 'before' ? "Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes" : "Structured orders from one app" }</p>
                </div>
            </div>
        </section>
    )
}

export default Communication;