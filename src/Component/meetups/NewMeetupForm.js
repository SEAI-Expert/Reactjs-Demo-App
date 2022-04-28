import Card from "../ui/Card";
import obj from "./NewMeetupForm.module.css";
import {useRef} from 'react';

export default function NewMeetupForm (props){

    // useref is used to fetch the entered values in the form 

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event){  
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value; 

        // Creating an object of dataset
        const metaData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.addFormData(metaData);
    }

    return<>
    <Card>
        <form className={obj.form} onSubmit={submitHandler}>
            <div className={obj.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>

            <div className={obj.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>

            <div className={obj.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>

            <div className={obj.control}>
                <label htmlFor='description'>Description</label>
                <textarea required id='image' rows='5' ref={descriptionInputRef}></textarea>
            </div>

            <div className={obj.actions}>
                <button>Add Meetup</button>
            </div>
        </form>

    </Card>
    </>
}

