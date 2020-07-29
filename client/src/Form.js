import React from 'react';

export default (props) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div>
            <ErrorsDisplay errors={errors} />
            <form onSubmit={handleSubmit}>
                {elements()}
                <div className="grid-100 pad-bottom">
                    <button className="button" type="submit">{submitButtonText}</button>
                    <button className="button button-secondary" onclick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}}

function ErrorsDisplay({errors}){
    let errorsDisplay = null;
    if(errors.length) {
        errorsDisplay = (
            <div>
                <h2 className="validation--errors--label">validation errors</h2>
                <div className="validation-errors">
                    <ur>
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ur>
                </div>
            </div>
        );
    }
    return errorsDisplay;
}
