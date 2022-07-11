import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.contact1}>
              <div className={styles.contact_left}>
                <div className={styles.contact_left_text}>
                  <Subtitle color="black">ESTAMOS A TU SERVICIO</Subtitle>
                  <Title size="medium" color="black" align="left">
                    Contáctanos
                  </Title>
                </div>
                <form action="/send-data-here" method="post">
                  <div className={styles.empresa}>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Empresa"
                    />
                  </div>
                  <div className={styles.nombre}>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className={styles.inps}>
                    <div className={styles.tel}>
                      <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="Telefono"
                      />
                    </div>
                    <div className={styles.email}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className={styles.contact_boton}>
                    <Link type="submit" href="#">
                      <Button type="green"> ENVIAR</Button>
                    </Link>
                  </div>
                </form>
              </div>
              <div className={styles.contact_right}>
                <div className={styles.contact_img}>
                  <Image
                    alt="im1"
                    src="/img/artboard506.png"
                    width={1548}
                    height={955}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_space1}></div>
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footer_img}>
              <Image
                alt="footer"
                src="/img/footer.png"
                width={80}
                height={83}
              />
            </div>
            <div className={styles.flex_footer}>
              <div className={styles.footer_left}>
                <div className={styles.footer_text}>
                  <Subtitle color="black">Contacto</Subtitle>
                  <Paragraph color="black">
                    London Oxford Street, 012 United <br /> Kingdom.
                  </Paragraph>
                  <Paragraph color="black">+032 3456 7890</Paragraph>
                  <Paragraph color="black">Business@moontheme.net</Paragraph>
                </div>
              </div>
              <div className={styles.footer_right}>
                <Subtitle color="black">Email Newsletters</Subtitle>
                <Paragraph color="black">Suscríbete al Newsleter</Paragraph>
                <div className={styles.newsletter_input}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <button>SUSCRÍBETE</button>
                </div>
                <div className={styles.email}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.space}>
          <div className={styles.footer_space}></div>
        </div>
        <div className={styles.footer_down}>
          <div className={styles.container}>
            <div className={styles.flex_footer_down}>
              <div className={styles.foo_left}>
                <Link href="#">
                  <a className={styles.link}>Privacy Policy</a>
                </Link>
                <Link href="#">
                  <a className={styles.link}>Terms and Conditions</a>
                </Link>
                <Link href="#">
                  <a className={styles.link}>Help </a>
                </Link>
                <Link href="#">
                  <a className={styles.link}>Partners</a>
                </Link>
              </div>
              <div className={styles.foo_right}>
                <Link href="https://www.facebook.com">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      alt="facebook"
                      src="/img/facebook-svgrepo-com.svg"
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="twitter"
                    src="/img/gorjeo.png"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="instagram"
                    src="/img/instagram.png"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="youtube"
                    src="/img/youtube.png"
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
