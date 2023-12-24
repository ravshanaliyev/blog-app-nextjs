import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image style={{ borderRadius: "50%" }} src="/style.png" alt="" width={32} height={32} />
                    style
                </Link>
                <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
                    <Image style={{ borderRadius: "50%" }} src="/fashion.png" alt="" width={32} height={32} />
                    fashion
                </Link>
                <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
                    <Image style={{ borderRadius: "50%" }} src="/coding.png" alt="" width={32} height={32} />
                    coding
                </Link>
                <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
                    <Image style={{ borderRadius: "50%" }} src="/travel.png" alt="" width={32} height={32} />
                    travel
                </Link>
                <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
                    <Image style={{ borderRadius: "50%" }} src="/food.png" alt="" width={32} height={32} />
                    food
                </Link>
                <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
                    <Image style={{ borderRadius: "50%" }} src="/culture.png" alt="" width={32} height={32} />
                    culture
                </Link>
                <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
                    <Image style={{ borderRadius: "50%" }} src="/coding.png" alt="" width={32} height={32} />
                    coding
                </Link>
            </div>
        </div >
    )
}

export default CategoryList