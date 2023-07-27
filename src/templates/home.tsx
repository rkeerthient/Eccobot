/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import {
  ChatHeadlessProvider,
  HeadlessConfig,
  Environment,
} from "@yext/chat-headless-react";
import { ChatPanel } from "@yext/chat-ui-react";

export const config: TemplateConfig = {
  name: "home",
};
export const getPath: GetPath<TemplateRenderProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "ECCO | Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};
const botConfig: HeadlessConfig = {
  apiKey: "114fc3561dc13f4d76c3327010ba2cbd",
  botId: "ecco-shoes",
  analyticsConfig: {
    sessionTrackingEnabled: false,
  },
  env: Environment.SANDBOX,
};
const Home: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { _site } = document;

  return (
    <>
      <PageLayout _site={_site}>
        <div className="centered-container my-8">
          <ChatHeadlessProvider config={botConfig}>
            <ChatPanel
              customCssClasses={{
                container: "h-[85vh]",
                messageBubbleCssClasses: {
                  bubble__user: "!bg-none !bg-gray-200 shadow",
                  bubble__bot: "!bg-none !bg-[#d9d6d0]",
                  text__user: " text-black font-semibold",
                  text__bot: " text-black font-semibold",
                },
              }}
            />
          </ChatHeadlessProvider>
        </div>
      </PageLayout>
    </>
  );
};
export default Home;
