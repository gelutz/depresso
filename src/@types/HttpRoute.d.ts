import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";

export type HttpRoute = {
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    handler: (request: HttpRequest, response: HttpResponse) => void
}