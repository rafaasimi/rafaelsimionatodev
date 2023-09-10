'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { ArrowLeft } from 'phosphor-react';
import { Avatar } from '@/components/Avatar';
import { LINGUAGENS } from '../../utils/linguagens';
import Image from 'next/image';

import logoSicrediImg from '@/assets/empresas/sicredi.png';
import logoCompassUolImg from '@/assets/empresas/compassuol.svg';
import logoDpaBrasilImg from '@/assets/empresas/dpabrasil.png';

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <div className={styles.navigation}>
        <Link href="/">
          <ArrowLeft size={32} />
          Sobre
        </Link>
      </div>

      <Avatar
        url="https://www.github.com/rafaasimi.png"
        alt="Rafael Simionato"
      />

      <div className={styles.description}>
        <p>
          Olá, me chamo <strong>Rafael Simionato Zorzenon</strong>, sou
          desenvolvedor front-end com foco em aplicações web e UI designer.
          Atualmente trabalhando como <strong>Engenheiro de Software</strong> no{' '}
          <strong>Sicredi</strong>.
        </p>
      </div>

      <div className={styles.linguagensContainer}>
        <h2>Linguagens</h2>
        <div>
          {LINGUAGENS.map((linguagem) => (
            <span key={linguagem}>{linguagem}</span>
          ))}
        </div>
      </div>

      <div className={styles.empresasContainer}>
        <h2>Empresas</h2>
        <div>
          <a
            href="https://www.sicredi.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoSicrediImg} alt="Sicredi" />
          </a>
          <a
            href="https://compass.uol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoCompassUolImg} alt="Compass UOL" />
          </a>
          <a
            href="https://www.dpabrasil.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoDpaBrasilImg} alt="DPA Brasil" />
          </a>
        </div>
      </div>
    </div>
  );
}
