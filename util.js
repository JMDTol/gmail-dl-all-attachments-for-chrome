/**
 * Run multiple files download
 * @param  {Array} urls     Array of urls (pointing to files)
 * @param  {Integer} duration time between each HTTP call
 */
function processMultipleFilesDownload(urls, duration) {
  for(var i = 0; i < urls.length; i++) {
    downloadAttachment(urls[i]);
  }
}

/**
 * Run atachment download
 * @param  {string} url    Url to download the attachment
 */
function downloadAttachment(url) {
  var a = document.createElement('a');
  a.href = url;
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0,
                              true, false, false, false, 0, null);
  a.dispatchEvent(event);
}

/**
 * Parse a string containing a url
 * @param  {string} Url Surrounded url
 * @return {string} The url extracted from the given string
 */
function stripUrl(url) {
  var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

  // Return the full url
  return re.exec(url)[0];
}
