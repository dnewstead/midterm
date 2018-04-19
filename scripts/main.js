var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=php&key=AIzaSyAKv_6I4ynk9isC_HGNEpEb_hvq0tjEx_A"


function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
};

function onYouTubeApiLoad() {
    gapi.client.setApiKey('replace_with_your_youtube_api_key');
};
 
function search() {
    var query = document.getElementById('query').value;
    
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
  
    request.execute(onSearchResponse);
};

function onSearchResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML = responseString;
};
