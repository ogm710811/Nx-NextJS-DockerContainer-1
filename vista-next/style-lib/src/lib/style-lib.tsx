import styles from './style-lib.module.scss';

/* eslint-disable-next-line */
export interface StyleLibProps {}

export function StyleLib(props: StyleLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StyleLib!</h1>
    </div>
  );
}

export default StyleLib;
