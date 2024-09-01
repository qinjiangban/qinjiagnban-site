import Image, { ImageProps } from 'next/image'
import styles from '../css/ThemeImagetheme-image.module.css'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
}
 
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} src={srcLight} className={styles.imgLight} />
      <Image {...rest} src={srcDark} className={styles.imgDark} />
    </>
  )
}
 export default ThemeImage