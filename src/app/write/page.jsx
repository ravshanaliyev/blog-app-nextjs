"use client"
import React, { useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const Write = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button}><Image src={"/plus.png"} onClick={() => setOpen(!open)} alt="" width={20} height={20} /></button>
                {
                    open && (
                        <div className={styles.add}>
                            <button className={styles.addButton}><Image src={"/image.png"} alt="" width={20} height={20} /></button>
                            <button className={styles.addButton}><Image src={"/external.png"} alt="" width={20} height={20} /></button>
                            <button className={styles.addButton}><Image src={"/video.png"} alt="" width={20} height={20} /></button>
                        </div>
                    )
                }
                <ReactQuill theme="bubble" className={styles.textArea} value={value} onChange={setValue} placeholder='Start writing' />
            </div>
            <button className={styles.publish} >Publish</button>
        </div>
    )
}

export default Write