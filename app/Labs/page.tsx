import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Chandan Gowda Keelara Shivanna</p>
      <p>CS 5610 FALL 2025 Web Development</p>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="https://github.com/virtual457/kambaz-next-js" id="wd-github">
            My GitHub Repository
          </Link>
        </li>
      </ul>
    </div>
  );
}