json.extract! user, :id, :username, :followed_user_ids
json.photoUrl url_for(user.photo)
