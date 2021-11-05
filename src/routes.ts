import { HttpRoute } from "./@types/HttpRoute";
import UserController from "./controller/UserController";

export const routes: HttpRoute[] = [
    {
        endpoint: "/users",
        method: "GET",
        // handler: UserController.listUsers,
        handler: (req, res) => { console.log(req.body); res.send(404, JSON.parse(req.body ?? '')) }
    },
    {
        endpoint: "/users/:id",
        method: "GET",
        handler: UserController.readById,
    },
    {
        endpoint: "/users",
        method: "POST",
        // handler: UserController.createUser,
        handler: () => { }
    },
    {
        endpoint: "/users/:id",
        method: "PATCH",
        // handler: UserController.updateUser,
        handler: () => { }
    },
    {
        endpoint: "/users/:id",
        method: "DELETE",
        // handler: UserController.deleteUser,
        handler: () => { }
    },
]