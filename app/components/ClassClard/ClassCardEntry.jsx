import styles from "./styles.module.css"
import Image from "next/image";
import TextSM from "../Text/TextSM";

export default function ClassCardEntry({iconSrc, label}) {
  return (
    <div className={styles.ClassCardEntry}>
      <Image src={iconSrc} width="12" height="12" />
      <TextSM>{label}</TextSM>
    </div>
  )
}