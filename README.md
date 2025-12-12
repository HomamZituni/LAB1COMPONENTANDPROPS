                                                                                                                        ##Reflection

1.) How did you handle optional props in your components? 
By using the `?` operator to mark props as optional and provided default values in the component destructuring. Using the `&&` operators also conditionally rendered elements and the close button only appears when `OnClose` is provided. 

2.) What considerations did you make the designing the component interfaces? 
I focused on reusability by separating data props like user and product objects from display control pops like showEmail and showDescription. Optional callbacks were also included like `onEdit` and `onAddtoCart` to allow parent components
to determine where the feature is needed based on the instructions. 

3.) How did you ensure type safety across your components?
By defining all interfaces in the index.ts and imported them with type-only imports. TypeScript enforces that all required props are passed and prop types match the interface definitions. which allows
errors to be caught at compile time. 

4.) What challenges did you face when implementing component composition? 
How to pass and render the `children` pop correctly. How to import the SVGs in correctly was also a huge challene. Figuring out the type-only imports to get the SVGs and other components to work properly on my webpage. 

                                                                                                                    ##Example usage snippets

###AlertBox Example: 
// Basic success alert
<AlertBox type="success" message="Operation completed!" />

// Error alert with close button
<AlertBox type="error" message="Failed to save" onClose={() => console.log('closed')} />

// Warning with extra content
<AlertBox type="warning" message="Session expiring">
<small>Please save your work.</small>
</AlertBox>

The type prop consoltr styling. onClose is optional and a close button appears when called. children allow additional content to be displayed below the message.


###UserProfileCard Example:
// Full profile with edit button
<UserProfileCard
user={userData}
showEmail={true}
showRole={true}
onEdit={(id) => handleEdit(id)}
/>

// Minimal profile
<UserProfileCard user={userData} showEmail={false} showRole={false} />

showEmail and showRole are defaulted to true. Pass onEdit callback to show an edit button. children can be used for extra profile details 


###ProductDisplay Example:
// Full product with add-to-cart
<ProductDisplay
product={productData}
showDescription={true}
showStockStatus={true}
onAddToCart={(id) => addToCart(id)}
/>
// Minimal product display
<ProductDisplay product={productData} showDescription={false} />

showdescription and showStockStatus default to true. The add to car button only appears when onAddtoCar is provided and disabled when out of stock.
