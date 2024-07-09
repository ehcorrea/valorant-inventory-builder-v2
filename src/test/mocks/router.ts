export const mockedReplace = jest.fn();

export const mockedRouter = {
  router: {
    replace: mockedReplace,
  },
};
