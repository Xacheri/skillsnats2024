// This is a quick and dirty way to inject HTML into a page to allow for seperation of responsibilities 
// and DRY code. Instead of a framework, we use this. It uses only features from JS and HTML with no dependencies.
// Authored by Zachery Smith and Chloe Gertner


/**
 * This method fetches text from a file 
 * @param {string} fileName - The name of the file to fetch 
 * @returns {string} - The text content of the file
 */
const FetchComponent = async (fileName) => {
  const response = await fetch(fileName);
  const text = await response.text();
  return text;
}

/** 
 * This method injects text into any element with a given class name 
 * @param {string} fileText - The text to inject 
 * @param {string} className - The class name of the element to inject into 
 */
const InjectComponent = async (fileText, className) => {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = fileText;
  }
}

/**
 * This method combines the other two to provide an easy API for this injector 
 * @param {string} fileName - The name of the file to fetch 
 * @param {string} className - The class name of the element to inject into 
 */ 

const LoadComponent = async (fileName, className) => {
  const fileText = await FetchComponent(fileName);
  await InjectComponent(fileText, className);
}
