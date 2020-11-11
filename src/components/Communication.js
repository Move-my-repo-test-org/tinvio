import React from 'react';
import communicationImg from '../assets/images/communication-image.png';
import goodCommunication from '../assets/images/goodCommunication-image.png';
import '../css/communication.css';

function Communication() {

    const [communicationType, setCommunicationType] = React.useState("before");

    return (
        <section className="communication">
            <div className="container">
                <div className="communication-img-container">
                    <img className={communicationType === 'before' ? "communication-img" : "goodCommunication-img"} src={ communicationType === 'before' ? communicationImg : goodCommunication } alt="screenshot of communication" />
                </div>
                <div className="communication-text-block">
                    <h2 className="section-header communication-header">Communication</h2>
                    <div className="communication-btns-block">
                        <button className={ communicationType === 'before' ? "communication-btn active" : "communication-btn" } onClick={ () => {setCommunicationType('before')} }>BEFORE</button>
                        <button className={ communicationType === 'before' ? "communication-btn" : "communication-btn active" } onClick={ () => {setCommunicationType('after')} }>AFTER</button>
                    </div>
                    <hr />
                    <h3 className="section-subtitle communication-subtitle">{ communicationType === 'before' ? "Old-School Chaos" : "New method" }</h3>
                    <p className="section-text communication-text">{ communicationType === 'before' ? "Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes" : "Structured orders income from one app together without any spam" }</p>
                </div>
            </div>
        </section>
    )
}

export default Communication;