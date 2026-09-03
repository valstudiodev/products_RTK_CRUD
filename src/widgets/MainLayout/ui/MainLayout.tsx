import Page from "@/shared/primitives/Page/Page";
import Wrapper from "@/shared/primitives/Wrapper/Wrapper";
import { Outlet } from "react-router";
import Header from "../../Header/ui/Header";
import Footer from "../../Footer/ui/Footer";
import '../model/_mainLayoutStyles.scss';

function MainLayout(): React.JSX.Element {
  return (
    <Wrapper className="wrapper">
      <Header />
      <Page className="page">
        <Outlet />
      </Page>
      <Footer />
    </Wrapper>
  );
}

export default MainLayout;