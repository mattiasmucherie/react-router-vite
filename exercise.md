# Welcome to the exercise

## Part 1

- Create a new page component called `<About/>` page in the folder pages
- Add include it in `<App>` with the `<Route exact path="/about" />`
- Add a link for it in Header.js
- Now navigate to it with the header links

## Part 2

- Create a new page component called `<FAQs/>` page in the folder pages
- In the component there should be three <Link>s
  - `/faqs/faq1`, `/faqs/faq2`, `/faqs/faq3`
- Add include it in `<App>` with the path="/faqs"
- Add a link for it in Header.js for "/faqs"
- Add three other <Route>s for faq1, faq2, faq3 that renders a <p>faq1</p>, <p>faq2</p>, <p>faq3</p>

## Part 3

- Can we move the FAQ sub routes into the Parent FAQ page component instead?

## Part 4

- In the FAQ page component, can we renter out sub <Route>s from an array with links?

## Part 5

- Now add some extra links your array that are sub paths of the faq subpath something like this:
  - `faq1/sub-faq`, `faq2/sub-faq`, `faq3/sub-faq`,

## Part 6

- Now both the `faq1` content and the `faq1/sub-faq` content is showing
- Lets wrap our <Route> loop with a <Switch> component

## Part 7

- As you can se now the sub sub will never render :/
- Lets divide our array into subFaqs[] and subSubFaqs[]
- First loop out subSubFaqs[] and then loop out subFaqs[]

## Part 8

- Could we have solved this issue by just nesting our routes like this:

```jsx
<Route path="/faq1">
  <p>FAQ 1</p>
  <Route path="/faq1/sub-faq">
    <p>Sub FAQ 1</p>
  </Route>
</Route>
```

- Try it out :)

## Part 9

- If we add a <Route> where `path="*"` at the bottom of our routes in App.js that equals nothing found
- Create a page component called 404.js and if no routes match render that page
