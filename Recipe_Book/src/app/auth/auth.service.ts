import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApExvHT9TmnbLLaxqIy_-u2dOI2x4wn9I', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(errorRes => {
            let errorMessage = 'An unknown error occured!';

            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }

            switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'The email address is already in use by another account.'
            }

            return throwError(errorMessage);
        }))
    }
}