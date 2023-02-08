import React, { ReactElement } from "react";
import AppHeader from "@components/shared/header";
import AppFooter from "@components/shared/footer";
interface DefaultProps {
  children?: ReactElement;
}

const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
