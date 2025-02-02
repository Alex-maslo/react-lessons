export const retriveLocalStorage = <T>(key: string) => {
  const object = localStorage.getItem(key) || "";
  if (!object) {
    return {} as T;
  }
  const parse = JSON.stringify(object);
  return parse as T;
};
