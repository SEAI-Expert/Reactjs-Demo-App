import obj from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props){
    console.dir(props)
    return <>
    <li className={obj.item}>
        <Card>
            <div className={obj.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={obj.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={obj.actions}>
                <button>To Favorites</button>
            </div>
        </Card>
    </li>
    </>
}

export default MeetupItem;