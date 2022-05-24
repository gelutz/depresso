import { createServer, RequestListener, Server } from "http"
import { HttpRoute } from "../../@types/HttpRoute"

export class Depresso {
    // private serverInstance: Server;
    // private baseUrl = 'http://localhost:3000'

    public routes: HttpRoute[] = []
    constructor(routes?: HttpRoute[]) {
        if (routes && routes != []) this.routes = routes
        // this.serverInstance = createServer(this.baseListener)
    }

    // private baseListener: RequestListener = async (request, response) => {
    //     const parsedUrl = new URL(this.baseUrl + request.url)

    //     let { pathname } = parsedUrl;
    //     const endpoint = pathname.split(/').filter(Boolean)

    //     let id = null;
    //     if (endpoint.length > 1) {
    //         pathname = `/${endpoint[0]}/:id`;
    //         id = endpoint[1];
    //     }

    //     const { parsedRequest, parsedResponse } = await createHttpHandlers(request, response)
    //     const route = this.routes.find(
    //         (routeObj) =>
    //             routeObj.endpoint === pathname && routeObj.method === request.method
    //     );

    //     if (route) {
    //         route.handler(parsedRequest, parsedResponse);
    //     } else {
    //         parsedResponse.send(404, `Cannot ${parsedRequest.method} ${parsedUrl.pathname}`)
    //     }
    // }

    route(routes: HttpRoute[]) {
        routes.forEach((route) => {
            this.routes.push(route)
        })
    }

    // listen(port: number, callback: () => void = () => { console.log(`Born in ${port}.`) }) {
    //     this.serverInstance.listen(port, callback)
    // }
}