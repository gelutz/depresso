import { createServer } from 'http';

import { routes } from "./routes";
import { createHttpHandlers } from './helpers/parser';

const server = createServer(async (request, response) => {
    const baseUrl = 'http://localhost:3000'
    const parsedUrl = new URL(baseUrl + request.url!)

    let { pathname } = parsedUrl;
    const endpoint = pathname.split('/').filter(Boolean)

    let id = null;
    if (endpoint.length > 1) {
        pathname = `/${endpoint[0]}/:id`;
        id = endpoint[1];
    }

    const [parsedRequest, parsedResponse] = await createHttpHandlers(request, response)
    const route = routes.find(
        (routeObj) =>
            routeObj.endpoint === pathname && routeObj.method === request.method
    );

    if (route) {
        route.handler(parsedRequest, parsedResponse);
    } else {
        parsedResponse.send(404, `Cannot ${parsedRequest.method} ${parsedUrl.pathname}`)
    }
});

server.listen(3000, () => console.log("alive at 3000"));
