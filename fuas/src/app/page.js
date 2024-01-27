"use client";
import styles from "./page.module.css";
import "./globals.css";
import "./static/main.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="content_wrap">
        <div className="header">
          <h1 className="title">
            Fusion Room <br /> Apply Service
          </h1>
          <p className="subTitle">
            <span className="briket"> [ </span> 모두의 융합실을 위하여 <span className="briket"> ] </span>
          </p>
        </div>

        <button type="button" className="startBtn" onClick={() => (location.href = "/selectPosition")}>
          Get Started
        </button>
      </div>
    </main>
  );
}
