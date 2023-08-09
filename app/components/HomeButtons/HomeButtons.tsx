"use client";
import styles from "./HomeButtons.module.css";
import { useRouter } from "next/navigation";

export default function HomeButtons() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-6 font-bold text-2xl">DOCLINKER</p>
      <div className="flex flex-col bg-white w-80 h-52 rounded-3xl justify-evenly items-center">
        <button
          type="button"
          className={styles.fileType}
          onClick={() => router.push("/demo")}
        >
          Send File
        </button>
        <button
          type="button"
          className={styles.fileType}
          onClick={() => router.push("/recievefile")}
        >
          Receive File
        </button>
      </div>
    </div>
  );
}
