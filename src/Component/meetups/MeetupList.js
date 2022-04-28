import MeetupItem from './MeetupItem';
import obj from './MeetupList.module.css';

export default function MeetupList(props) {
    return <>
    <ul className={obj.list}>
        {props.meetups.map((item) => (
            <MeetupItem 
                key={item.id}
                image={item.image} 
                title={item.title}
                address={item.address}
                description={item.description}
                />
                ))}
    </ul>
    </>

}

