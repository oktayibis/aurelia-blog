import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";
export class App {
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "My Blog";
    config.map([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("resources/pages/home/home"),
        nav: true,
        title: "Home",
      },
    ]);
  }
}
