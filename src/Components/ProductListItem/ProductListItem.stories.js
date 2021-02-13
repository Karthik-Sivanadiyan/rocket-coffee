import React from "react"
import ProductListItem from "./ProductListItem";
import { action } from '@storybook/addon-actions'

// Import Knobs, and register it as a decorator in our story options
import { text, withKnobs } from '@storybook/addon-knobs'
// The story options object is our default export that previously contained the story’s title
export default { title: "ProductListItem", decorators: [withKnobs] }

// Knobs are a fantastic way to interact with our components
export const standard = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action("Add to cart clicked")}
    imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")}
  />
)

// Lets use new story present sold out component instead of boolean knob
export const soldOut = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action("Add to cart clicked")}
    imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")}
    isSoldOut={true}
  />
)

export const onSale = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action("Add to cart clicked")}
    imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")}
    isOnSale={true}
  />
)