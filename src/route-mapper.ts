import {RouteConfig} from "aurelia-router";
import {RouteRecognizer} from "aurelia-route-recognizer";

export class RouteMapper extends RouteRecognizer {

    public map(routes: RouteConfig[], parentName = '', parentRoute = ''): void {
        routes.forEach(config => {
            let name = parentName ? `${parentName}/${config.name}` : config.name;
            let path = parentRoute + config.route;
            this.add({
                path: path,
                handler: { name: name },
                caseSensitive: config.caseSensitive === true
            });
            if (config.settings.childConfig) {
                this.map(config.settings.childConfig, name, path);
            }
        });
    }

}
