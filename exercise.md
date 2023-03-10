# Welcome to the exercise

## Part 1

- Create a new page component called `<About/>` page in the folder pages
- Add include it in `<App>` with the `<Route exact path="/about" />`
- Add a link for it in Header.jsx
- Now navigate to it with the header links

## Part 2

- Create a new page component called `<FAQs/>` page in the folder pages
- In the component there should be three `<Link>`s
  - `/faqs/faq1`, `/faqs/faq2`, `/faqs/faq3`
- Include it in `<App>` with the path="/faqs"
- Add a link for it in Header.jsx for "/faqs"
- Add three other `<Route>`s for faq1, faq2, faq3 that renders a `<p>faq1</p>`, `<p>faq2</p>`, `<p>faq3</p>` in `App.jsx`

> Hint: Use outlet to be able to see the faq1, faq2, faq3

## Part 3

- Can we render out sub `<Route>`s for faq1, faq2, faq3 by mapping an array of objects?

## Part 4

- In our Header.jsx, replace the `<Link/>` with `<NavLink/>`. Inspect the DOM and add some css to show that we are on a specific page.

> You should see that a class called active has been added.

## Part 5

- If we add a <Route> where `path="*"` at the bottom of our routes in App.jsx that equals nothing found
- Create a page component called 404.jsx and if no routes match render that page.
