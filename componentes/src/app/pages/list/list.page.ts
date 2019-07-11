import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService,
               private toastCtrl: ToastController) { }
  async presentToast(message: string) {
         const toast = await this.toastCtrl.create({
                  message,
                  duration: 2000
            });
         toast.present();
  }

  ngOnInit() {
    this.usuarios =  this.dataService.getUsers();
    // this.dataService.getUsers().subscribe(console.log);
  }

  favorite(user ) {
    console.log('favorite', user);
    // cerramos el sliding una ves que se presiona
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems();
  }
  share(user) {
    console.log('share', user);
     // cerramos el sliding una ves que se presiona
    this.presentToast('Share');
    this.lista.closeSlidingItems();
  }
  borrar(user) {
    console.log('borrar', user);
     // cerramos el sliding una ves que se presiona
    this.presentToast('borrar');
    this.lista.closeSlidingItems();
  }

}
