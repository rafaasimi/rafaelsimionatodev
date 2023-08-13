import Image from "next/image";
import styles from "./styles.module.scss"


export function Avatar() {
  return (
    <div className={styles.avatarContainer}>
      <Image src='https://www.github.com/rafaasimi.png' alt="Rafael Simionato" width={200} height={200}/>
    </div>
  )
}