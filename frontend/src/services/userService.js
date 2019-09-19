import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "users";

export function register(user){
    console.log(user);
    return http.post(apiEndpoint,{
        email: user.email,
        genderId: user.genderId,
        name: user.name,
        password: user.password
    });
}
