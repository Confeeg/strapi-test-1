export default {
  config: {
    locales: ['ru'],
    translations: {
      ru: {
        'app.components.LeftMenu.navbrand.title': 'Тест1',
        'app.components.HomePage.welcome': 'Тестовый проект',
      },
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};
