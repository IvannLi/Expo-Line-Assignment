import style from '../styles/Home.module.css'

export default function Header(){
    return <div className={style.header}>
        <img className={style.logo} src='/translink.svg' alt='Logo'/>
        <span className={style.title}>Expo Line</span>
    </div>
}

