import { IncomingMessage, ServerResponse } from "http";
import { HttpRequest } from "../@types/HttpRequest";
import { HttpResponse } from "../@types/HttpResponse";

export const createHttpHandlers = async (request: IncomingMessage, response: ServerResponse): Promise<[HttpRequest, HttpResponse]> => {
    return new Promise(async (resolve) => {
        const parsedRequest: HttpRequest = {
            body: await bodyParser(request),
            method: request.method!
        }

        const parsedResponse: HttpResponse = {
            send: (statusCode: number, body: any) => {
                response.writeHead(statusCode, {
                    "Content-Type": "application/json",
                });
                response.end(JSON.stringify(body));
            }
        }

        resolve([parsedRequest, parsedResponse])
    })

}

const bodyParser = async (request: IncomingMessage): Promise<any> => {
    return new Promise((resolve) => {
        let body: Buffer[] = [];

        request.on("data", (chunk) => {
            body.push(Buffer.from(chunk));
        });

        request.on("end", () => {
            resolve(body.join(''));
        });
    })
}

