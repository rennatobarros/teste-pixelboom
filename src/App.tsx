import { FunctionComponent } from "react";
import { Layout } from "./layout/default.component";
import { Users } from "./components/pages/users/users";

export const App: FunctionComponent = () => {
  return (
    <Layout>
      <Users />
    </Layout>
  );
};
