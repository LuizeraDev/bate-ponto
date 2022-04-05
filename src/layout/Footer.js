import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <footer class="page-footer" className={styles.pageFooter}>
      <div class="footer-copyright">
        <div class="container">
          © 2022 Bate&Ponto - Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;