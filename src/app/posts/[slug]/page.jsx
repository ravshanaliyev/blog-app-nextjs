import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/src/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/src/components/comments/Comments'
const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quis.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}> - 10.03.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <p className={styles.postText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam quis, iste vel quidem corrupti iure aliquam? Ipsum ratione iure rem beatae impedit maxime. Vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil accusamus perspiciatis, quos voluptates fugit earum rem odio enim reprehenderit, eveniet vel eum quis quia cum nisi. Sunt unde officia quae, ullam nemo voluptates tempora natus voluptatem optio, laboriosam rerum.
                    </p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <p className={styles.postText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam quis, iste vel quidem corrupti iure aliquam? Ipsum ratione iure rem beatae impedit maxime. Vel.
                    </p>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage