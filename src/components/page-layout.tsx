import * as React from "react";
import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import searchConfig from "./searchConfig";
import {
  ChatHeadlessProvider,
  Environment,
  HeadlessConfig,
} from "@yext/chat-headless-react";
import { ChatPanel, ChatPopUp } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";
type Props = {
  _site: Site;
  children?: React.ReactNode;
};
const searcher = provideHeadless(searchConfig);

const PageLayout = ({ _site, children }: Props) => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="min-h-screen">
        <Header _site={_site} />
        {children}
        <Footer _site={_site}></Footer>
      </div>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
