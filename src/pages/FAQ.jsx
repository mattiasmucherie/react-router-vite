import { Link, Outlet } from "react-router-dom";

function FAQ() {
  return (
    <>
      <ul>
        <li>
          <Link to="/faqs/faq1">FAQ1</Link>
        </li>
        <li>
          <Link to="/faqs/faq2">FAQ2</Link>
        </li>
        <li>
          <Link to="/faqs/faq3">FAQ3</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default FAQ;
