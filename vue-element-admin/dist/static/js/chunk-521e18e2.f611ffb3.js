(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-521e18e2"],{"07d86":function(e,t,a){},"32e90":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"search"},[a("el-row",{staticClass:"block-col-2 ma"},[a("el-col",{attrs:{span:12}},[a("el-dropdown",{staticClass:"el",attrs:{trigger:"click"}},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("状态:")]),e._v(" "),a("el-select",{staticClass:"sl",attrs:{placeholder:"请选择"},model:{value:e.valueu,callback:function(t){e.valueu=t},expression:"valueu"}})],1),e._v(" "),a("el-dropdown-menu",{staticClass:"dropdown1",attrs:{slot:"dropdown"},slot:"dropdown"})],1)],1)],1),e._v(" "),a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("班级:")]),e._v(" "),a("el-select",{staticClass:"sl",attrs:{placeholder:"请选择"},model:{value:e.valuee,callback:function(t){e.valuee=t},expression:"valuee"}},e._l(e.detail,function(e){return a("el-option",{key:e.grade_id,attrs:{label:e.grade_name,value:e.grade_id}})}),1)],1),e._v(" "),a("el-button",{staticClass:"but",attrs:{type:"primary"}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.examList?e.examList.exam&&e.examList.exam.slice((e.currentPages-1)*e.pagesizes,e.currentPages*e.pagesizes):[]}},[a("el-table-column",{attrs:{label:"班级",width:"180"}},[[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.gradeName))])]],2),e._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.student_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"阅卷状态"}},[[a("span",{staticStyle:{"margin-left":"10px"}},[e._v("未阅")])]],2),e._v(" "),a("el-table-column",{attrs:{label:"开始时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.start_time))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.end_time))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"成材率"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleEdits(t.$index,t.row)}}},[e._v("批卷")])]}}])})],1),e._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{staticClass:"nav",attrs:{"current-page":e.currentPages,"page-sizes":[5,10,20,40],"page-size":e.pagesizes,layout:"total, sizes, prev, pager, next, jumper",total:e.examList?e.examList.exam&&e.examList.exam.length:1},on:{"size-change":e.handleSizeChanges,"current-change":e.handleCurrentChanges}})],1)],1)])},n=[],i=a("cebc"),l=a("2f62"),r={data:function(){return{currentPages:1,pagesizes:10,userLists:[],name:"",grade:"",grades:"",valuee:"",valueu:"",status:0}},computed:Object(i["a"])({},Object(l["e"])({examList:function(e){return e.examinations.examList},detail:function(e){return e.examinations.detail.data},gradeName:function(e){return e.examinations.gradeName}})),created:function(){this.getExamination({grade_id:this.$route.query.grade_id}),this.userLists=this.examList?this.examList.exam:[],console.log(this.examList,"examlist"),console.log("this.$route.query",this.$route.query),console.log("asdfg",this.examList),this.getstudentPapers()},methods:Object(i["a"])({},Object(l["b"])({detailList:"examinations/students",getExamination:"examinations/getExamination",getstudentPapers:"examinations/getstudentPapers"}),Object(l["d"])({changegradeName:"examinations/changegradeName"}),{handleSizeChanges:function(e){this.pagesizes=e,console.log(this.pagesizes)},handleCurrentChanges:function(e){this.currentPages=e,console.log(this.currentPages)},handleEdits:function(e,t){console.log(e,t),this.grades=this.examList.exam[e],console.log("dddd",this.grades),this.$router.push({path:"/paper/detail",query:{exam_student_id:this.grades.exam_student_id,student_name:this.grades.student_name}})}})},o=r,c=(a("eb41"),a("bfcd"),a("2877")),u=Object(c["a"])(o,s,n,!1,null,"71b35cdb",null);t["default"]=u.exports},bfcd:function(e,t,a){"use strict";var s=a("eadc"),n=a.n(s);n.a},eadc:function(e,t,a){},eb41:function(e,t,a){"use strict";var s=a("07d86"),n=a.n(s);n.a}}]);