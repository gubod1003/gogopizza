export const changeFirstUpperCase = (str) => 
    str[0].toUpperCase() + str.slice(1).toLowerCase();

export const createRadioInput = (className, id, name, value) => {
  const input = document.createElement('input');
  input.type = 'radio';
  input.classList.add(className);
  input.id = id;
  input.name = name;
  input.value = value;
  return input;
};

export const createLabel = (className, forId, labelText) => {
  const label = document.createElement('label');
  label.classList.add(className);
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
};

