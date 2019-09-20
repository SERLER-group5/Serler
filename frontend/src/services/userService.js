import http from "./httpService";
import {apiUrl} from "../config.json";
import * as genderApi from "./genderService";
import * as roleApi from "./roleService";

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

export function  getUsers(){
    return  http.get(apiEndpoint);
};

export function getUser(id){
    return http.get(apiEndpoint).get(apiEndpoint + '/' + id);
}

export function saveUser(user){
    // let userInDb = users.find(u => u._id === user._id) || {};
    // userInDb.name = user.name;
    // userInDb.gender = genderApi.genders.find(g => g._id === user.genderId);
    // userInDb.role = roleApi.roles.find(r => r._id === user.roleId);

}