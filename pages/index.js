import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Typography } from "@mui/material";
import Image from "next/image";
import Layout from "../shared/components/Layout/layout";
import Logo from "../shared/images/logo.png";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nemsesis Dao - Community Project</title>
        <meta
          name="description"
          content="Open source Nemesis Dao Community Project"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src={Logo}
          alt="Picture of the author"
          width={350}
          height={350}
        />
        <Typography
        sx={{marginBottom: 5}}
          style={{
            color: "white",
            fontSize: 55,
            fontWeight: 700,
            marginTop: 50,
            textAlign: "center",
          }}
        >
          Community Project
        </Typography>
        <Typography
          style={{
            color: "#fdedda",
            fontSize: 20,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Decentralized Treasury Protocol with <br />
          Reserve Currency
        </Typography>
      </main>
    </Layout>
  );
}
