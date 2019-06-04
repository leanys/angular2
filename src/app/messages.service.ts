import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesA: string[] =[];

  add(message: string){
    this.messagesA.push(message);
  }

  clear(){
    this.messagesA=[];
  }
}
