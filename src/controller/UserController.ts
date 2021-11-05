import { HttpRequest } from "../@types/HttpRequest"
import { HttpResponse } from "../@types/HttpResponse"
import { HttpRoute } from "../@types/HttpRoute"

const users = [
    {
        id: Math.random(),
        name: "Jake"
    },
    {
        id: Math.random(),
        name: "James"
    },
    {
        id: Math.random(),
        name: "Jasmine"
    },
    {
        id: Math.random(),
        name: "Jeniffer"
    }
]

class UserController {
    readById = (request: HttpRequest, response: HttpResponse) => {
        return response.send(200, request)
    }
}

export default new UserController()