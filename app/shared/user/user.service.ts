import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { User } from "./user";
import { Config as BackendService } from "../config";

@Injectable()
export class UserService {
    private user: User;

    constructor(private http: Http) {
        this.user = new User();
    }

    public register(user: User): Promise<any> {
        this.user = user;
        return Promise.resolve();
    }

    public authenticate(_user: User): boolean {
        return this.user.email === _user.email && this.user.password === _user.password;
    }

    // public registerWithHttpPost(user: User): Promise<any> {
    //     const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options: RequestOptions = new RequestOptions({ headers: headers });
    //     let url: string = BackendService.apiUrl + "Users";
    //     let data: string = JSON.stringify({ Username: user.email, Email: user.email, Password: user.password });
    //     return this.http.post(url, data, options)
    //         .toPromise()
    //         .then((response: Response) => response.json())
    //         .catch(this.handleErrors);
    // }
    // public loginWithHttpPost(user: User): Promise<any> {
    //     let url: string = BackendService.apiUrl + "oauth/token";
    //     let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options: RequestOptions = new RequestOptions({ headers: headers });
    //     let data: string = JSON.stringify({ username: user.email, password: user.password, grant_type: "password" });
    //     return this.http.post(url, data, options)
    //         .toPromise()
    //         .then(response => {
    //             BackendService.token = response.json().Result.access_token;
    //             return response.json()
    //         })
    //         .catch(this.handleErrors);
    // }
    // public handleErrors(error: any) {
    //     console.log(JSON.stringify(error.json()));
    //     return Promise.reject(error);
    // }
}