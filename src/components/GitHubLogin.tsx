import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/GitHubLogin.module.css';

export function GitHubLogin() {
  const { handleOnChangeUsername, handleOnClickLoginUsername } = useContext(LoginContext);

  return (
    <div className={styles.GitHubLoginContainer}>
      <header>
        <img src="/logo-negativa.svg" />
      </header>

      <main>
        <strong>Bem-vindo</strong>
        <div>
          <img src="/icons/github.svg" />
          <p>Faça login com seu Github para começar</p>
        </div>
      </main>

      <footer>
        <input 
          type="text" 
          placeholder="Digite seu username" 
          onChange={e => handleOnChangeUsername(e)}
        />
        <button
          type="button"
          onClick={handleOnClickLoginUsername}
        >
          <img src="/icons/seta.svg" />
        </button>
      </footer>
    </div>
  );
}