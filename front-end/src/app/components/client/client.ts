import { Component } from '@angular/core';
import { ClientC } from '../../model/class/ClientC';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

  clientObj: ClientC = new ClientC(); 
  clientList: ClientC[] = [];

  onSaveClient(){
    
  }

}
