import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query';
import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import {
  ArrowLeft,
  GithubLogo,
  Globe,
} from '../../assets/icons/phosphor-icons';

import Image from 'next/image';

interface ProjetosPageProps {
  paginaProjeto: {
    id: string;
    descricao: {
      html: string;
    };
    projetos: {
      id: string;
      github: string;
      site: string;
      titulo: string;
      imagem: {
        id: string;
        url: string;
      };
    }[];
  };
}

function getProjectData(): Promise<ProjetosPageProps> {
  const query = `
    query Projetos {
      paginaProjeto(where: {slug: "projetos"}) {
        id
        descricao {
          html
        }
        projetos {
          id
          github
          site
          titulo
          imagem {
            id
            url
          }
        }
      }
    }
  `;

  return fetchHygraphQuery(query);
}

export default async function Projetos() {
  const { paginaProjeto } = await getProjectData();

  if (!paginaProjeto) return <p>Loading</p>;

  return (
    <div className="projetosContainer">
      <div className={styles.navigation}>
        <Link href="/">
          <ArrowLeft size={32} />
          Projetos
        </Link>
      </div>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: paginaProjeto.descricao.html,
        }}
      />

      <ul className={styles.projectList}>
        {paginaProjeto.projetos.map((projeto) => {
          return (
            <li key={projeto.id}>
              <Image
                width={320}
                height={131}
                src={projeto.imagem.url}
                alt={projeto.titulo}
              />
              <span></span>
              <div>
                <h3>{projeto.titulo}</h3>
                <div className={styles.projectLinks}>
                  {projeto.github && (
                    <a href={projeto.github} target="_new">
                      <GithubLogo size={24} />
                    </a>
                  )}
                  {projeto.site && (
                    <a href={projeto.site} target="_new">
                      <Globe size={24} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
