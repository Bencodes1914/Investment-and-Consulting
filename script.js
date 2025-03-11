
 const leftText = document.getElementById('leftText');
 const rightText = document.getElementById('rightText');
 const leftPanel = document.getElementById('leftPanel');
 const rightPanel = document.getElementById('rightPanel');
 const closeLeftPanel = document.getElementById('closeLeftPanel');
 const closeRightPanel = document.getElementById('closeRightPanel');
 const leftPanelContent = document.getElementById('leftPanelContent');
 const rightPanelContent = document.getElementById('rightPanelContent');
 
 leftText.addEventListener('click', function() {
   leftPanel.style.width = '100%';
   setTimeout(() => {
     leftPanelContent.style.opacity = '1';
   }, 300);
 });
 
 rightText.addEventListener('click', function() {
   rightPanel.style.width = '100%';
   setTimeout(() => {
     rightPanelContent.style.opacity = '1';
   }, 300);
 });
 
 closeLeftPanel.addEventListener('click', function() {
   leftPanelContent.style.opacity = '0';
   setTimeout(() => {
     leftPanel.style.width = '0';
   }, 300);
 });
 
 closeRightPanel.addEventListener('click', function() {
   rightPanelContent.style.opacity = '0';
   setTimeout(() => {
     rightPanel.style.width = '0';
   }, 300);
 });
 
 document.addEventListener('click', function(event) {
   if (!leftPanel.contains(event.target) && 
       !rightPanel.contains(event.target) && 
       event.target !== leftText && 
       event.target !== rightText) {
     
     if (leftPanel.style.width === '100%') {
       leftPanelContent.style.opacity = '0';
       setTimeout(() => {
         leftPanel.style.width = '0';
       }, 300);
     }
     
     if (rightPanel.style.width === '100%') {
       rightPanelContent.style.opacity = '0';
       setTimeout(() => {
         rightPanel.style.width = '0';
       }, 300);
     }
   }
 });