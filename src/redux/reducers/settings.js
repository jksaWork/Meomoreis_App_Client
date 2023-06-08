const settingInit = {
  openModal: false,
  relativeclass: true,
  mode: "Dark",
};
export default (settings = settingInit, action) => {
  switch (action.type) {
    case "MODAL":
      return { ...settings, openModal: action.payload };
      break;

    case "RELATIVE_CLASS":
      // console.log(action.payload);
      return { ...settings, relativeclass: action.payload };
      break;
    default:
      return settings;
      break;
  }
};
