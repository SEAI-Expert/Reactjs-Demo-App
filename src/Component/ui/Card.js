import obj from './Card.module.css'

export default function Card(props){
    return <div className={obj.card}>
        {props.children}
    </div>
}