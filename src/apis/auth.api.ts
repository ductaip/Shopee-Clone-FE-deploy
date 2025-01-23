import { OtpSchema } from "@uth/utils/validate";
import { AuthResponse, RegisterResponse } from "../types/auth.type";
import http from "../utils/axios.http";

interface RegisterBody {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

interface LoginBody {
  username?: string;
  email: string;
  password: string;
}

const AUTH_ENDPOINT = '/auth';

/**
 * Registers a new user.
 * @param body - The registration details.
 * @returns A promise resolving to the authentication response data.
 */

export const registerAuth = (body: RegisterBody): Promise<RegisterResponse> => {
  return http.post<RegisterResponse>(`${AUTH_ENDPOINT}/register`, body)
    .then(response => response.data)
    .catch(error => {
      console.error("Registration failed", error);
      throw error;
    });
};

/**
 * Logs in an existing user.
 * @param body - The login details.
 * @returns A promise resolving to the authentication response data.
 */

export const loginAuth = (body: LoginBody): Promise<AuthResponse> => {
  return http.post<AuthResponse>(`${AUTH_ENDPOINT}/login`, body)
    .then(response => response.data)
    .catch(error => {
      console.error("Login failed", error);
      throw error;
    })
};

export const verifyEmail = (body : { verify_email_token: string, code: string }) => {
  console.log('check',body)
  return http.post<AuthResponse>(`${AUTH_ENDPOINT}/verify-email`, body)
    .then(response => response.data)
    .catch(error => {
      console.error("Verify email failed", error);
      throw error;
    })
}

