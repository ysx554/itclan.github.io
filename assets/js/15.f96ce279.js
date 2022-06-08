(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{436:function(t,e,a){"use strict";a.r(e);var s=a(65),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"body-temperature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-temperature"}},[t._v("#")]),t._v(" Body Temperature")]),t._v(" "),a("h2",{attrs:{id:"sets-listener-of-temperature-measurement-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sets-listener-of-temperature-measurement-results"}},[t._v("#")]),t._v(" Sets listener of temperature measurement results")]),t._v(" "),a("p",[t._v("Sets the monitoring of body temperature measurement results to return the corresponding data of body temperature.")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("_blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempChangeEveStm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TempChangeBean")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Do something with new state,for example:")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TempChangeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _enable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TempChangeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measureTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TempChangeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("measureState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TempChangeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                _tempInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                _tempTimeType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _tempInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempTimeType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                _startTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _tempInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                _tempList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _tempInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Callback Description(event):")]),t._v(" "),a("p",[t._v("TempChangeBean：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("callback value")]),t._v(" "),a("th",[t._v("callback value type")]),t._v(" "),a("th",[t._v("callback value description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Get the corresponding return value according to type, where type is the value corresponding to TempChangeType")])]),t._v(" "),a("tr",[a("td",[t._v("enable")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("whether to continue measuring true:enable  false:disable")])]),t._v(" "),a("tr",[a("td",[t._v("temp")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("real-time body temperature")])]),t._v(" "),a("tr",[a("td",[t._v("state")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("temperature measurement status true:measuring  false:end of measurement")])]),t._v(" "),a("tr",[a("td",[t._v("tempInfo")]),t._v(" "),a("td",[t._v("TempInfo")]),t._v(" "),a("td",[t._v("Body temperature information")])])])]),t._v(" "),a("p",[t._v("TempChangeType：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("type")]),t._v(" "),a("th",[t._v("value")]),t._v(" "),a("th",[t._v("value description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("continueState")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Continue to measure body temperature")])]),t._v(" "),a("tr",[a("td",[t._v("measureTemp")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Start measuring the temperature obtained by taking the temperature")])]),t._v(" "),a("tr",[a("td",[t._v("measureState")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("measure body temperature")])]),t._v(" "),a("tr",[a("td",[t._v("continueTemp")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("The temperature value obtained by continuing to measure the body temperature")])])])]),t._v(" "),a("p",[t._v("TempInfo")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("callback value")]),t._v(" "),a("th",[t._v("callback value type")]),t._v(" "),a("th",[t._v("callback value description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("TempTimeType")]),t._v(" "),a("td",[t._v("Body temperature timing measurement status.")])]),t._v(" "),a("tr",[a("td",[t._v("startTime")]),t._v(" "),a("td",[t._v("long")]),t._v(" "),a("td",[t._v("Temperature measurement start time")])]),t._v(" "),a("tr",[a("td",[t._v("tempList")]),t._v(" "),a("td",[t._v("List< Float >")]),t._v(" "),a("td",[t._v("Temperature record sheet")])]),t._v(" "),a("tr",[a("td",[t._v("measureInterval")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Measurement interval (unit: minute, default 30 minutes)")])])])]),t._v(" "),a("p",[t._v("TempTimeType:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("type")]),t._v(" "),a("th",[t._v("value type")]),t._v(" "),a("th",[t._v("value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("today")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"TODAY"')])]),t._v(" "),a("tr",[a("td",[t._v("yesterday")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"YESTERDAY"')])])])]),t._v(" "),a("h2",{attrs:{id:"start-measuring-once-temperature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-measuring-once-temperature"}},[t._v("#")]),t._v(" Start measuring once temperature")]),t._v(" "),a("p",[t._v("Start taking temperature.")]),t._v(" "),a("p",[t._v("When starting a temperature measurement. The query result will be obtained through the tempChangeEveStm monitoring stream, the return type is TempChangeBean, and the real-time body temperature and measurement status are TempChangeBean.temp and TempChangeBean.state,type ismeasureTemp and type is measureState Respectively.")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("_blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startMeasureTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"stop-measuring-once-temperature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-measuring-once-temperature"}},[t._v("#")]),t._v(" Stop measuring once temperature")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("_blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stopMeasureTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"enable-timing-temperature-measurement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-timing-temperature-measurement"}},[t._v("#")]),t._v(" Enable timing temperature measurement")]),t._v(" "),a("p",[t._v("When the chronograph measurement is turned on, the watch automatically measures the temperature every half an hour.")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("_blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableTimingMeasureTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"disable-timing-temperature-measurement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-timing-temperature-measurement"}},[t._v("#")]),t._v(" Disable timing temperature measurement")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("_blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disableTimingMeasureTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"gets-the-timing-of-temperature-measurement-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-timing-of-temperature-measurement-status"}},[t._v("#")]),t._v(" Gets the timing of temperature measurement status")]),t._v(" "),a("p",[t._v("Get the temperature measurement status. The query result will be obtained through the tempChangeEveStm monitoring stream, the type is measureState, and the measurement state is TempChangeBean.state.")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" timingTempState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryTimingMeasureTempState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"gets-the-result-of-timing-temperature-measurement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gets-the-result-of-timing-temperature-measurement"}},[t._v("#")]),t._v(" Gets the result of timing temperature measurement")]),t._v(" "),a("p",[t._v("The measurement state is obtained through tempChangeEveStm, and the result is stored in TempChangeBean.continueTemp.")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("_blePlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryTimingMeasureTemp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TempTimeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);