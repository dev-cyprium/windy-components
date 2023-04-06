import { Layout, LinkGroup } from "@windy-components/core";

function Sidebar() {
  return (
    <>
      <h1>Windy Components</h1>

      <LinkGroup title="Components">
        <a href="#">Button</a>
        <a href="#">Input</a>
        <a href="#">Select</a>
      </LinkGroup>

      <LinkGroup className="mt-auto" title="Other">
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </LinkGroup>
    </>
  );
}

function App() {
  return <Layout title="My Admin Page" sidebar={<Sidebar />}></Layout>;
}

export default App;
