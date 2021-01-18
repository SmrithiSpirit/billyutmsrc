window.addEventListener('message', function(eventData) {
 try {
  if (JSON.parse(eventData.data)) {
  let event = JSON.parse(eventData.data);
  
  if (event.event_code === "custom-event" && event.data && event.data.code === "google-login") {
    // let win = window.open("", "Payment", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
    // win.document.body.innerHTML = event.data.data;
      var newWindow = window.open();
      newWindow.document.write(event.data.data);
      newWindow.document.close();
      return;
  }
   if(event.event_code === "custom-event" && event.data && event.data.code === "utm-src"){
    var x = localStorage.getItem("utm_source")
    console.log(x)
   }
}
  return;
 } catch (error) {
  console.log(error, "error")
  return;
 }
}, false);
