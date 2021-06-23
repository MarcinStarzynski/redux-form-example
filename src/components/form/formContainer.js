import React from 'react';
import Form from './form';

class FormPage extends React.Component {
    state = {
        id: 0,
        error: ''
    }

    submit = values => {
        console.log(values)

        let id = this.state.id;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...values, id })
        };

        this.setState({ id: id + 1 })

        values.name = '';
        values.preparation_time = '00:00:00';
        values.type = '';
        values.spiciness_scale = '';
        values.no_of_slices = '';
        values.diameter = '';
        values.slices_of_bread = '';

        fetch('https://cool-river-3464.getsandbox.com/users', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        
    }
    render() {
        return <Form onSubmit={this.submit} />
    }
}

export default FormPage;