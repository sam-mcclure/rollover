# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Post.delete_all

demo_user = User.create!(
  username: 'guest',
  email: 'guest@guest.com',
  password: 'password'
)

post1 = Post.create!(
  author_id: demo_user.id,
  post_type: 'text',
  title: 'First Post!',
  body: "I'm so excited to finally have a place to talk about dogs!!"
)

post2 = Post.create!(
  author_id: demo_user.id,
  post_type: 'quote',
  title: "Happiness is a warm puppy.",
  body: "Charles Schulz"
)
