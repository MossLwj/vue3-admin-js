import { createI18n } from "vue-i18n";

const i18n = createI18n({
  // shomething vue-i18n options here ...
  locale: "ch",
  messages: {
    ch: require("./ch"),
    en: require("./en")
  }
});

export default i18n;
