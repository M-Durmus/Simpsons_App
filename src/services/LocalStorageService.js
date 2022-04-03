const LocalStorageService = {
  load: () => {
    if (!localStorage.simpsons) {
      localStorage.simpsons = '[]'
    }
    return JSON.parse(localStorage.simpsons);
  },
  save: (data) => {
    localStorage.simpsons = JSON.stringify(data);
  },
};
export default LocalStorageService;