const FetchComponent = async (fileName) => {
  const response = await fetch(fileName);
  const text = await response.text();
  return text;
}

const InjectComponent = async (fileText, className) => {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = fileText;
  }
}

const LoadComponent = async (fileName, className) => {
  const fileText = await FetchComponent(fileName);
  await InjectComponent(fileText, className);
}
