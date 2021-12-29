import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Custom404() {
  return (
    <Layout>
      <>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </>
    </Layout>
  );
}
