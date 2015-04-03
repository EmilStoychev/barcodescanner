var observable = require("data/observable");
var application = require("application");
var localSettings = require("local-settings");

var Intents = com.tns.com.google.zxing.client.android.Intents;
var Intent = android.content.Intent;
var QR_REQUEST_CODE = 0x4E53;

var counter = 42;

function startScan(activity){
	var intentScan = new Intent(Intents.Scan.ACTION);
	intentScan.addCategory(Intent.CATEGORY_DEFAULT);
	intentScan.setPackage(activity.getPackageName());
	intentScan.putExtra(Intents.Scan.MODE, "CODE_39");	
	
	var display = activity.getWindowManager().getDefaultDisplay();
	var size = new android.graphics.Point();
	display.getSize(size);
	var rectSize = Math.floor(Math.min(size.x, size.y) * 0.75);
	intentScan.putExtra(Intents.Scan.WIDTH, rectSize);
	intentScan.putExtra(Intents.Scan.HEIGHT, rectSize);
	intentScan.putExtra(Intents.Scan.PROMPT_MESSAGE, "Tap to focus QR code.");
	activity.startActivityForResult(intentScan, QR_REQUEST_CODE);
}

var mainViewModel = new observable.Observable();
mainViewModel.set("message", 
	'resultCode: ' + localSettings.getString('resultCode') + 
	' requestCode: ' + localSettings.getString('requestCode') + 
	' scanResult: ' + localSettings.getString('scanResult'));

mainViewModel.tapAction = function () {
	startScan(application.android.foregroundActivity);
};
exports.mainViewModel = mainViewModel;

application.android.onActivityResult = function(requestCode, resultCode, intent){
  if (requestCode == 0x4E53 && resultCode == -1) {
  	 mainViewModel.set("message", intent.getStringExtra("SCAN_RESULT"));
  }
}
