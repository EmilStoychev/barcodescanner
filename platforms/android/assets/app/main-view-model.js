// enableVerboseLogging();

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");
var application = require("application");

var mainViewModel = new observable.Observable();
mainViewModel.scan = function () {   
  // mainViewModel.set("format", 'code 39');
  // mainViewModel.set("content", 'wiki'); 

  Log("!!!emil");

  var intent = new android.content.Intent("com.google.zxing.client.android.SCAN");
  intent.putExtra("SCAN_FORMATS", "CODE_39");
  application.android.foregroundActivity.startActivityForResult(intent, 999);
};

exports.mainViewModel = mainViewModel;

application.android.onActivityResult = function(requestCode, resultCode, data) {
  if (requestCode === 999) {
    // if (resultCode == RESULT_OK ) {
    mainViewModel.set("content", data.getStringExtra("SCAN_RESULT"));
    // }
  }
}

app.init({  
  getActivity: function(intent) {
    Log("!!!log action:" + intent.getAction());

    if (intent.getAction() == "com.google.zxing.client.android.SCAN") {
      return com.google.zxing.client.android.CaptureActivity.class;
    }
  }
});