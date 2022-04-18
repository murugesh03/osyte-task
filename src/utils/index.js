import debounce from "lodash.debounce";

export const customDebounce = (cb, delay = 500) => {
  return debounce(cb, delay);
};
