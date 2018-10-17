json.extract! post, :id, :post_type, :title, :body, :author_id
json.authorUsername post.author.username
json.authorPhotoUrl url_for(post.author.photo)
json.followId post.author.find_follow(current_user.id)
json.likeId post.find_like(current_user.id)

json.photoUrl url_for(post.photo) if post.photo.attached?
json.videoUrl url_for(post.video) if post.video.attached?
json.audioUrl url_for(post.audio) if post.audio.attached?
