// import Link from "next/link";
// import styles from "../styles/Layout.module.css";
// import * as React from 'react';

// export default function Layout({ children}) {
// return (  
//     <div>
//     <ul>
//         <li>
//         <Link href="/">
//             <a>Home</a>
//         </Link>
//         </li>
//         <li>
//         <Link href="/about">
//             <a>About Us</a>
//         </Link>
//         </li>
//         <li>
//         <Link href="/blog">
//             <a>Blog</a>
//         </Link>
//         </li>
//         <li>
//         <Link href="/login">
//             <a>Logout</a>
//         </Link>
//         </li>
//     </ul>
//     <div className={styles.container}>{children}</div>
//     </div>
//   );
// }
import Layout from "./index"

function Home() {
return (
    <Layout>
    <div>Homepage</div>
    </Layout>
)
}
export default Home;