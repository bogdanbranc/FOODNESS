import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart = () =>{
    return (
        <div className={styles.container}>
           <div className={styles.left}>
               <table className={styles.table}>
                   <tbody>
                   <tr className={styles.tr}>
                       <th>Produs</th>
                       <th>Nume</th>
                       <th>Extras</th>
                       <th>Pret</th>
                       <th>Cantitate</th>
                       <th>Total</th>
                   </tr>
                   <tr className={styles.tr}>
                       <td>
                          <div className={styles.imgContainer}>
                              <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt=""/>
                          </div>
                       </td>
                       <td>
                           <span className={styles.name}>Bogdan</span>
                       </td>
                       <td>
                           <span className={styles.extras}>Meniu 20x</span>
                       </td>
                       <td>
                           <span className={styles.price}>1560 RON</span>
                       </td>
                       <td>
                           <span className={styles.quantity}>1</span>
                       </td>
                       <td>
                           <span className={styles.total}>1560 RON</span>
                       </td>
                   </tr>
                   </tbody>
               </table>
           </div>
           <div className={styles.right}>
               <div className={styles.wrapper}>
                   <h2 className={styles.title}>CART TOTAL</h2>
                   <div className={styles.totalText}>
                       <b className={styles.totalTextTitle}>Subtotal:</b>1560 RON
                   </div>
                   <div className={styles.totalText}>
                       <b className={styles.totalTextTitle}>Discout:</b>0 RON
                   </div>
                   <div className={styles.totalText}>
                       <b className={styles.totalTextTitle}>Total:</b>1560 RON
                   </div>
                   <button className={styles.button}>PLATESTE</button>
               </div>
           </div>
        </div>
    )
}

export default cart;