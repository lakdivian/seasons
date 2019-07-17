import React from 'react';

const Spinner = ({ message }) => {
    return(
        <div class="ui active dimmer">
            <div class="ui large text loader">
                { message }
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message : 'Loading...'
}

export default Spinner;