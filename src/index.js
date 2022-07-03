import Observable from "./Observable";

export const install = (app, props = {}) => {
  app.component("Observable", Observable);
};

export default install;

export { Observable };
