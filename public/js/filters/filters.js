app.filter('removeProtocol', function() {
  return function (input) {
    if(input){
      return input.replace(/^http:\/\//g,   '')
      .replace(/^https:\/\//g,  '');
    }
  }
});

app.filter('proxyResource', function(){
  return function(input){
    if(input) {
      var encoded = btoa(input);
      return '/proxyresource/' + encoded;
    }
  }
});

// app.filter('substring', function(){
// ** use limitTo
// {{ lastname : limitTo:125 }}
// works on both arrays and string - numbers are converted to strings
// https://docs.angularjs.org/api/ng/filter/limitTo
