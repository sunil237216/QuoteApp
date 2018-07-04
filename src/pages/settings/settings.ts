import { Component } from '@angular/core';
import   { Toggle}  from  'ionic-angular'

import { SettingService } from '../../service/setting';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {


constructor(private settingService:SettingService)
{}	

onToggle(toggle: Toggle)
{

this.settingService.setAltBackground(toggle.checked);
}

checkAltBackground()
{
	return this.settingService.isAltBackground();
}
 

}
