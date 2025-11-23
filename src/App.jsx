import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./component/Homepage";
import About from "./component/About";
import PageWrapper from "./component/PageWrapper";

import "./App.css";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Projects from "./component/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <PageWrapper>
          <Homepage />
        </PageWrapper>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <PageWrapper>
          <About />
        </PageWrapper>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <PageWrapper>
          <Contact />
        </PageWrapper>
      </>
    ),
  },
  {
    path: "/project",
    element: (
      <>
        <Navbar />
        <PageWrapper>
          <Projects />
        </PageWrapper>
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
