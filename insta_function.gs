var past_days = 9; //max 12
var empty_s = "";
function following(name) {
  if(name==="") {
    return empty_s;
  } else {
    var url = "https://www.instagram.com/"+name+"/?__a=1";
    var response = UrlFetchApp.fetch(url);
    var dataAll = JSON.parse(response.getContentText());
    return dataAll.user.follows.count;
  }
}

function followers(name) {
  if(name==="") {
    return empty_s;
  } else {
    var url = "https://www.instagram.com/"+name+"/?__a=1";
    var response = UrlFetchApp.fetch(url);
    var dataAll = JSON.parse(response.getContentText()); 
    return dataAll.user.followed_by.count;
  }
}


function likes(name) {
  if(name==="") {
    return empty_s;
  } else {
    var url = "https://www.instagram.com/"+name+"/?__a=1";
    var response = UrlFetchApp.fetch(url); 
    var dataAll = JSON.parse(response.getContentText()); 
    var lk = 0;
    for (var i =0;i<past_days;i++) {
      if(dataAll.user.media.nodes[i]!==undefined)
        lk+= dataAll.user.media.nodes[i].likes.count;
      else 
        break;  
    }
    return lk;
  }
}

function comments(name) {
  if(name==="") {
    return empty_s;
  } else {
    var url = "https://www.instagram.com/"+name+"/?__a=1";
    var response = UrlFetchApp.fetch(url); 
    var dataAll = JSON.parse(response.getContentText());
    var com = 0
    for (var i =0;i<past_days;i++) {
      if(dataAll.user.media.nodes[i]!==undefined)
        com+= dataAll.user.media.nodes[i].comments.count;
      else 
        break;
    }
    return com;
  }
}

function userid(name) {
  if(name==="") {
    return empty_s;
  } else {
    var url = "https://www.instagram.com/"+name+"/?__a=1";
    var response = UrlFetchApp.fetch(url); 
    var dataAll = JSON.parse(response.getContentText()); 
    return dataAll.user.id;
  }
  
}

