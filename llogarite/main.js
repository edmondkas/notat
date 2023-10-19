const tg = new window["@tolgee/core"].Tolgee({
  apiUrl: "https://app.tolgee.io",
  apiKey: "71mpth0erv28oidqrt14d8l01e",
  inputPrefix: "%-%",
  inputSuffix: "%-%",
  watch: true,
});
tg.run();

let langs = document.querySelector(".lang-select");
langs.addEventListener("change", (e) => {
  //Changing the language of our page
  tg.lang = e.target.value;
});
