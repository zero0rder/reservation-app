import React, { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import DefaultLayout from "@components/layouts/default";

interface AboutProps {}

const About: NextPageWithLayout = () => {
  return (
    <>
      <div>About Us Page.</div>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
