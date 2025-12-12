Reflection:

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

