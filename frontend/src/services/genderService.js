import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "genders";

// export function register(user){
//     return http.post(apiEndpoint,{
//         email: user.email,
//         genderId: user.genderId,
//         name: user.name,
//         password: user.password
//     });
// }

export function  getGenders(){
    return  http.get(apiEndpoint);
};
