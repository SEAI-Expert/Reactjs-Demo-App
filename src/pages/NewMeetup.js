import NewMeetupForm from '../Component/meetups/NewMeetupForm';
import { useNavigate } from "react-router-dom";

function NewMeetupPage(){
    const navigate = useNavigate();

    function addFormDataHandler(metaData){
        // it is built in function utilized to send the http requests
        fetch(
            'https://getting-started-react-a77b3-default-rtdb.firebaseio.com/Meetups.json',
            {
                method: 'POST',

                // JSON is javascript built in funnction to convert objects, arrays or string to json format
                body: JSON.stringify(metaData),
                headers: {
                    'Content-Type': 'Application/json'
                }
            }
        ).then(()=>{
            navigate('/');
        });

    }

    return (<>
        <section>
            <h1>New Meetups Page</h1>
            <NewMeetupForm addFormData={addFormDataHandler} />
        </section>
    </>);
}

export default NewMeetupPage; 