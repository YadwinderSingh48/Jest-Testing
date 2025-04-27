// spying --> Keep an eye on the function when its called      
const myModule = require('./spy');

test("should spy on myFunction and check if it was called", () => {
  // Create a spy on the myFunction
  const spy = jest.spyOn(myModule, "myFunction"); // spy on the myFunction from the myModules (basically the spy file);

  // Call the function
  myModule.myFunction();

  // Check if the function was called
  expect(spy).toHaveBeenCalled();

  // Restore the original implementation
  spy.mockRestore();
});