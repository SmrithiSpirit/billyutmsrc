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
    var url = JSON.parse(localStorage.getItem("conv_session"))
    var arr = url.split('/')
    console.log(arr[1].referrer,"check for utm src")
   }
}
  return;
 } catch (error) {
  console.log(error, "error")
  return;
 }
}, false);
