import React from 'react'
import styles from './cardList.module.css'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'

const getData = async (page) => {
    const response = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    return await response.json();
}
const CardList = (page) => {
    const data = getData(page)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList