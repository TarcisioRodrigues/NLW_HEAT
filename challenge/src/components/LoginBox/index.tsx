import styles from './styles.module.scss'
import {VscGithub} from 'react-icons/vsc'
export function LoginBox(){
    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe a sua mensagem</strong>
            <a href="" className={styles.signInWIthGithub}>
                <VscGithub size="24"/>
                Entrar com github
            </a>
        </div>
    )
}