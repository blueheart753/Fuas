"use client";
import styles from "../page.module.css";
import '../globals.css'
import ActionBar from "../components/actionBar";
import Report from '../components/report'
import '../static/report.css'

export default function reportPage() {
  return (
    <div className={styles.main}>
      <ActionBar pageTitle="제보방" backUrl="/studentpage" />
      <Report/>
    </div>
  );
}
