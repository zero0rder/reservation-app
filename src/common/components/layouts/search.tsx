import React, { ReactElement } from "react";
import AppHeader from "@components/shared/header";

interface SearchLayoutProps {
  children?: ReactElement;
}

const SearchLayout: React.FC<SearchLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default SearchLayout;
