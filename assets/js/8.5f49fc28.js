(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{430:function(t,a,e){"use strict";e.r(a);var s=e(65),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ecg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ecg"}},[t._v("#")]),t._v(" ECG")]),t._v(" "),e("h2",{attrs:{id:"sets-ecg-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-ecg-listener"}},[t._v("#")]),t._v(" Sets ECG listener")]),t._v(" "),e("p",[t._v("Sets the ECG monitor and get the return value through ecgEveStm.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ecgEveStm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EgcBean")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Do something with new state,for example:")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECGType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ecgChangeInts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _ints "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ints"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECGType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measureComplete"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECGType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECGType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECGType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Callback Description(event):")]),t._v(" "),e("p",[t._v("EgcBean:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("callback value")]),t._v(" "),e("th",[t._v("callback value type")]),t._v(" "),e("th",[t._v("callback value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Get the corresponding return value according to type, where type is the value corresponding to ECGType")])]),t._v(" "),e("tr",[e("td",[t._v("ints")]),t._v(" "),e("td",[t._v("int[]")]),t._v(" "),e("td",[t._v("ECG information")])]),t._v(" "),e("tr",[e("td",[t._v("date")]),t._v(" "),e("td",[t._v("Date")]),t._v(" "),e("td",[t._v("date")])])])]),t._v(" "),e("p",[t._v("ECGType:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("type")]),t._v(" "),e("th",[t._v("value")]),t._v(" "),e("th",[t._v("value description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ecgChangeInts")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("measure ECG")])]),t._v(" "),e("tr",[e("td",[t._v("measureComplete")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("ECG measurement complete")])]),t._v(" "),e("tr",[e("td",[t._v("date")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("ECG measurement date")])]),t._v(" "),e("tr",[e("td",[t._v("cancel")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("ECG measurement off")])]),t._v(" "),e("tr",[e("td",[t._v("fail")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("ECG measurement failed")])])])]),t._v(" "),e("h2",{attrs:{id:"measuring-ecg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#measuring-ecg"}},[t._v("#")]),t._v(" Measuring ECG")]),t._v(" "),e("p",[t._v("Start to measure the ECG, the ECG measurement time is 30 seconds, and the user needs to touch the left and right electrodes of the watch with both hands. The value is obtained by listening to the ecgEveStm data stream, and the value is saved in EgcBean.ints,type is ecgChangeInts.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startECGMeasure"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"stop-measuring-ecg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-measuring-ecg"}},[t._v("#")]),t._v(" Stop measuring ECG")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stopECGMeasure"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"detect-new-ecg-measurement-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detect-new-ecg-measurement-methods"}},[t._v("#")]),t._v(" Detect new ECG measurement methods")]),t._v(" "),e("p",[t._v("In the new measurement mode, the watch can save the last unsent measurement result; the old version does not.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("bool newMeasurementVersion "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isNewECGMeasurementVersion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"gets-the-last-ecg-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-last-ecg-data"}},[t._v("#")]),t._v(" Gets the last ECG data")]),t._v(" "),e("p",[t._v("Gets the ECG data saved by the watch, monitor the data stream through ecgEveStm , and save the value in EgcBean.ints,type is ecgChangeInts.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryLastMeasureECGData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"sets-heart-rate-during-ecg-measurement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sets-heart-rate-during-ecg-measurement"}},[t._v("#")]),t._v(" Sets heart rate during ECG measurement")]),t._v(" "),e("p",[t._v("Using the measured data, the instantaneous heart rate is calculated through the ECG algorithm library and sent to the watch.")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("_blePlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendECGHeartRate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int heartRate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);