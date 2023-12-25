import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = ({ key, item }) => {
    return (
        <div className={styles.container} key={key}>
            {/* {item.img && ( */}
            <div className={styles.imageContainer}>
                <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            {/* )} */}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        22.12.2023 -
                    </span>
                    <span className={styles.category}> Style</span>
                </div>
                <Link href={`/posts/123`}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nesciunt!</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam quis, iste vel quidem corrupti iure aliquam? Ipsum ratione iure rem beatae impedit maxime. Vel.</p>
                <div className={styles.desc} />
                {/* dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }} */}
                <Link href={`/posts/123`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>

    )
}

export default Card