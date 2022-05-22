import Image from "next/image";
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                 <div className={styles.profile}>
                     <Link href="/login">
                        <Image src="/img/profile.png" alt="" width="55" height="55"/>
                     </Link>
                 </div>
                 <div className={styles.texts}>
                     <div className={styles.text}>COMANDA ONLINE SAU TELEFONIC</div>
                     <div className={styles.text}>074 709 1311</div>
                 </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/">Homepage</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/meniu">Meniu</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/produse">Produse</Link>
                    </li>
                    <Image src="/img/logo.png" alt="" width="160px" height="150px" />
                    <li className={styles.listItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">Despre</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href="/cart">
                        <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
                    </Link>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar