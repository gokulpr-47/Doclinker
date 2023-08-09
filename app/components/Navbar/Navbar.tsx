import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className="h-12 md:h-16 sm:h-14 lg:h-24 flex flex-row justify-end items-center">
      <div className="flex w-[500px] justify-around">
        <Link className={styles.link} href="/dahsboard">
          GITHUB
        </Link>
        <Link className={styles.link} href="/">
          ABOUT US
        </Link>
        <Link className={styles.link} href="/">
          FRIENDS
        </Link>
        <Link className={styles.link} href="/">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}
