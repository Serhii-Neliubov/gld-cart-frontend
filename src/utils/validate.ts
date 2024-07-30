export const validate = (object: { [key: string]: string }) => {
  const errors: string[] = [];
  const bodyKeys: string[] = Object.keys(object);

  bodyKeys.forEach((field) => {
    if (!object[field].length) {
      errors.push(field);
    }
  });

  return errors;
}