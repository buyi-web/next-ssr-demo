import Link from "next/link";
import { useRouter } from "next/router";
import styles from './index.module.css'
export default () => {
  console.log(styles);
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <ul className={styles.navs}>
          <li>
            <Link href="/">
              <a>首页</a>
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <a>电影</a>
            </Link>
          </li>
          <li>
            <Link href="/movies/[id]" as="/movies/3">
              <a>电影详情页</a>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                router.push("/movies[...params]", "/movies/a/b/c");
              }}
            >
              跳转到 [...params].jsx
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.headerRight}>
          <img src="/head-pic.jpg" alt="头像" />
      </div>
    </div>
  );
};
