// Appwrite service for auth --this file
// Creating Authentication service

// import elements or files we need
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


// Creating Authentication service
export class AuthService {
    // creating client or user for profile
    client = new Client();
    account;

    // constructor in which our service code which is used in appwrite
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }
    // Create account for new user for the very first time
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login the user
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Getting the which user is login currently 
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    // logging out the user by deleting the sessions by which all users were logout
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

// getting all objects in a variable and export it
const authService = new AuthService();

export default authService