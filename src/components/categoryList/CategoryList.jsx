import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const getData = async () => {
    const response = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    return await response.json();
}
const CategoryList = async () => {
    const data = await getData()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {
                    data.map((category) => (
                        <Link key={category._id} href={`/category/${category.slug}`} className={`${styles.category} ${styles.style}`}>
                            <Image style={{ borderRadius: "50%" }} src={category.img} alt="" width={32} height={32} />
                            {category.title}
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default CategoryList