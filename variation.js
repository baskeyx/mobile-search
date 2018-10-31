module.exports = function variation (options) {
  var topHeader = document.getElementById('header-top');
  var searchBar = document.querySelector('.ff-search-write');
  var searchToggle = document.querySelector('a.js-search-trigger');
  var closeButton = document.querySelector('button.js-search-closer');
  var searchPanel = document.getElementById('ff-search');
  var searchInput = document.getElementById('ff-search-input');

  // restore searchToggle
  searchToggle.classList.remove('SearchTrigger-noEvents');

  // move the search bar to top header
  topHeader.appendChild(searchBar);

  // trigger search overlay on input focus
  searchInput.addEventListener('focus', function(){
    if (!searchPanel.classList.contains('ff-is-visible')){
      searchToggle.click()
    }
  });

  // monitor menu status to show/hide close button
  var checkIsOpen = setInterval(function(){
    if (!searchPanel.classList.contains('ff-is-visible')){
      closeButton.style.visibility = 'hidden';
    } else {
      closeButton.style.visibility = 'visible';
    }
  },100)

}
