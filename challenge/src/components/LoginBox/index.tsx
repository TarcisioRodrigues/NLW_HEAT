import styles from './styles.module.scss'
import {VscGithub} from 'react-icons/vsc'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth';






export function LoginBox(){
    const {signInUrl}=useContext(AuthContext)
    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe a sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithub size="24"/>
                Entrar com github
            </a>
        </div>
    )
}