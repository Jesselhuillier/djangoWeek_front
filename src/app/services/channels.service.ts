import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Channels } from "../models/Channels";
import { Messages } from "../models/Messages";
import { Users } from "../models/Users";

@Injectable({
  providedIn: "root"
})
export class ChannelsService {
  channelsApiUrl: string = "http://localhost:8000/api/channel/";
  usersApiUrl: string = "http://localhost:8000/api/userMessage/";
  messagesApiUrl: string = "http://localhost:8000/api/message/";

  currentUser: string = "";

  OPTIONS = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  setCurrentUser(username: string): void {
    this.currentUser = username;
  }

  getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(`${this.channelsApiUrl}`);
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.usersApiUrl}`);
  }

  getMessages(): Observable<Messages[]> {
    return this.http.get<Messages[]>(`${this.messagesApiUrl}`);
  }

  // Fonction permettant de créer un nouveau message grâce à l'api
  setNewMessage(commentToPost: string): Observable<Messages> {
    return this.http.post<Messages>(
      this.messagesApiUrl,
      {
        idChannel: "main",
        idUser: this.currentUser,
        comment: commentToPost
      },
      this.OPTIONS
    );
  }
}
