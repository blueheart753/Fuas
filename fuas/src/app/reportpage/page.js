"use client";
import styles from "../page.module.css";
import ActionBar from "../components/actionBar";

export default function reportPage() {
  return (
    <div className={styles.main}>
      <ActionBar pageTitle="제보방" backUrl="/studentpage" />
    </div>
  );
}
