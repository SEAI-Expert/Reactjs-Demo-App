import obj from './Layout.module.css';
import MainNavigation from './MainNavigation';

export default function Layout(props){
    return <>
    <div>
        <MainNavigation />
        <main className={obj.main}>
            {props.children}
        </main>
    </div>
    </>
}