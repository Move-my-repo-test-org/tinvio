import React from 'react';
import '../css/form.css';

function Form() {

    const [name, setName] = React.useState('');
    const [businessName, setBusinessName] = React.useState('');
    const [countryCode, setCountryCode] = React.useState('');
    const [telNumber, setTelNumber] = React.useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBusinessName = (e) => {
        setBusinessName(e.target.value);
    }

    const onChangeCountryCode = (e) => {
        setCountryCode(e.target.value);
    }

    const onChangeTelNumber = (e) => {
        setTelNumber(e.target.value);
    }

    return (
        <div className="form-wrapper">
            <h3 className="section-subtitle form-title">Hi, we are Tinvio! And you?</h3>
            <form id="getStarted-form" onSubmit={ (e) => { e.preventDefault() } }>
                <input type="text" className="text-input" name="name" value={ name } placeholder="Name" onChange={ onChangeName } />
                <input type="text" className="text-input" name="business-name" value={ businessName } placeholder="Business Name" onChange={ onChangeBusinessName } />
                <div className="telephone-input-block">
                    <input type="text" className="country-code-input" name="country-code" value={ countryCode } placeholder="+65" onChange={ onChangeCountryCode } />
                    <input type="text" className="tel-number-input" name="tel-number" value={ telNumber } placeholder="" onChange={ onChangeTelNumber } />
                </div>
                <div className="btns-block">
                    <button type="submit" className="getStarted-btn" >Get Started</button>
                    <p className="btn-comment">No spam, promise <span>🙌</span></p>
                </div>
            </form>
        </div>
    )
}

export default Form;
