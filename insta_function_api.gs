var accessToken = "Your Access Token"

function followers(id) {
  var url="https://api.instagram.com/v1/users/"+id+"/?access_token="+accessToken;
  var response = UrlFetchApp.fetch(url);
  var dataAll = JSON.parse(response.getContentText()); 
  return dataAll.data.counts.followed_by;
}

function following(id) {
  var url="https://api.instagram.com/v1/users/"+id+"/?access_token="+accessToken;
  var response = UrlFetchApp.fetch(url);
  var dataAll = JSON.parse(response.getContentText()); 
  return dataAll.data.counts.follows;
}

function likes(id) {
  var url="https://api.instagram.com/v1/users/"+id+"/media/recent/?access_token="+accessToken;
  var response = UrlFetchApp.fetch(url); 
  var dataAll = JSON.parse(response.getContentText()); 
  var lk = 0;
  for (var i =0;i<past_days;i++) {
    if(dataAll.data[i]!==undefined)
      lk+= dataAll.data[i].likes.count;
    else 
      break;  
  }
  return lk;
}

function comments(id) {
  var url="https://api.instagram.com/v1/users/"+id+"/media/recent/?access_token="+accessToken;
  var response = UrlFetchApp.fetch(url); 
  var dataAll = JSON.parse(response.getContentText());
  var com = 0
  for (var i =0;i<past_days;i++) {
    if(dataAll.data[i]!==undefined)
      com+= dataAll.data[i].comments.count;
    else 
      break;
  }
  return com;
}

function userid(name) {
  var url="https://api.instagram.com/v1/users/"+name+"/?access_token="+acessToken;
  var response = UrlFetchApp.fetch(url); 
  var dataAll = JSON.parse(response.getContentText()); 
  return dataAll.data.id;
  
}

