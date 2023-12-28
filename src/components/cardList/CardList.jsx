import React from 'react'
import styles from './cardList.module.css'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'

const getData = async (page, cat) => {
    const response = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    return await response.json();
}
const CardList = async ({ page, cat }) => {
    const { posts, count } = await getData(page, cat);

    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList