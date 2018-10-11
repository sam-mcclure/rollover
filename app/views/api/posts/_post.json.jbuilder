json.extract! post, :id, :post_type, :title, :body, :author_id
json.authorUsername post.author.username
json.authorPhotoUrl url_for(post.author.photo)
