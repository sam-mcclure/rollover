json.extract! user, :id, :username
json.photoUrl url_for(user.photo)
json.followId user.find_follow(current_user.id)
