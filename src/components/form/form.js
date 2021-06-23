import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form'

import styles from './form.module.scss';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

let Form = (props) => {
    
    const [type, setType] = useState('');

    const { handleSubmit } = props;

        return (
        <Container maxWidth='sm'>
            <Typography    
                component="div" 
                style={{ 
                    backgroundColor: '#cfe8fc',
                    height: '100%' 
                }}>
                <form 
                    className={styles.form} 
                    onSubmit={handleSubmit} 
                >
                    <div className={styles.formControl}>
                        <label htmlFor="name">Dish Name</label>
                        <Field 
                            name="name" 
                            component="input" 
                            type="text" 
                            className={styles.formInput} 
                            required 
                            maxLength="25"
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="preparation_time">Dish preparation time</label>
                        <Field 
                            name="preparation_time" 
                            component="input" 
                            type="time" 
                            min="00:00:01" 
                            max="06:00:00" 
                            step="1" 
                            className={styles.formInput} 
                            required
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="type">Your dish type</label>
                        <Field 
                            name="type" 
                            component="select" 
                            onChange={(event) => setType( event.target.value )} 
                            className={styles.formInput} 
                            required
                        >
                            <option />
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="sandwich">Sandwich</option>
                        </Field>
                    </div>
                    <div>
                        {(() => {
                            switch(type) {
                                case 'pizza':
                                    return (
                                        <div className={styles.field}>
                                           <div className={styles.formControl}>
                                                <label htmlFor="no_of_slices" >How many slices Your pizza have?</label>
                                                <Field 
                                                    name="no_of_slices" 
                                                    component="input" 
                                                    type="number" 
                                                    min="1" 
                                                    max="8" 
                                                    className={styles.formInput} 
                                                    required 
                                                />
                                            </div>
                                            <div className={styles.formControl}>
                                                <label htmlFor="diameter">How long is your pizza diameter?</label>
                                                <Field 
                                                    name="diameter" 
                                                    component="input" 
                                                    type="number" 
                                                    min="0.1" 
                                                    max="30" 
                                                    step="0.1" 
                                                    className={styles.formInput} 
                                                    required
                                                />
                                            </div>
                                        </div>
                                    )
                                case 'sandwich':
                                    return (
                                        <div className={styles.formControl}>
                                            <label htmlFor="slices_of_bread">How many bread slices You have?</label>
                                            <Field 
                                                name="slices_of_bread" 
                                                component="input" 
                                                type="number" 
                                                min="1" 
                                                max="6" 
                                                className={styles.formInput} 
                                                required
                                            />
                                        </div>
                                    )
                                case 'soup':
                                    return (
                                        <div className={styles.formControl}>
                                           <label htmlFor="spiciness_scale">How spicy is Your soup? (scale 1 - 10)</label>
                                            <Field 
                                                name="spiciness_scale" 
                                                component="input" 
                                                type="number" 
                                                min="1" 
                                                max="10" 
                                                className={styles.formInput} 
                                                required
                                            />
                                        </div>
                                    )
                                default:
                                    return (null)
                            }
                        })()}
                    </div>
                    <Button 
                        type="submit"
                        variant="outlined"
                        style={{
                            background: '#ffffff',
                            margin: '12px auto'
                        }}>
                        Submit
                    </Button>
                </form>
            </Typography>
        </Container>
)};

Form = reduxForm({
    form: 'dishes'
})(Form)

export default Form;