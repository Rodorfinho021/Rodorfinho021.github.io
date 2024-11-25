import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Meu Titulo</h1>
      <Image className={styles.img} src="/images/dino.png" alt='dinossauro' width={800} height={400}/>
      
    </div>
  );
}
