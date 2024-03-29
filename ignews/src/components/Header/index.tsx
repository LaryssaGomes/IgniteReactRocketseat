/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SingnInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
