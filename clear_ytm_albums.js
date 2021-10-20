/************************* REMOVE ALL YOUTUBE MUSIC ALBUMS **************************/
/** Usage:                                                                          */
/**  - Navigate to the album list in your Youtube Music library                     */
/**  - Scroll all the way down the page to ensure all albums are loaded into view   */
/**  - Copy/paste this script in the developer console and press enter              */
/************************************************************************************/

// Retrieve the "dots" buttons for all the albums on the page
const dots = document.body.querySelectorAll(".dropdown-trigger.ytmusic-menu-renderer");

// Loop through all the "dots" buttons
for (var i = 0; i < dots.length; i++) {
  // Click the button to open the album dropdown
  dots[i].click();
  
  // Wait for 100ms for the dropdown open animation to play
  await new Promise(r => setTimeout(r, 100));
  
  // Retrieve the delete button (last element of the dropdown)
  const dropdownDelete = document.body.querySelector(".style-scope.ytmusic-menu-popup-renderer > ytmusic-menu-navigation-item-renderer:last-child > a");

  if (dropdownDelete != undefined) {

    // Click on the dropdown delete button, which will open the confirmation dialog
    dropdownDelete.click();

    // Wait for 100ms for the dialog open animation to play
    await new Promise(r => setTimeout(r, 100));

    // Retrieve the deletion confirmation button in the dialog
    var dialogDelete = document.body.querySelector(".buttons.style-scope.yt-confirm-dialog-renderer > yt-button-renderer:last-child > a");

    if (dialogDelete != undefined) {

      // Click
      dialogDelete.click();
    }
  }

  // Wait for 1000ms for the deletion to be processed before moving on to the next album
  await new Promise(r => setTimeout(r, 1000));
}