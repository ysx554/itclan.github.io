(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{475:function(t,a,e){"use strict";e.r(a);var s=e(65),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"watchface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watchface"}},[t._v("#")]),t._v(" Watchface")]),t._v(" "),e("h2",{attrs:{id:"sets-watchface-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-watchface-index"}},[t._v("#")]),t._v(" Sets watchface index")]),t._v(" "),e("p",[t._v("The watch supports a variety of different watchfaces, which can be switched freely.")]),t._v(" "),e("p",[t._v("Send watchface type,Parameters provided by WatchFaceType.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendDisplayWatchFace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("WatchFaceType:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("firstWatchFace")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("0x01")])]),t._v(" "),e("tr",[e("td",[t._v("secondWatchFace")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("0x02")])]),t._v(" "),e("tr",[e("td",[t._v("thirdWatchFace")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("0x03")])])])]),t._v(" "),e("h2",{attrs:{id:"gets-the-watchface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-watchface"}},[t._v("#")]),t._v(" Gets the watchface")]),t._v(" "),e("p",[t._v("Gets the watchface being displayed.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("int watchFace "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryDisplayWatchFace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"gets-the-watchface-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-watchface-layout"}},[t._v("#")]),t._v(" Gets the watchface layout")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceLayoutBean")]),t._v(" info "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryWatchFaceLayout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Parameter Description :")]),t._v(" "),e("p",[t._v("WatchFaceLayoutBean：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("backgroundPictureMd5")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("The background image MD5 has a length of 32 bits. When padded with 0, the background image  restores the default background.")])]),t._v(" "),e("tr",[e("td",[t._v("compressionType")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("The compression type(LZO,RGB_DEDUPLICATION,RGB_LINE, ORIGINAL)")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("The watch face height default 240 px.")])]),t._v(" "),e("tr",[e("td",[t._v("textColor")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("font color(RGB)")])]),t._v(" "),e("tr",[e("td",[t._v("thumHeight")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("The thum watch face height,The default is 0, which means it is not supported")])]),t._v(" "),e("tr",[e("td",[t._v("thumWidth")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("The thum watch face width,The default is 0, which means it is not supported")])]),t._v(" "),e("tr",[e("td",[t._v("timeBottomContent")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("content displayed")])]),t._v(" "),e("tr",[e("td",[t._v("timePosition")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("time position")])]),t._v(" "),e("tr",[e("td",[t._v("timeTopContent")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("content")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("The watch face width default 240 px.")])])])]),t._v(" "),e("p",[t._v("WatchFaceLayoutType:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("watchFaceTimeTop")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Time is at the top right")])]),t._v(" "),e("tr",[e("td",[t._v("watchFaceTimeBottom")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Time is at the bottom right")])]),t._v(" "),e("tr",[e("td",[t._v("watchFaceContentclose")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Do not display anything")])]),t._v(" "),e("tr",[e("td",[t._v("watchFaceContentDate")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Date")])]),t._v(" "),e("tr",[e("td",[t._v("watchFaceContentSleep")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Sleep")])]),t._v(" "),e("tr",[e("td",[t._v("watchFaceContentHeartRate")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Heart Rate")])]),t._v(" "),e("tr",[e("td",[t._v("watchFaceContentStep")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Steps")])])])]),t._v(" "),e("h2",{attrs:{id:"sets-the-watchface-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-the-watchface-layout"}},[t._v("#")]),t._v(" Sets the watchface layout")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendWatchFaceLayout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceLayoutBean")]),t._v(" info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"sets-watchface-background-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-watchface-background-listener"}},[t._v("#")]),t._v(" Sets watchface background Listener")]),t._v(" "),e("p",[t._v('Sets up a watchface background transmission monitor fileTransEveStm, and save the returned value in "event" with the value of the FileTransBean object.')]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileTransEveStm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileTransBean")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Do something with new state,for example:")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transChanged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              _progress "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transCompleted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              _error "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Callback Description(event):")]),t._v(" "),e("p",[t._v("FileTransBean：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("callback value")]),t._v(" "),e("th",[t._v("callback value type")]),t._v(" "),e("th",[t._v("callback value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Weather change return value type, the type is TransType")])]),t._v(" "),e("tr",[e("td",[t._v("isError")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("Determine whether the dial background transmission is wrong")])]),t._v(" "),e("tr",[e("td",[t._v("progress")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Dial background transfer progress")])])])]),t._v(" "),e("p",[t._v("TransType：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("type")]),t._v(" "),e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("transStart")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Indicates that the dial background is obtained and the data returned by the monitor is transmitted")])]),t._v(" "),e("tr",[e("td",[t._v("transChanged")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Retrieves the data returned by the dial background transmission monitor")])]),t._v(" "),e("tr",[e("td",[t._v("transCompleted")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("It means to obtain the data returned by monitoring the dial background after transmission")])]),t._v(" "),e("tr",[e("td",[t._v("error")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Indicates dial background transmission error listening for returned data")])])])]),t._v(" "),e("h2",{attrs:{id:"sets-the-watchface-background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-the-watchface-background"}},[t._v("#")]),t._v(" Sets the watchface background")]),t._v(" "),e("p",[t._v("The dial of the 1.3-inch color screen supports the replacement of the background image with a picture size of 240 * 240 px. Compressed indicates whether the picture needs to be compressed (the watch with the master control of 52840 does not support compression and is fixed to false); timeout indicates the timeout period, in seconds. The progress is called back by _blePlugin.fileTransEveStm.listen.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendWatchFaceBackground")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceBackgroundBean")]),t._v(" info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Parameter Description :")]),t._v(" "),e("p",[t._v("WatchFaceBackgroundBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("callback value")]),t._v(" "),e("th",[t._v("callback value type")]),t._v(" "),e("th",[t._v("callback value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("bitmap")]),t._v(" "),e("td",[t._v("Uint8List")]),t._v(" "),e("td",[t._v("The bitmap of background image")])]),t._v(" "),e("tr",[e("td",[t._v("thumbBitmap")]),t._v(" "),e("td",[t._v("Uint8List")]),t._v(" "),e("td",[t._v("The bitmap of thumbnail")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("WatchFaceLayoutBean.WatchFaceLayoutType")])]),t._v(" "),e("tr",[e("td",[t._v("thumbWidth")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("width of thumbBitmap")])]),t._v(" "),e("tr",[e("td",[t._v("thumbHeight")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("height of thumbBitmap")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("width of bitmap")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("height of bitmap")])])])]),t._v(" "),e("h2",{attrs:{id:"gets-support-watchface-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gets-support-watchface-type"}},[t._v("#")]),t._v(" Gets support watchface type")]),t._v(" "),e("p",[t._v("When the watch switches dials, it needs to query the type supported by the dial.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SupportWatchFaceBean")]),t._v(" info "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("querySupportWatchFace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("callback description：")]),t._v(" "),e("p",[t._v("SupportWatchFaceBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("displayWatchFace")]),t._v(" "),e("th",[t._v("supportWatchFaceList")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("The currently displayed dial number")]),t._v(" "),e("td",[t._v("Types of watch faces")])])])]),t._v(" "),e("h2",{attrs:{id:"gets-the-watchface-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-watchface-store"}},[t._v("#")]),t._v(" Gets the watchface store")]),t._v(" "),e("p",[t._v("According to the watchface type supported by the watch, obtain a list of watchfaces that the watch can be replaced.")]),t._v(" "),e("p",[t._v("Gets the list of available watch faces by way of paging query.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceBean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" listInfo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryWatchFaceStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceStoreBean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("WatchFaceStoreBean :")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("watchFaceSupportList")]),t._v(" "),e("td",[t._v("List< int >")]),t._v(" "),e("td",[t._v("watchface support type")])]),t._v(" "),e("tr",[e("td",[t._v("firmwareVersion")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Dial firmware version number")])]),t._v(" "),e("tr",[e("td",[t._v("pageCount")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Number of watch faces per page")])]),t._v(" "),e("tr",[e("td",[t._v("pageIndex")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("current page number")])])])]),t._v(" "),e("p",[t._v("Precautions:")]),t._v(" "),e("p",[t._v("watchFaceSupportList:parameters are obtained by the _blePlugin.querySupportWatchFace.")]),t._v(" "),e("p",[t._v("firmwareVersion:Get the firmware version number through _blePlugin.queryFirmwareVersion.")]),t._v(" "),e("h2",{attrs:{id:"gets-the-watchface-information-of-the-watchface-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-watchface-information-of-the-watchface-id"}},[t._v("#")]),t._v(" Gets the watchface information of the watchface id")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchFaceIdBean")]),t._v(" info "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryWatchFaceOfID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Parameter Description :")]),t._v(" "),e("p",[t._v("WatchFaceIdBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("The information of the dial is obtained by the id of the dial, and the parameters are obtained by the _blePlugin.queryDisplayWatchFace")])])])]),t._v(" "),e("p",[t._v("callback description：")]),t._v(" "),e("p",[t._v("WatchFaceIdBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("callback value")]),t._v(" "),e("th",[t._v("callback value type")]),t._v(" "),e("th",[t._v("callback value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("watchFace")]),t._v(" "),e("td",[t._v("WatchFace")]),t._v(" "),e("td",[t._v("watch face file")])]),t._v(" "),e("tr",[e("td",[t._v("error")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("error message")])]),t._v(" "),e("tr",[e("td",[t._v("code")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("return code")])])])]),t._v(" "),e("p",[t._v("WatchFace:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("file id")])]),t._v(" "),e("tr",[e("td",[t._v("preview")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Watchface  Image preview link")])]),t._v(" "),e("tr",[e("td",[t._v("file")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Watchface file download link")])])])]),t._v(" "),e("h2",{attrs:{id:"sets-watchface-file-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-watchface-file-listener"}},[t._v("#")]),t._v(" Sets watchface file listener")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("      _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wfFileTransEveStm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileTransBean")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Do something with new state,for example:")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transChanged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _progress "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transCompleted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _progress "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _error "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("Callback Description(event):")]),t._v(" "),e("p",[t._v("FileTransBean：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("callback value")]),t._v(" "),e("th",[t._v("callback value type")]),t._v(" "),e("th",[t._v("callback value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Weather change return value type, the type is TransType")])]),t._v(" "),e("tr",[e("td",[t._v("isError")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("Check whether the dial file transfer is incorrect")])]),t._v(" "),e("tr",[e("td",[t._v("progress")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Dial file transfer progress")])])])]),t._v(" "),e("p",[t._v("TransType：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("type")]),t._v(" "),e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("transStart")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Retrieves the dial file and begins transmitting the data returned by the listener")])]),t._v(" "),e("tr",[e("td",[t._v("transChanged")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Retrieves the data returned by the dial file transfer listener")])]),t._v(" "),e("tr",[e("td",[t._v("transCompleted")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Indicates that the data returned after the dial file transfer is completed")])]),t._v(" "),e("tr",[e("td",[t._v("error")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Indicates a dial file transfer error listening for returned data")])])])]),t._v(" "),e("h2",{attrs:{id:"sets-a-watchface-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-a-watchface-file"}},[t._v("#")]),t._v(" Sets a watchface file")]),t._v(" "),e("p",[t._v("Send the watchface file of the new watchface to the watch, during which the watch will restart.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendWatchFace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SendWatchFaceBean")]),t._v(" bean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Parameter Description :")]),t._v(" "),e("p",[t._v("SendWatchFaceBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("watchFaceFlutterBean")]),t._v(" "),e("td",[t._v("CustomizeWatchFaceBean")]),t._v(" "),e("td",[t._v("Dial file information")])]),t._v(" "),e("tr",[e("td",[t._v("timeout")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("The dial file transfer timed out")])])])]),t._v(" "),e("p",[t._v("CustomizeWatchFaceBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value type")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("index")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("file id")])]),t._v(" "),e("tr",[e("td",[t._v("file")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("The address where the watch face file is stored")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);