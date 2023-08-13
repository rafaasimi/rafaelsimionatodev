import Link from 'next/link';
import { Avatar } from '@/components/Avatar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Avatar
        url="https://www.github.com/rafaasimi.png"
        alt="Rafael Simionato"
      />

      <div className={styles.description}>
        <h2>Rafael Simionato</h2>
        <p>Desenvolvedor Web Front-end & UI Designer</p>
      </div>

      <div className={styles.navigation}>
        <Link href="/sobre">
          <h3>Sobre</h3>
          <p>Um pouco sobre meus conhecimentos e trajetória.</p>
        </Link>

        <Link href="/projetos">
          <h3>Projetos</h3>
          <p>Alguns projetos realizados em cursos e bootcamps da comunidade.</p>
        </Link>

        <Link href="/" className={styles.notAllowed}>
          <h3>Blog</h3>
          <p>Conteúdos que acho interessante de serem compartilhados.</p>
        </Link>

        <a href="https://www.linkedin.com/in/rafaelzorzenon/" target="_blank">
          <h3>Linkedin</h3>
          <p>Quer falar comigo? Responderei mais rápido no Linkedin.</p>
        </a>
      </div>
    </main>
  );
}
