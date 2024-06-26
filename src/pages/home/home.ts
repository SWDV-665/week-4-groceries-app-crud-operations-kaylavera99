import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogueServiceProvider } from '../../providers/input-dialogue-service/input-dialogue-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery"


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogueService: InputDialogueServiceProvider) {

  }

  loadItems(){
    return this.dataService.getItems()
  }

  removeItem (item, i) {
    console.log("Removing item - ", item, i)
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + i, 
      duration: 3000,
    });
    toast.present();
    this.dataService.removeItem(i);
  }
  
  editItem (item, i) {
    console.log("Edit item - ", item, i)
    const toast = this.toastCtrl.create({
      message: 'Editting Item - ' + i, 
      duration: 3000,
    });
    toast.present();
    this.inputDialogueService.showPrompt(item, i);
  }

  addItem() {
    console.log("Adding item item ");
    this.inputDialogueService.showPrompt();
  }
}

 