import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
function ImageArea() {
  return (
    <div className={styles.container}>
    <Image
      
      src="/editorImage.png"
      alt="Picture of the author"
      width={1264}
      height={750}
    />
    </div>
  )
}

export default ImageArea