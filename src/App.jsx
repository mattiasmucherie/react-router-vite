import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import { Home } from "./pages/Home";

const subFaq = [
  {
    path: "faq1",
    content: <p>faq1</p>,
  },
  {
    path: "faq2",
    content: <p>faq2</p>,
  },
  {
    path: "faq3",
    content: <p>faq3</p>,
  },
];

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faqs" element={<FAQ />}>
          {subFaq.map((sub) => {
            return (
              <Route key={sub.path} path={sub.path} element={sub.content} />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
