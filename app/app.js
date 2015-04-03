var application = require("application");


application.mainModule = "main-page";

// application.onLaunch = function(intent) {
//   if(application.android){
//     var localSettings = require("local-settings");
//     application.android.onActivityResult = function(requestCode, resultCode, intent){
//       localSettings.setString('requestCode', requestCode.toString());
//       localSettings.setString('resultCode', resultCode.toString());
//       localSettings.setString('scanResult', intent.getStringExtra("SCAN_RESULT"));

//       // the scan result will be received here
//       // console.log("onActivityResult callback");

//       // alert('requestCode: ' + requestCode);
//       // alert('resultCode: ' + resultCode);

//       // mainViewModel.set("message", intent.getStringExtra("SCAN_RESULT"));

//       // if (requestCode == 0x4E53) {
//       //   alert('result: ' + intent.getStringExtra("SCAN_RESULT"));
//       //   alert('resultCode: ' + resultCode );      
//       // }
//     }
//   }
// }

application.start();
