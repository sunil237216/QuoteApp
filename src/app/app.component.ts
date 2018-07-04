import { Component, ViewChild} from '@angular/core';
import { Platform,AlertController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tab';
import { Settings }  from '../pages/settings/settings'
import { NavController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Detailpage } from "../pages/detailpage/detailpage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any=TabsPage;
  settingPage=Settings;
  @ViewChild('nav') nav:NavController;

constructor(platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController,public push: Push, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushsetup();
    });
  }

   pushsetup() {
  const options: PushOptions = {
     android: {
         senderID: '414527321826'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };
 
  const pushObject: PushObject = this.push.init(options);
 
  pushObject.on('notification').subscribe((notification: any) => {
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'Quote',
        message: notification.message
      });
      youralert.present();
     }
   else {
         this.rootPage=Detailpage;
        }
    
  });
 
  pushObject.on('registration').subscribe((registration: any) => {
     //do whatever you want with the registration ID
     console.log('device token -> ' + registration.registrationId);
     
  });
 
  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
   }
  onLoad(page: any)
  {
      this.nav.setRoot(page);
      this.menuCtrl.close();
  }
  
}

