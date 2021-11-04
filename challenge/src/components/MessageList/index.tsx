import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
export function MessageList(){
    return(
        
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="logo" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem para transformá-lo naquilo que você quer que ele seja.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/TarcisioRodrigues.png" alt="" />
                        </div>
                        <span>Tarcisio Rodrigues</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem para transformá-lo naquilo que você quer que ele seja.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/TarcisioRodrigues.png" alt="" />
                        </div>
                        <span>Tarcisio Rodrigues</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem para transformá-lo naquilo que você quer que ele seja.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/TarcisioRodrigues.png" alt="" />
                        </div>
                        <span>Tarcisio Rodrigues</span>
                    </div>
                </li>
                
            </ul>

        </div>
    )
}

