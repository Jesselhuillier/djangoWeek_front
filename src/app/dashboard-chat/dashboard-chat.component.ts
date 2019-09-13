import { Component, OnInit } from "@angular/core";
import { Channels } from "../models/Channels";
import { ChannelsService } from "../services/channels.service";
import { Users } from "../models/Users";
import { Messages } from "../models/Messages";
import {NgForm} from "@angular/forms";

@Component({
  selector: "app-dashboard-chat",
  templateUrl: "./dashboard-chat.component.html",
  styleUrls: ["./dashboard-chat.component.css"]
})
export class DashboardChatComponent implements OnInit {
  allChannels: Channels[];
  users: Users[];
  messages: Messages[];

  //Databinding message_user avec l'input
  messageUser = '';

  constructor(private channelService: ChannelsService) {}

  ngOnInit() {
    this.channelService.getChannels().subscribe(channels => {
      this.allChannels = channels;
    });

    this.channelService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.channelService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    //Mise en place du surnom utilisateur
    this.channelService.setCurrentUser("utilisateur01");

    //Recupere la valeur de l'input et Post vers l'API
    this.channelService.setNewMessage(this.messageUser);

    //Actualisation message
    this.channelService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
}
