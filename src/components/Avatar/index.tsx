import Image from 'next/image';
import styles from './styles.module.scss';

interface AvatarProps {
  url: string;
  alt?: string;
}

export function Avatar({ url, alt = '' }: AvatarProps) {
  return (
    <div className={styles.avatarContainer}>
      <Image
        src={url}
        alt={alt}
        width={200}
        height={200}
      />
    </div>
  );
}
