webpackJsonp([5],{oWuU:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("WT6e"),e=function(){},o=a("MmYo"),u=a("hiso"),c=function(n){this.viewContainerRef=n},i=a("SFSy"),r=a("tqvT"),_=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),y=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),s=function(){function n(n){this.componentFactoryResolver=n}return n.prototype.ngOnInit=function(){this.toolbar={activeId:"category",tabs:[new r.c("Category","category",[new r.a({type:i.e.NEW_CATEGORY,click:this.onClickNewCategory.bind(this)}),new r.a({type:i.e.SAVE,click:null})]),new r.c("Type","type",[new r.a({type:i.e.NEW_TYPE,click:this.onClickNewType.bind(this)}),new r.a({type:i.e.SAVE,click:null})])]},this.categoryList=[{category:"Utdannelse",categoryLanguage:"Utdannelse",activity:"false",cv:"true"},{category:"Trainor configuration",categoryLanguage:"Trainor configuration",activity:"true",cv:"true"},{category:"Rundeskogen",categoryLanguage:"Rundeskogen",activity:"false",cv:"false"}],this.typeList=[{type:"Administrasjon",typeLanguage:"Administrasjon",remark:"",code:"123"},{type:"Olje & Gass",typeLanguage:"Olje & Gass",remark:"",code:"321"},{type:"(8) Dager",typeLanguage:"(8) Dager",remark:"ABC",code:"456"}],this.loadComponentByTabId("category")},n.prototype.onClickNewCategory=function(n){console.log("On click new category")},n.prototype.onClickNewType=function(n){console.log("On click new type")},n.prototype.onTabChange=function(n){this.loadComponentByTabId(n.nextId)},n.prototype.loadComponentByTabId=function(n){var t=null,a=null;"type"==n?(t=this.componentFactoryResolver.resolveComponentFactory(y),a=this.typeList):(t=this.componentFactoryResolver.resolveComponentFactory(_),a=this.categoryList);var l=this.loader.viewContainerRef;l.clear(),l.createComponent(t).instance.data=a},n}(),p=l._4({encapsulation:0,styles:[[""]],data:{}});function d(n){return l._29(0,[(n()(),l._1(0,null,null,0))],null,null)}function g(n){return l._29(0,[l._25(402653184,1,{loader:0}),l._25(402653184,2,{modal:0}),(n()(),l._6(2,0,null,null,1,"toolbar",[],null,[[null,"onTabChange"]],function(n,t,a){var l=!0;return"onTabChange"===t&&(l=!1!==n.component.onTabChange(a)&&l),l},o.b,o.a)),l._5(3,114688,null,0,u.a,[],{data:[0,"data"]},{onTabChange:"onTabChange"}),(n()(),l._27(-1,null,["\n"])),(n()(),l._6(5,0,null,null,4,"div",[["class","container-fluid main-content"]],null,null,null,null,null)),(n()(),l._27(-1,null,["\n\t"])),(n()(),l._1(16777216,null,null,1,null,d)),l._5(8,16384,[[1,4]],0,c,[l.O],null,null),(n()(),l._27(-1,null,["\n"]))],function(n,t){n(t,3,0,t.component.toolbar)},null)}var f=l._2("category-type",s,function(n){return l._29(0,[(n()(),l._6(0,0,null,null,1,"category-type",[],null,null,null,g,p)),l._5(1,114688,null,0,s,[l.j],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),b=a("4qxJ"),v=a("qmzJ"),h=a("SYiH"),T=a("0DDR"),C=a("2MpB"),m=a("h4vs"),k=a("1Wt5"),w=a("GIoj"),j=a("WMnj"),O=l._4({encapsulation:0,styles:[[""]],data:{}});function I(n){return l._29(0,[(n()(),l._6(0,0,null,null,1,"table-view",[],null,null,null,w.b,w.a)),l._5(1,114688,null,0,j.a,[],{data:[0,"data"]},null)],function(n,t){n(t,1,0,t.component.data)},null)}var L=l._2("category",_,function(n){return l._29(0,[(n()(),l._6(0,0,null,null,1,"category",[],null,null,null,I,O)),l._5(1,114688,null,0,_,[],null,null)],function(n,t){n(t,1,0)},null)},{data:"data"},{},[]),A=l._4({encapsulation:0,styles:[[""]],data:{}});function R(n){return l._29(0,[(n()(),l._6(0,0,null,null,1,"table-view",[],null,null,null,w.b,w.a)),l._5(1,114688,null,0,j.a,[],{data:[0,"data"]},null)],function(n,t){n(t,1,0,t.component.data)},null)}var W=l._2("type",y,function(n){return l._29(0,[(n()(),l._6(0,0,null,null,1,"type",[],null,null,null,R,A)),l._5(1,114688,null,0,y,[],null,null)],function(n,t){n(t,1,0)},null)},{data:"data"},{},[]),F=a("Xjw4"),x=a("7DMc"),B=a("3kwk"),D=a("CXHW"),M=a("eOWw"),N=a("bfOx"),S=function(){},E=a("eCJc"),K=a("RX2M"),U=a("F+yc"),Y=a("/I96"),q=a("vfkA"),G=a("qsK9"),J=a("MSQt"),V=a("UyZi"),X=a("Ep2y"),z=a("WKBe"),H=a("1Z2I"),P=a("A8b0"),Z=a("as+d"),Q=a("62nT"),$=a("yDyO"),nn=a("K/oD"),tn=a("kzcK"),an=a("doi0"),ln=a("OKWU"),en=a("dDI/"),on=a("bc+t");a.d(t,"CategoryTypeModuleNgFactory",function(){return un});var un=l._3(e,[],function(n){return l._14([l._15(512,l.j,l.Y,[[8,[f,b.a,v.a,h.a,T.a,C.a,m.a,k.a,L,W]],[3,l.j],l.v]),l._15(4608,F.l,F.k,[l.s,[2,F.s]]),l._15(4608,x.B,x.B,[]),l._15(4608,B.a,B.a,[l.j,l.p,D.a]),l._15(4608,M.h,M.h,[]),l._15(4608,M.f,M.f,[]),l._15(4608,M.e,M.e,[]),l._15(512,F.b,F.b,[]),l._15(512,N.n,N.n,[[2,N.s],[2,N.k]]),l._15(512,S,S,[]),l._15(512,x.y,x.y,[]),l._15(512,x.j,x.j,[]),l._15(512,E.a,E.a,[]),l._15(512,K.a,K.a,[]),l._15(512,U.a,U.a,[]),l._15(512,Y.a,Y.a,[]),l._15(512,q.a,q.a,[]),l._15(512,G.b,G.b,[]),l._15(512,J.a,J.a,[]),l._15(512,V.a,V.a,[]),l._15(512,X.a,X.a,[]),l._15(512,z.a,z.a,[]),l._15(512,H.a,H.a,[]),l._15(512,P.a,P.a,[]),l._15(512,Z.a,Z.a,[]),l._15(512,Q.a,Q.a,[]),l._15(512,$.a,$.a,[]),l._15(512,nn.a,nn.a,[]),l._15(512,tn.b,tn.b,[]),l._15(512,an.a,an.a,[]),l._15(512,ln.a,ln.a,[]),l._15(512,M.c,M.c,[]),l._15(512,en.a,en.a,[]),l._15(512,on.a,on.a,[]),l._15(512,e,e,[]),l._15(1024,N.i,function(){return[[{path:"",component:s}]]},[]),l._15(256,M.a,{notFoundText:"No items found",typeToSearchText:"Type to search",addTagText:"Add item",loadingText:"Loading...",clearAllText:"Clear all",disableVirtualScroll:!1},[])])})}});