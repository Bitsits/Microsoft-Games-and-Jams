/*
 * (c) Copyright 2006, Klika, all rights reserved.
 *
 * This code is the property of Klika d.o.o. The code 
 * may not be included in, invoked from, or otherwise 
 * used in any software, service, device, or process 
 * which is sold, exchanged for profit, or for which 
 * a license, subscription, or royalty fee is charged.
 *
 * This code may not be modified without express
 * permission of Klika. You may not delete, disable, or in
 * any manner alter distinctive brand features rendered
 * by the code. The use of this code in derivative work is
 * permitted, provided that the code and this notice are 
 * included in full, and provided that the code is used for
 * its intended purposes in accordance with these terms.
 *
 * Permission is granted to use this code for personal,
 * educational, research, or commercial purposes, provided 
 * this notice is included, and provided this code is not 
 * used as described in the above paragraph.
 *
 * Email: legal at triptracker.net
 */

var agent=navigator.userAgent.toLowerCase();var IE=(agent.indexOf("msie")!=-1&&agent.indexOf("opera")==-1);var IE7=(agent.indexOf("msie 7")!=-1);var OPERA=(agent.indexOf("opera")!=-1);var IMG_ROOT="/jsmap";var log=getLogger();if(document.location.href.indexOf("#jslog")!=-1)
log.enable();function Logger(){this.enable=loggerEnable;this.clear=loggerClear;this.log=loggerLog;this.debug=loggerDebug;this.info=loggerInfo;this.error=loggerError;var console=undefined;try{console=document.createElement("textarea");console.style.display="none";console.style.position="absolute";console.style.right="3px";console.style.top="3px";console.style.width="23em";console.style.height="40em";console.style.fontFamily="monospace";console.style.fontSize="9px";console.style.color="#000000";console.border="1px solid #808080";var logger=this;console.ondblclick=function(){getLogger().clear();};}catch(e){}
this.console=console;this.enabled=false;this.logTimeStart=getTimeMillis();}
function getLogger(){var log=undefined;var win=window;while(log==undefined){try{log=win.document.log;}catch(e){break;}
if(win==win.parent)
break;win=win.parent;}
if(log==undefined){log=new Logger();document.log=log;}
return log;}
function loggerEnable(){if(this.enabled||this.console==undefined)
return;if(window.document.body!=undefined){window.document.body.appendChild(this.console);this.console.style.display="";this.enabled=true;}}
function loggerDebug(msg){this.log("DEBUG",msg);}
function loggerInfo(msg){this.log("INFO",msg);}
function loggerError(msg,e){this.log("ERROR",msg,e);}
function loggerLog(level,msg,e){if(!this.enabled||this.console==undefined)
return;var millis=(getTimeMillis()-this.logTimeStart)+"";while(millis.length<6)
millis+=" ";var m=millis+" ";if(msg!=undefined)
m+=msg+" ";if(e!=undefined)
m+=e.name+": "+e.message;this.console.value+=m+"\n";}
function loggerClear(){if(!this.enabled||this.console==undefined)
return;this.console.value="";}
function getTimeMillis(){var t=new Date();return Date.UTC(t.getFullYear(),t.getMonth(),t.getDay(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds());}
function getEvent(event){return(event!=undefined?event:window.event);}
function preventDefault(event){if(event.preventDefault){event.preventDefault();event.stopPropagation();}else{event.returnValue=false;event.cancelBubble=true;}}
function getEventTarget(event){if(event.srcElement!=undefined)
return event.srcElement;else
return event.target;}
function getResponse(url,async,getXML,callback,data){var req=undefined;try{req=new ActiveXObject("Msxml2.XMLHTTP");}catch(e1){try{req=new ActiveXObject("Microsoft.XMLHTTP");}catch(e2){req=new XMLHttpRequest();}}
if(req==undefined){log.error("Failed to initialize XML/HTTP");return undefined;}
req.open("GET",url,async);if(!async){req.send(undefined);if(req.readyState!=4){log.error("Request failed: "+req.readyState);return undefined;}
if(!getXML)
return req.responseText;else
return req.responseXML;}else{req.onreadystatechange=function(){callback(req,data);};req.send(undefined);return undefined;}}
function getElementsByTagName(node,tag){if(node==undefined)
return undefined;if(tag.indexOf(":")!=-1&&!IE){tag=tag.split(":")[1];return node.getElementsByTagName(tag);}else{return node.getElementsByTagName(tag);}}
function getFirstElementsValue(node,tag){if(node==undefined)
return undefined;var nodes=getElementsByTagName(node,tag);if(nodes.length===0)
return undefined;else
return getElementValue(nodes[0]);}
function getElementValue(node){var i;var val="";for(i=0;i<node.childNodes.length;i++)
val+=node.childNodes[i].nodeValue;return val;}
function setCookie(name,value,expire){var expiry=(expire==undefined)?"":("; expires="+expire.toGMTString());document.cookie=name+"="+value+expiry;}
function getCookie(name){if(document.cookie==undefined||document.cookie.length===0)
return undefined;var search=name+"=";var index=document.cookie.indexOf(search);if(index!=-1){index+=search.length;var end=document.cookie.indexOf(";",index);if(end==-1)
end=document.cookie.length;return unescape(document.cookie.substring(index,end));}}
function removeCookie(name){var today=new Date();var expires=new Date();expires.setTime(today.getTime()-1);setCookie(name,"",expires);}
function padNumber(n,pad){n=n+"";while(n.length<pad){n="0"+n;}
return n;}
function formatDate(date,longFormat){return padNumber(date.getMonth()+1,2)+"/"+padNumber(date.getDate(),2)+
(longFormat?"/"+date.getFullYear():"")+" "+
padNumber(date.getHours(),2)+":"+padNumber(date.getMinutes(),2);}
function parseISOTime(strTime){if(strTime==undefined)
return undefined;var isoRE=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d{3})?([Z+-])?(\d\d)?:?(\d\d)?$/;if(!isoRE.test(strTime)){return undefined;}else{return new Date(RegExp.$1,RegExp.$2-1,RegExp.$3,RegExp.$4,RegExp.$5,RegExp.$6);}}
function setOpacity(elt,opacity){if(IE){elt.style.filter="alpha(opacity="+parseInt(opacity*100)+")";}
elt.style.KhtmlOpacity=opacity;elt.style.opacity=opacity;}
function validCoordinates(lat,lon){return(Math.abs(lat)<=90&&Math.abs(lon)<=180);}
function isHosted(){var url=document.location.href;return(url.indexOf("http://triptracker.net")==-1&&url.indexOf("http://beta.triptracker.net")==-1);}
var SLIDE_DURATION=4000;var SLIDE_OFFSET=50;var SLIDE_PHOTOS=true;var FADE_BORDER=false;var FADE_STEPS=10;var MOVE_STEP=1;var PRELOAD_TIMEOUT=15000;var BORDER_WIDTH=5;var OFFSET_LEFT=0;var OFFSET_TOP=0;var REST_URL="/rest/";var P_IMG_ROOT=(isHosted()?"http://triptracker.net/jsmap/":IMG_ROOT);var BLANK_IMG="blank.png";var TOOLBAR_IMG="/photoviewer/images/toolbar.png";var TOOLBAR_IMG_RUNNING="/photoviewer/images/toolbar2.png";var TOOLBAR_IMG_BACK="/photoviewer/images/toolbar-back";var TOOLBAR_W=440;var TOOLBAR_H=75;var TOOLBAR_IMG_W=420;var TOOLBAR_IMG_H=44;function PhotoViewer(win,handleKeys){this.add=addPhoto;this.show=showPhoto;this.close=closePhoto;this.isShown=isShown;this.setBackground=setBackground;this.setShowToolbar=setShowToolbar;this.setToolbarImage=setToolbarImage;this.setShowCallback=setShowCallback;this.setCloseCallback=setCloseCallback;this.setLoading=setPhotoLoading;this.addToolbar=addToolbar;this.addCaptions=addCaptions;this.next=next;this.prev=prev;this.first=first;this.last=last;this.slideShow=slideShow;this.slideShowStop=slideShowStop;this.handleKey=viewerHandleKey;this.email=emailPhoto;this.favorite=favoritePhoto;this.permalink=linkPhoto;this.setBackgroundColor=setBackgroundColor;this.setBorderWidth=setBorderWidth;this.setSlideDuration=setSlideDuration;this.disablePanning=disablePanning;this.enablePanning=enablePanning;this.disableFading=disableFading;this.enableFading=enableFading;this.disableShade=disableShade;this.enableShade=enableShade;this.photos=[];this.index=0;this.win=(win!=undefined?win:window);this.shown=false;this.showToolbar=true;this.backgroundColor="#000000";this.borderColor="#000000";this.borderWidth=BORDER_WIDTH;this.backgroundShade=true;this.fadePhotos=true;this.slideDuration=SLIDE_DURATION;this.panPhotos=SLIDE_PHOTOS;if(handleKeys==undefined||handleKeys){if(this.win.addEventListener){this.win.addEventListener("keydown",viewerHandleKey,false);}else{this.win.document.attachEvent("onkeydown",viewerHandleKey);}}
this.win.document.viewer=this;this.shown=false;}
function PhotoImg(id,src,w,h,time,title){this.id=id;this.src=src;this.w=parseInt(w);this.h=parseInt(h);this.time=time;this.title=title;}
function setBackground(color,border,doShade){if(color!=undefined)
this.backgroundColor=color;if(border!=undefined)
this.borderColor=border;if(doShade!=undefined)
this.backgroundShade=doShade;}
function addPhoto(photo){var type=typeof photo;if(typeof photo=="string"){photo=new PhotoImg(undefined,photo);}
this.photos.push(photo);}
function showPhoto(index,cropWidth){if(this.photos.length===0){return true;}
if(index!=undefined)
this.index=index;if(this.index<0||this.index>=this.photos.length){log.error("Invalid photo index");return true;}
var doc=this.win.document;var photoBack=doc.getElementById("PhotoBack");var photoDiv=doc.getElementById("PhotoDiv");var photoElt=doc.getElementById("PhotoImg");var newElt=false;var zIndex=16384;var winSize=getWindowSize(this.win);var availW=winSize.w-20;var availH=winSize.h-20;var scrollPos=getScrollPos(this.win);var scrollLeft=scrollPos.left;var scrollTop=scrollPos.top;if(photoElt==undefined){photoBack=doc.createElement("div");photoBack.id="PhotoBack";photoBack.style.top="0px";photoBack.style.left="0px";photoBack.style.bottom="0px";photoBack.style.right="0px";photoBack.style.margin="0";photoBack.style.padding="0";photoBack.style.border="none";if(IE){photoBack.style.position="absolute";var docSize=getDocumentSize(this.win);photoBack.style.width=(docSize.w-21)+"px";photoBack.style.height=(docSize.h-4)+"px";}else{photoBack.style.position="fixed";photoBack.style.width="100%";photoBack.style.height="100%";}
photoBack.style.zIndex=zIndex-1;photoBack.style.backgroundColor="#000000";if(this.backgroundShade)
setOpacity(photoBack,0.7);else
setOpacity(photoBack,0.0);photoBack.onclick=function(){getViewer().close();};photoDiv=doc.createElement("div");photoDiv.id="PhotoDiv";photoDiv.style.position="absolute";photoDiv.style.zIndex=zIndex;photoDiv.style.overflow="hidden";photoDiv.style.border=this.borderWidth+"px solid "+this.borderColor;photoDiv.style.textAlign="center";photoDiv.style.backgroundColor=this.backgroundColor;if(this.showToolbar)
this.addToolbar(availW,zIndex);photoElt=doc.createElement("img");photoElt.id="PhotoImg";photoElt.style.position="relative";photoElt.style.backgroundColor=this.backgroundColor;photoElt.style.cursor="pointer";photoElt.style.zIndex=(parseInt(photoDiv.style.zIndex)+1)+"";photoElt.onclick=function(){getViewer().close();};newElt=true;}
var photo=this.photos[this.index];if(isNaN(photo.w)||isNaN(photo.h)){if(photo.preloadImage!=undefined){if(isNaN(photo.w)&&photo.preloadImage.width>0)
photo.w=photo.preloadImage.width;if(isNaN(photo.h)&&photo.preloadImage.height>0)
photo.h=photo.preloadImage.height;}else{this.index--;this.next();return false;}}
var offset=20;var pw=-1;var ph=-1;if(parseInt(photo.w)>availW||parseInt(photo.h)>availH){if(parseInt(photo.w)/availW>parseInt(photo.h)/availH){pw=availW-offset;ph=parseInt(pw*photo.h/photo.w);}else{ph=availH-offset;pw=parseInt(ph*photo.w/photo.h);}}else{pw=parseInt(photo.w);ph=parseInt(photo.h);}
if(pw<=0||ph<=0){if(!this.showToolbar)
throw"Missing photo dimension";}
if(cropWidth==undefined)
cropWidth=0;var left=parseInt((availW-pw)/2)+OFFSET_LEFT;photoDiv.style.left=(left+scrollLeft+cropWidth/2)+"px";var top=parseInt((availH-ph)/2)+OFFSET_TOP;photoDiv.style.top=(top+scrollTop)+"px";photoElt.style.visibility="hidden";photoDiv.style.width=(pw-cropWidth)+"px";photoDiv.style.height=ph+"px";photoElt.style.width=pw+"px";photoElt.style.height=ph+"px";this.win.setTimeout(function(){photoElt.src=photo.src;photoElt.style.visibility="visible";},100);if(newElt){doc.body.appendChild(photoBack);photoDiv.appendChild(photoElt);this.win.setTimeout(function(){doc.body.appendChild(photoDiv);},100);}
if(this.showToolbar)
this.addCaptions();this.setLoading(false);if(this.showCallback!=undefined)
this.showCallback(this.index);this.shown=true;return false;}
function isShown(){return this.shown;}
function getViewer(){var viewer=undefined;var win=window;while(viewer==undefined){try{viewer=win.document.viewer;}catch(e){break;}
win=win.parent;}
return viewer;}
function addCaptions(){var photo=this.photos[this.index];var doc=this.win.document;var photoTime=doc.getElementById("PhotoTime");var photoTitle=doc.getElementById("PhotoTitle");var time=(photo.time!=undefined?photo.time:"");photoTime.firstChild.nodeValue=time;var title="("+(this.index+1)+"/"+this.photos.length+")";if(photo.title!=undefined){title+="  "+photo.title;}
photoTitle.firstChild.nodeValue=title;}
function onPhotoLoad(event){var viewer=getViewer();if(viewer!=undefined){if(flickrHack(viewer,viewer.index)){viewer.setLoading(false);viewer.index--;viewer.next();return;}
viewer.show();}}
function flickrHack(viewer,index){if(viewer.photos[index]!=undefined){var preloadPhoto=viewer.photos[index].preloadImage;if(preloadPhoto!=undefined&&preloadPhoto.width==500&&preloadPhoto.height==375){var flickrRE=/.+static\.flickr\.com.+_b\.jpg/;if(flickrRE.test(preloadPhoto.src)){viewer.photos[index].src=viewer.photos[index].src.replace(/_b\.jpg/,"_o.jpg");return true;}}}
return false;}
function closePhoto(){var win=this.win;if(win==undefined)
win=window;var doc=win.document;var elt=doc.getElementById("PhotoDiv");if(elt!=undefined)
doc.body.removeChild(elt);elt=doc.getElementById("PhotoBack");if(elt!=undefined)
doc.body.removeChild(elt);elt=doc.getElementById("PhotoToolbar");if(elt!=undefined)
doc.body.removeChild(elt);this.shown=false;this.slideShowRunning=false;this.slideShowPaused=false;if(this.closeCallback!=undefined)
this.closeCallback(this.index);}
function next(n){if(this.isLoading)
return;if(n==undefined)
n=1;var oldIndex=this.index;if(this.index+n>=this.photos.length){if(n>1)
this.index=this.photos.length-1;else
return;}else if(this.index+n<0){if(n<-1)
this.index=0;else
return;}else{this.index+=n;}
if(this.index==oldIndex)
return;this.slideShowStop();var img=new Image();this.photos[this.index].preloadImage=img;this.setLoading(true);img.onload=onPhotoLoad;img.onerror=onPhotoLoad;img.src=this.photos[this.index].src;}
function prev(n){if(n==undefined)
n=1;this.next(-n);}
function first(){this.prev(this.photos.length);}
function last(){this.next(this.photos.length);}
var slideTimeout;var slidePreloadImageLoaded=false;var slidePreloadTime=undefined;function slideShow(start){var doc=this.win.document;var viewer=this;var photoElt=doc.getElementById("PhotoImg");if(photoElt==undefined)
return;var photoDiv=doc.getElementById("PhotoDiv");var fadeElt=(FADE_BORDER?photoDiv:photoElt);if(start!=undefined&&start===true){if(this.isLoading){return;}
if(this.slideShowPaused){this.slideShowPaused=false;this.setToolbarImage(P_IMG_ROOT+TOOLBAR_IMG_RUNNING);return;}else if(this.slideShowRunning){this.slideShowPaused=true;this.setToolbarImage(P_IMG_ROOT+TOOLBAR_IMG);return;}else{this.slideShowRunning=true;this.slideShowPaused=false;this.slideFirstPhoto=true;this.setToolbarImage(P_IMG_ROOT+TOOLBAR_IMG_RUNNING);}}else if(this.slideShowPaused){window.setTimeout(function(){viewer.slideShow(false);},200);return;}else if(!this.slideShowRunning){this.setToolbarImage(P_IMG_ROOT+TOOLBAR_IMG);return;}
var left=0;if(photoElt.leftOffset!=undefined){left=parseFloat(photoElt.leftOffset);}
if(left===0){if(this.index<this.photos.length-1){slidePreloadImageLoaded=false;var slidePreloadImage=new Image();this.photos[this.index+1].preloadImage=slidePreloadImage;slidePreloadTime=getTimeMillis();slidePreloadImage.onload=onSlideLoad;slidePreloadImage.onerror=onSlideLoad;slidePreloadImage.src=this.photos[this.index+1].src;}}
if(left>-SLIDE_OFFSET){left-=MOVE_STEP;if(-left<=FADE_STEPS){if(fadeElt.style.opacity!=undefined&&parseFloat(fadeElt.style.opacity)<1){if(this.fadePhotos&&this.photos[this.index].src!=undefined)
setOpacity(fadeElt,-left/FADE_STEPS);}}else if(left+SLIDE_OFFSET<FADE_STEPS){if(this.index<this.photos.length-1&&!slidePreloadImageLoaded){if(slidePreloadTime!=undefined&&getTimeMillis()-slidePreloadTime>PRELOAD_TIMEOUT)
slidePreloadImageLoaded=true;left++;this.setLoading(true);}else{if(this.fadePhotos&&this.photos[this.index].src!=undefined)
setOpacity(fadeElt,(left+SLIDE_OFFSET)/FADE_STEPS);}}
photoElt.leftOffset=left;if(this.panPhotos&&!this.slideFirstPhoto){photoElt.style.left=left+"px";}}else{if(this.index>=this.photos.length-1){this.slideShowStop();this.close();return;}
this.index++;this.slideFirstPhoto=false;this.show(undefined,(this.panPhotos?SLIDE_OFFSET:0));if(this.fadePhotos)
setOpacity(fadeElt,0);photoElt.leftOffset=0;if(this.panPhotos)
photoElt.style.left="0px";}
var pause=this.slideDuration/SLIDE_OFFSET;if(this.slideFirstPhoto){pause/=2;}
slideTimeout=window.setTimeout(function(){viewer.slideShow(false);},pause);}
function onSlideLoad(event){var viewer=getViewer();if(viewer!=undefined){if(flickrHack(viewer,viewer.index+1)){var slidePreloadImage=viewer.photos[viewer.index+1].preloadImage;slidePreloadImage.src=viewer.photos[viewer.index+1].src;slidePreloadTime=getTimeMillis();return;}
slidePreloadImageLoaded=true;viewer.setLoading(false);}}
function slideShowStop(){this.slideShowRunning=false;this.slideShowPaused=false;var doc=this.win.document;var photoElt=doc.getElementById("PhotoImg");if(photoElt!=undefined){if(this.fadePhotos)
setOpacity(photoElt,1);photoElt.style.left="0px";}}
function addToolbar(availW,zIndex){var doc=this.win.document;var i;var id="PhotoToolbar";if(doc.getElementById(id)!=undefined)
return;var photoToolbar=doc.createElement("div");photoToolbar.id=id;if(IE)
photoToolbar.style.position="absolute";else
photoToolbar.style.position="fixed";photoToolbar.style.bottom="5px";photoToolbar.style.left=(availW-TOOLBAR_W+10)/2+"px";photoToolbar.style.width=TOOLBAR_W+"px";photoToolbar.style.height=TOOLBAR_H+"px";photoToolbar.style.textAlign="center";setOpacity(photoToolbar,0.7);photoToolbar.style.zIndex=zIndex+1;var imgBack=TOOLBAR_IMG_BACK;if(!isHosted()){imgBack+="-nologo";}
if(IE&&!IE7){imgBack+="-indexed";}
imgBack+=".png";photoToolbar.style.backgroundImage="url('"+P_IMG_ROOT+imgBack+"')";photoToolbar.style.backgroundPosition="50% 100%";photoToolbar.style.backgroundRepeat="no-repeat";var imgMap=doc.createElement("map");imgMap.name="toolbar";imgMap.id="toolbar";var areas=[["document.viewer.first()","17","Go to Start (Home)"],["document.viewer.prev()","68","Previous Photo (Left arrow)"],["document.viewer.slideShow(true)","122","Start/Pause Slide Show (Space)"],["document.viewer.next()","175","Next Photo (Right arrow)"],["document.viewer.last()","227","Go to End (End)"],["document.viewer.email()","300","Email Photo"],["document.viewer.permalink()","350","Link to Photo"],["document.viewer.close()","402","Close (Esc)"]];for(i=0;i<areas.length;i++){var area=doc.createElement("area");area.href="javascript:void("+areas[i][0]+")";area.alt=areas[i][2];area.title=area.alt;area.shape="circle";area.coords=areas[i][1]+", 21, 22";imgMap.appendChild(area);}
var img=doc.createElement("img");img.id="PhotoToolbarImage";img.src=P_IMG_ROOT+TOOLBAR_IMG;img.width=TOOLBAR_IMG_W;img.height=TOOLBAR_IMG_H;img.style.border="none";img.style.margin="4px";img.useMap="#toolbar";img.onclick=function(){this.blur();};photoToolbar.appendChild(imgMap);photoToolbar.appendChild(img);if(isHosted()){var ttLink=doc.createElement("a");ttLink.style.position="absolute";ttLink.style.bottom="0px";ttLink.style.right="0px";ttLink.style.width="25px";ttLink.style.height="25px";ttLink.alt="TripTracker.net";ttLink.title=ttLink.alt;ttLink.cursor=ttLink.alt;ttLink.href="http://triptracker.net";ttLink.target="_new";ttLink.alt="TripTracker.net";ttLink.title=ttLink.alt;ttLink.onmouseover=function(){this.style.background='none';};photoToolbar.appendChild(ttLink);}
var loadingIcon=doc.createElement("img");loadingIcon.id="PhotoLoading";loadingIcon.width=16;loadingIcon.height=16;loadingIcon.style.display="none";loadingIcon.style.position="absolute";loadingIcon.style.left=(273-8)+"px";loadingIcon.style.top=(24-8)+"px";loadingIcon.src=P_IMG_ROOT+"/images/loading-anim.gif";photoToolbar.appendChild(loadingIcon);photoToolbar.appendChild(doc.createElement("br"));var photoTitle=doc.createElement("span");photoTitle.id="PhotoTitle";photoTitle.style.color="#c0c0c0";photoTitle.style.fontFamily="tahoma, verdana, arial, helvetica, sans-serif";photoTitle.style.fontSize="14px";photoTitle.style.textAlign="right";photoTitle.style.width="40%";photoTitle.position="relative";photoTitle.style.marginRight="10px";photoTitle.appendChild(doc.createTextNode(""));photoToolbar.appendChild(photoTitle);var photoTime=doc.createElement("span");photoTime.id="PhotoTime";photoTime.position="relative";photoTime.style.color="#c0c0c0";photoTime.style.fontFamily="tahoma, verdana, arial, helvetica, sans-serif";photoTime.style.fontSize="12px";photoTime.style.textAlign="left";photoTime.style.width="40%";photoTime.appendChild(doc.createTextNode(""));photoToolbar.appendChild(photoTime);doc.body.appendChild(photoToolbar);}
function setToolbarImage(img){var doc=this.win.document;var elt=doc.getElementById("PhotoToolbarImage");if(elt!=undefined)
elt.src=img;}
function setShowToolbar(doShow){this.showToolbar=doShow;}
function setCloseCallback(callback){this.closeCallback=callback;}
function setShowCallback(callback){this.showCallback=callback;}
function emailPhoto(){var photo=this.photos[this.index];var doc=this.win.document;var title=(photo.title!=undefined?photo.title:"Photo");var mailtoLink="mailto:?subject="+title+"&body="+
photo.src;doc.location.href=mailtoLink;}
function linkPhoto(){var photo=this.photos[this.index];window.open(photo.src);}
function favoritePhoto(){var photo=this.photos[this.index];var doc=this.win.document;var restURL=REST_URL+"markfeatured?id"+photo.id;try{var res=getResponse(restURL,false,true);}catch(e){alert("Failed to mark photo as featured: "+e.message);return;}}
function getWindowSize(win){var availW=win.innerWidth;if(availW==undefined||availW===0||isNaN(availW))
availW=win.document.documentElement.clientWidth;if(availW==undefined||availW===0||isNaN(availW))
availW=win.document.body.clientWidth;var availH=win.innerHeight;if(availH==undefined||availH===0||isNaN(availH))
availH=win.document.documentElement.clientHeight;if(availH==undefined||availH===0||isNaN(availH))
availH=win.document.body.clientHeight;return{w:availW,h:availH};}
function getDocumentSize(win){var winSize=getWindowSize(win);var scrollPos=getScrollPos(win);var w=winSize.w+scrollPos.left;var h=winSize.h+scrollPos.top;w=Math.max(w,win.document.body.offsetWidth);h=Math.max(h,win.document.body.offsetHeight);w=Math.max(w,win.document.body.scrollWidth);h=Math.max(h,win.document.body.scrollHeight);return{w:w,h:h};}
function getScrollPos(win){var scrollTop=win.pageYOffset;if(scrollTop==undefined||scrollTop===0)
scrollTop=win.document.documentElement.scrollTop;if(scrollTop==undefined||scrollTop===0)
scrollTop=win.document.body.scrollTop;var scrollLeft=win.pageXOffset;if(scrollLeft==undefined||scrollLeft===0)
scrollLeft=win.document.documentElement.scrollLeft;if(scrollLeft==undefined||scrollLeft===0)
scrollLeft=win.document.body.scrollLeft;return{top:scrollTop,left:scrollLeft};}
function setPhotoLoading(isLoading){this.isLoading=isLoading;var elt=this.win.document.getElementById("PhotoLoading");if(elt==undefined)
return;elt.style.display=isLoading?"":"none";}
function setBackgroundColor(color){this.backgroundColor=color;this.borderColor=color;}
function setBorderWidth(width){this.borderWidth=width;}
function setSlideDuration(duration){this.slideDuration=duration;}
function disableShade(){this.backgroundShade=false;}
function enableShade(){this.backgroundShade=true;}
function disableFading(){this.fadePhotos=false;}
function enableFading(){this.fadePhotos=true;}
function disablePanning(){this.panPhotos=false;}
function enablePanning(){this.panPhotos=true;}
function viewerHandleKey(event){if(!getViewer)
return true;var viewer=getViewer();if(viewer==undefined||!viewer.shown)
return true;event=getEvent(event);if(event.ctrlKey||event.altKey)
return true;var keyCode=event.keyCode;switch(keyCode){case 37:case 38:viewer.prev();break;case 39:case 40:viewer.next();break;case 33:viewer.prev(10);break;case 34:viewer.next(10);break;case 36:viewer.first();break;case 35:viewer.last();break;case 32:case 13:viewer.slideShow(true);break;case 27:viewer.close();break;default:return true;}
preventDefault(event);return false;}
function findPhotosTT(viewer,node){var i;if(node.nodeName.toLowerCase()=="a"){var onclick=node.getAttribute("onclick");if(onclick==undefined){onclick=node.onclick;}
if(onclick!=undefined&&new String(onclick).indexOf("popupImg")!=-1){var popupRE=/.*popupImg\((.+?),(.+?),(.+?)\).*/;if(popupRE.test(onclick)){var url,w,h;if(node.photoUrl!=undefined){url=node.photoUrl;w=node.photoW;h=node.photoH;}else{url=RegExp.$1;if(url.charAt(0)=="'"&&url.charAt(url.length-1)=="'")
url=url.substring(1,url.length-1);w=parseInt(RegExp.$2);h=parseInt(RegExp.$3);}
var photo=new PhotoImg(undefined,url,w,h);var found=false;for(i=0;i<viewer.photos.length;i++){if(viewer.photos[i].src==photo.src){found=true;break;}}
if(!found)
viewer.add(photo);}}}
if(node.childNodes!=undefined){for(i=0;i<node.childNodes.length;i++){findPhotosTT(viewer,node.childNodes[i]);}}}
var defaultViewer=undefined;function popupImg(url,w,h,backColor,showToolbar){var i;if(defaultViewer==undefined)
defaultViewer=new PhotoViewer();else{defaultViewer.photos=[];defaultViewer.index=0;}
if(backColor!=undefined)
defaultViewer.setBackground(backColor,backColor,false);if(showToolbar==undefined||showToolbar){findPhotosTT(defaultViewer,window.document.body);for(i=0;i<defaultViewer.photos.length;i++){if(defaultViewer.photos[i].src==url){defaultViewer.show(i);}}}
if(defaultViewer.photos===undefined||defaultViewer.photos.length===0){defaultViewer.setShowToolbar(false);defaultViewer.add(new PhotoImg(undefined,url,w,h));defaultViewer.show();}
return false;}