var mtlcNowType="rect";var mtlcTypeAry=new Array("rect","bar");var mtlcNowRatioRect=1618;var mtlcRatioRectAry=new Array(1000,1333,1414,1618,1732,2000,2414,2618,3303);var mtlcNowRatioBar=1618;var mtlcRatioBarAry=new Array(1414,1618,1732,2000,2414,2618,3303);var mtlcNowFP="round";var mtlcFPAry=new Array("round","zero1","zero2","zero3");var mtlcRectIPos=2;var mtlcBarIPos=3;var mtlcRectNum=100;var mtlcBarNum=1000;var mrLoad1st=true;for(var ic1=0;ic1<mtlcRatioRectAry.length;ic1++){var cacheImg11=new Image();cacheImg11.src="images/idx_btn_rect_"+mtlcRatioRectAry[ic1]+"_off.png";var cacheImg12=new Image();cacheImg12.src="images/idx_btn_rect_"+mtlcRatioRectAry[ic1]+"_on.png";}for(var ic2=0;ic2<mtlcRatioBarAry.length;ic2++){var cacheImg21=new Image();cacheImg21.src="images/idx_btn_bar_"+mtlcRatioBarAry[ic2]+"_off.png";var cacheImg22=new Image();cacheImg22.src="images/idx_btn_bar_"+mtlcRatioBarAry[ic2]+"_on.png";}var loadCookie;loadCookie=$loadCookie("MTLC-NOWTYPE","e");if(loadCookie){mtlcNowType=loadCookie;}loadCookie=$loadCookie("MTLC-NOWRATIORECT","e");if(loadCookie){mtlcNowRatioRect=loadCookie;}loadCookie=$loadCookie("MTLC-NOWRATIOBAR","e");if(loadCookie){mtlcNowRatioBar=loadCookie;}loadCookie=$loadCookie("MTLC-NOWFP","e");if(loadCookie){mtlcNowFP=loadCookie;}loadCookie=$loadCookie("MTLC-RECTIPOS","e");if(loadCookie){mtlcRectIPos=loadCookie;}loadCookie=$loadCookie("MTLC-BARIPOS","e");if(loadCookie){mtlcBarIPos=loadCookie;}loadCookie=$loadCookie("MTLC-RECTNUM","e");if(loadCookie){mtlcRectNum=loadCookie;}loadCookie=$loadCookie("MTLC-BARNUM","e");if(loadCookie){mtlcBarNum=loadCookie;}function mtlcLoad1st(){if(mtlcNowType!="rect"){setBtnRatioType(mtlcNowType);$id("type-set-rect").style.display="none";$id("type-set-bar").style.display="block";$id("result-rect").style.display="none";$id("result-bar").style.display="block";}setBtnRatio();setBtnFP(mtlcNowFP);$id("rect-input"+mtlcRectIPos).value=mtlcRectNum;$id("bar-input"+mtlcBarIPos).value=mtlcBarNum;mathRatio();if(mtlcNowType=="rect"){rectMove();}else{barMove();}if(pageType=="pc"){$id("type-ctrl").style.paddingLeft="0";}else{$id("type-ctrl").style.paddingLeft=Math.floor(($innerSizeB("W")-172)/2)+"px";}}var changingType=false;var oldRatioType;function changeType(tarType){if(mtlcNowType!=tarType&&!changingType){oldRatioType=mtlcNowType;mtlcNowType=tarType;$writeCookie("MTLC-NOWTYPE",mtlcNowType,"365d","e");setBtnRatioType(tarType);mathRatio();changingType=true;fadeoutRatioType(oldRatioType);}}function fadeoutRatioType(tarSet){var workSet=$id("type-set-"+tarSet);var workResult=$id("result-"+tarSet);var nowAlpha=$getAlpha(workSet);var newAlpha=$numFitRange(String(nowAlpha-25),0,100);$setAlpha(workSet,newAlpha);$setAlpha(workResult,newAlpha);if(newAlpha>0){setTimeout("fadeoutRatioType('"+tarSet+"')",40);}else{$id("type-set-"+oldRatioType).style.display="none";$id("type-set-"+mtlcNowType).style.display="block";$setAlpha("type-set-"+mtlcNowType,0);$id("result-"+oldRatioType).style.display="none";$id("result-"+mtlcNowType).style.display="block";$setAlpha("result-"+mtlcNowType,0);if(mtlcNowType=="rect"){rectMove();}else{barMove();}fadeinRatioType(mtlcNowType);}}function fadeinRatioType(tarSet){var workSet=$id("type-set-"+tarSet);var workResult=$id("result-"+tarSet);var nowAlpha=$getAlpha(workSet);var newAlpha=$numFitRange(String(nowAlpha+20),0,100);$setAlpha(workSet,newAlpha);$setAlpha(workResult,newAlpha);if(newAlpha<100){setTimeout("fadeinRatioType('"+tarSet+"')",40);}else{changingType=false;}}function changeRatio(tarRatio){if(!resultMoving){if(mtlcNowType=="rect"){mtlcNowRatioRect=tarRatio;$writeCookie("MTLC-NOWRATIORECT",mtlcNowRatioRect,"365d","e");setBtnRatio();rectMove();}else{mtlcNowRatioBar=tarRatio;$writeCookie("MTLC-NOWRATIOBAR",mtlcNowRatioBar,"365d","e");setBtnRatio();barMove();}}mathRatio();}function changeFP(tarType){if(mtlcNowFP!=tarType){mtlcNowFP=tarType;$writeCookie("MTLC-NOWFP",mtlcNowFP,"365d","e");setBtnFP(tarType);mathRatio();}}function setBtnRatioType(tarType){var tarAryNum=$aryFind(mtlcTypeAry,tarType)[1];var workAncAry=$tag("a","type-ctrl");for(var wk=0;wk<workAncAry.length;wk++){if(wk==tarAryNum){$setClass(workAncAry[wk],"nowtype",false,true);}else{$setClass(workAncAry[wk],"",false,true);}}}function setBtnRatio(){var tarAryNum=$aryFind(mtlcRatioRectAry,mtlcNowRatioRect)[1];var workAncAry=$tag("a","type-set-rect");for(var wk=0;wk<workAncAry.length;wk++){if(wk==tarAryNum){$setClass(workAncAry[wk],"nowratio",false,true);}else{$setClass(workAncAry[wk],"",false,true);}}tarAryNum=$aryFind(mtlcRatioBarAry,mtlcNowRatioBar)[1];workAncAry=$tag("a","type-set-bar");for(wk=0;wk<workAncAry.length;wk++){if(wk==tarAryNum){$setClass(workAncAry[wk],"nowratio",false,true);}else{$setClass(workAncAry[wk],"",false,true);}}}function setBtnFP(tarType){var tarAryNum=$aryFind(mtlcFPAry,tarType)[1];var workAncAry=$tag("a","result-ctrl");for(var wk=0;wk<workAncAry.length;wk++){if(wk==tarAryNum){$setClass(workAncAry[wk],"nowfptype",false,true);}else{$setClass(workAncAry[wk],"",false,true);}}}function setInputPos(tarInput){if(mtlcNowType=="rect"){mtlcRectIPos=tarInput.id.substr(10,1);$writeCookie("MTLC-RECTIPOS",mtlcRectIPos,"365d","e");}else{mtlcBarIPos=tarInput.id.substr(9,1);$writeCookie("MTLC-BARIPOS",mtlcBarIPos,"365d","e");}if($checkBytes(tarInput.value,4,".")){$writeCookie("MTLC-"+mtlcNowType.toUpperCase()+"NUM",tarInput.value,"365d","e");}}function inputWArrange(){for(var bi=1;bi<=5;bi++){var useColor="#1c95ad";var defColor="#444444";var workInput;if(bi<=2){workInput=$id("rect-input"+bi);if(mtlcRectIPos==bi){workInput.style.color=useColor;}else{workInput.style.color=defColor;}}else{workInput=$id("bar-input"+(bi-2));if(mtlcBarIPos==bi-2){workInput.style.color=useColor;}else{workInput.style.color=defColor;}}var inputValue=workInput.value;var numColumns,fpCount;if($checkBytes(inputValue,4,".")){if(inputValue.length>=2&&(inputValue.substr(0,1)=="0"&&inputValue.substr(1,1)!=".")){inputValue=inputValue.substr(1);workInput.value=inputValue;}numColumns=String(inputValue).length;fpCount=0;if(inputValue.indexOf(".")>=0){fpCount=1;}}else{numColumns=String(inputValue).length;fpCount=0;}var inputNewW,parentNodeW,inputBaseW1,inputBaseW2,inputBaseW3;if(pageType=="pc"){inputBaseW1=25;inputBaseW2=27;inputBaseW3=13;}else{inputBaseW1=10;inputBaseW2=12;inputBaseW3=5;}if(workInput.id=="rect-input1"){inputNewW=(inputBaseW2*(numColumns-fpCount))+(inputBaseW3*fpCount);parentNodeW=workInput.parentNode.offsetWidth-8;inputNewW=Math.min(parentNodeW,inputNewW+13);inputNewW=$numFitRange(inputNewW,inputBaseW2,9999);}else if(workInput.id=="rect-input2"){inputNewW=(inputBaseW2*(numColumns-fpCount))+(inputBaseW3*fpCount);parentNodeW=workInput.parentNode.offsetWidth-8;inputNewW=Math.min(parentNodeW,inputNewW);inputNewW=$numFitRange(inputNewW,inputBaseW2,9999);workInput.style.left=Math.floor((parentNodeW-(inputNewW))/2)+"px";}else if(workInput.id=="bar-input1"||workInput.id=="bar-input2"){inputNewW=(inputBaseW1*(numColumns-fpCount))+(inputBaseW3*fpCount)+10;inputNewW=$numFitRange(inputNewW,inputBaseW1,9999);}else{inputNewW=(inputBaseW2*(numColumns-fpCount))+(inputBaseW3*fpCount)+12;inputNewW=$numFitRange(inputNewW,inputBaseW2,9999);}workInput.style.width=inputNewW+"px";}}var mtlrDisplayW;var resultMoving=false;var rectOldWidth;var rectNewWidth;var rectMoveCount;function rectMove(){if(!resultMoving){resultMoving=true;if(pageType=="pc"){mtlrDisplayW=1000;}else{mtlrDisplayW=$innerSizeB("W");}var commonH=Math.ceil(mtlrDisplayW/3.303);$id("result-area").style.height=commonH+"px";$id("result-rect").style.height=commonH-8+"px";$id("rect-input1").style.top=Math.floor(((commonH-8)-$id("rect-input1").offsetHeight)/2)+"px";$id("rect-input2").style.top=(commonH-8)-$id("rect-input2").offsetHeight+"px";var resultW=commonH*(Number(mtlcNowRatioRect)/1000);rectNewWidth=$numFitRange(Math.round(resultW),80,mtlrDisplayW);rectOldWidth=$id("result-rect").offsetWidth;rectMoveCount=0;rectMoveAct();}}function rectMoveAct(){var startRectW=rectOldWidth-8;var tarRectW=rectNewWidth-8;rectMoveCount++;var aniAry=$aniEasing2(startRectW,tarRectW,2.8,rectMoveCount);if(aniAry[0]!==0){$id("result-rect").style.width=aniAry[1]+"px";setTimeout(rectMoveAct,40);}else{$id("result-rect").style.width=tarRectW+"px";resultMoving=false;if(mrLoad1st){mrLoad1st=false;rectMove();}}$id("result-rect").style.left=Math.floor((mtlrDisplayW-$id("result-rect").offsetWidth)/2)+"px";inputWArrange();}var barBaseWidth,barOldFullW,barNewFullW;var barMoveCount;function barMove(){if(!resultMoving){if(pageType=="pc"){mtlrDisplayW=1000;}else{mtlrDisplayW=$innerSizeB("W");}if(pageType=="pc"){$id("result-area").style.height="303px";}else{$id("result-area").style.height="133px";}var baseW=Math.ceil(mtlrDisplayW/3.303);barBaseWidth=baseW;var workAllW=baseW*(Number(mtlcNowRatioBar)/1000);barNewFullW=$numFitRange(Math.round(workAllW),10,mtlrDisplayW);barOldFullW=$id("result-bar").offsetWidth;barMoveCount=0;barMoveAct();}}function barMoveAct(){var startFullW=barOldFullW;var tarFullW=barNewFullW;barMoveCount++;var aniAry=$aniEasing2(startFullW,tarFullW,2.8,barMoveCount);var aniFullW;if(aniAry[0]!==0){aniFullW=aniAry[1];$id("result-bar").style.width=aniFullW+"px";$id("result-bar").style.left=Math.floor((mtlrDisplayW-aniFullW)/2)+"px";$id("result-bar-numbox1").style.width=barBaseWidth-3+"px";$id("result-bar-numbox2").style.width=aniFullW-barBaseWidth-3+"px";$id("result-bar-l").style.width=barBaseWidth-4+"px";$id("result-bar-r").style.width=aniFullW-barBaseWidth-4+"px";$id("result-bar-numbox3").style.width=aniFullW-4+"px";setTimeout(barMoveAct,40);}else{aniFullW=tarFullW;$id("result-bar").style.width=aniFullW+"px";$id("result-bar").style.left=Math.floor((mtlrDisplayW-aniFullW)/2)+"px";$id("result-bar-numbox1").style.width=barBaseWidth-3+"px";$id("result-bar-numbox2").style.width=aniFullW-barBaseWidth-3+"px";$id("result-bar-l").style.width=barBaseWidth-4+"px";$id("result-bar-r").style.width=aniFullW-barBaseWidth-4+"px";$id("result-bar-numbox3").style.width=aniFullW-4+"px";resultMoving=false;}}function mathRatio(){var tarInput;if(mtlcNowType=="rect"){tarInput=$id("rect-input"+mtlcRectIPos);}else{tarInput=$id("bar-input"+mtlcBarIPos);}if($checkBytes(tarInput.value,4,".")||tarInput.value===""){var baseNum,num1,num2,num3;if(mtlcNowType=="rect"){if(tarInput.id.indexOf("input1")>=0){baseNum=$id("rect-input1").value;num2=baseNum*(mtlcNowRatioRect/1000);$id("rect-input2").value=mathFP(num2);}else{baseNum=$id("rect-input2").value;num1=baseNum/(mtlcNowRatioRect/1000);$id("rect-input1").value=mathFP(num1);}}else if(mtlcNowType=="bar"){if(tarInput.id.indexOf("input1")>=0){baseNum=$id("bar-input1").value;num3=baseNum*(mtlcNowRatioBar/1000);num2=num3-baseNum;$id("bar-input2").value=mathFP(num2);$id("bar-input3").value=mathFP(num3);}else if(tarInput.id.indexOf("input2")>=0){baseNum=$id("bar-input2").value;num1=baseNum/((mtlcNowRatioBar-1000)/1000);num3=parseFloat(num1)+parseFloat(baseNum);$id("bar-input1").value=mathFP(num1);$id("bar-input3").value=mathFP(num3);}else{baseNum=$id("bar-input3").value;num1=baseNum/(mtlcNowRatioBar/1000);num2=baseNum-num1;$id("bar-input1").value=mathFP(num1);$id("bar-input2").value=mathFP(num2);}}}else{var ik,workInput;if(mtlcNowType=="rect"){for(ik=1;ik<=2;ik++){workInput=$tag("input","result-rect")[ik-1];if(workInput!=tarInput){workInput.value="?";}}}else if(mtlcNowType=="bar"){for(ik=1;ik<=3;ik++){workInput=$tag("input","result-bar")[ik-1];if(workInput!=tarInput){workInput.value="?";}}}}inputWArrange();}function mathFP(tarNum){var resultNum;if(pageType=="pc"){if(mtlcNowFP=="zero1"){resultNum=$numFP(String(tarNum),1,false);}else if(mtlcNowFP=="zero2"){resultNum=$numFP(String(tarNum),2,false);}else if(mtlcNowFP=="zero3"){resultNum=$numFP(String(tarNum),3,false);}else{resultNum=Math.round(tarNum);}}else{resultNum=Math.round(tarNum);}return resultNum;}