const btnSubmitShipmentID = document.querySelector(".btn-submit-shipment-id");
const inputTextShipmentID = document.querySelector("#shipment-id");
const resultShipmentID = document.querySelector("#result-shipment-id");
const btnCopyResultShipmentID = document.querySelector(".btn-copy-shipment-id");

const btnSubmitTrackingID = document.querySelector(".btn-submit-tracking-id");
const inputTextTrackingID = document.querySelector("#tracking-id");
const resultTrackingID = document.querySelector("#result-tracking-id");
const btnCopyResultTrackingID = document.querySelector(".btn-copy-tracking-id");

btnSubmitShipmentID.addEventListener("click", () => {
  let resultValue = inputTextShipmentID.value.split("\n").map((shipmentID) => {
    return parseInt(shipmentID);
  });

  resultShipmentID.value = resultValue;
});

btnCopyResultShipmentID.addEventListener("click", () => {
  resultShipmentID.select();
  resultShipmentID.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(resultShipmentID.value);

  /* Alert the copied text */
  alert("Berhasil Disalin!");

  resultShipmentID.value = "";
});

btnSubmitTrackingID.addEventListener("click", () => {
  let resultValue = inputTextTrackingID.value.split("\n").map((trackingID) => {
    return "'" + trackingID + "'";
  });
  resultTrackingID.value = resultValue;
});

btnCopyResultTrackingID.addEventListener("click", () => {
  resultTrackingID.select();
  resultTrackingID.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(resultTrackingID.value);

  /* Alert the copied text */
  alert("Berhasil Disalin!");

  resultTrackingID.value = "";
});
