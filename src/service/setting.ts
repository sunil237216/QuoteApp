export class SettingService
{

 private altBackground = false;

 setAltBackground(altBack: boolean)
 {

    this.altBackground=altBack;
}

isAltBackground(){


	return this.altBackground;
}







}