const settingInit = {
  openModal: false,
  mode: "Dark",
};
export default (settings = settingInit, action) => {
  console.log(settings, action);
  switch (action.type) {
    case "MODAL":
      return { ...settings, openModal: action.payload };
      break;

    default:
      return settings;
      break;
  }
};
