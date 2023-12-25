import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';
const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "authenticated" ? (
                    <div className={styles.write}>
                        <textarea className={styles.input}></textarea>
                        <button className={styles.button}>Send</button>
                    </div>
                ) : (
                    <Link href="/login" className={styles.link}>Please log in to comment</Link>
                )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src={"/p1.jpeg"} alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>10.03.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam laborum, laboriosam fugiat nostrum quod esse ea quo vero? Error libero architecto tempora quo molestiae!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments