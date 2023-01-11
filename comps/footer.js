import style from '../styles/Home.module.css'

export default function Footer(){
    return <div className={style.footer}>
        <a href='https://github.com/IvannLi/Expo-Line-Assignment'>
            <img className={style.git} src='/github-icon.svg'/>
        </a>
    </div>
}

