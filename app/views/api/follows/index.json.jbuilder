@follows.each do |follow|
  json.set! follow.id do
    json.partial! 'index', follow: follow
  end
end
