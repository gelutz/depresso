import { IncomingMessage } from "http";

type HttpRequest = {
    method: string,
    query?: { [k: string]: any; },
    body?: string,
    params?: { [k: string]: any; },
}