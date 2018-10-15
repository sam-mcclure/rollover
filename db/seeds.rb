# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Post.delete_all
Follow.delete_all

demo_user = User.create!(
  username: 'guest',
  email: 'guest@guest.com',
  password: 'password'
)

user2 = User.create!(
  username: 'pug_life',
  email: 'pug@pug.com',
  password:'password'
)
photo2 = File.open('app/assets/images/pug.jpeg')
user2.photo.attach(io: photo2, filename:'pug.jpeg')

user3 = User.create!(
  username: 'frenchie',
  email: 'frenchie@frenchie.com',
  password:'password'
)
photo3 = File.open('app/assets/images/frenchie.jpeg')
user3.photo.attach(io: photo3, filename:'frenchie.jpeg')

user4 = User.create!(
  username: 'old_grey',
  email: 'grey@grey.com',
  password:'password'
)
photo4 = File.open('app/assets/images/grey.jpeg')
user4.photo.attach(io: photo4, filename:'grey.jpeg')

user5 = User.create!(
  username: 'bear',
  email: 'bear@bear.com',
  password:'password'
)
photo5 = File.open('app/assets/images/hat.jpeg')
user5.photo.attach(io: photo5, filename:'hat.jpeg')

user6 = User.create!(
  username: 'tiny',
  email: 'tiny@tiny.com',
  password:'password'
)
photo6 = File.open('app/assets/images/chi.jpeg')
user6.photo.attach(io: photo6, filename:'chi.jpeg')

user7 = User.create!(
  username: 'shep',
  email: 'shep@shep.com',
  password:'password'
)
photo7 = File.open('app/assets/images/shep.jpeg')
user7.photo.attach(io: photo7, filename:'shep.jpeg')

follow1 = Follow.create!(
  user_id: demo_user.id,
  followed_user_id: user2.id
)

follow2 = Follow.create!(
  user_id: demo_user.id,
  followed_user_id: user3.id
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

post3 = Post.create!(
  author_id: user2.id,
  post_type: 'link',
  title: "www.petfinder.com",
  body: "This is my favorite place to find pets"
)

post4 = Post.create!(
  author_id: user3.id,
  post_type: 'chat',
  title: "",
  body: "My dog: woof Me: I love you, too"
)

post5 = Post.create!(
  author_id: demo_user.id,
  post_type: 'video',
  title: "",
  body: "Puppy at the beach!!"
)
video = File.open('app/assets/videos/Pexels Videos 2716.mp4')
post5.video.attach(io: video, filename: 'Pexels Videos 2716.mp4')

post6 = Post.create!(
  author_id: user5.id,
  post_type: 'audio',
  title: "",
  body: "I feel like my dog has the best bark"
)
audio = File.open('app/assets/audio/253754__arightwizard__dog-barking.mp3')
post6.audio.attach(io: audio, filename: '253754__arightwizard__dog-barking.mp3')

post7 = Post.create!(
  author_id: demo_user.id,
  post_type: 'photo',
  title: "",
  body: "This is the prettiest dog I've ever seen"
)
photo = File.open('app/assets/images/adorable-animal-breed-356378.jpg')
post7.photo.attach(io: photo, filename: 'adorable-animal-breed-356378.jpg')
