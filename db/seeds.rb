# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
    email: "admin@gmail.com",
    password: "123456",
    password_confirmation: "123456",
    confirmed_at: Time.zone.now)
10.times do |n|
#name = Faker::Name.name
email = "example-#{n + 1}@gmail.org"
password = "password"
User.create!(#name: name,
      #role: "manager",
      email: email,
      password: password,
      password_confirmation: password,
      confirmed_at: Time.zone.now)
end

10.times do |n|
#name = Faker::Name.name
email = "example-#{n + 1}@outlook.org"
password = "password"
User.create!(#name: name,
     # role: "qa",
      email: email,
      password: password,
      password_confirmation: password,
      confirmed_at: Time.zone.now)
end

10.times do |n|
#name = Faker::Name.name
email = "example-#{n + 1}@yahoo.org"
password = "password"
User.create!(#name: name,
    #  role: "developer",
      email: email,
      password: password,
      password_confirmation: password,
      confirmed_at: Time.zone.now)
end


10.times do |i|
    Bug.create(
        title: "Bug #{i+1}", 
        priority: 0,
        completetion_days: 10,
        description: "bug was created by Seed with ref #{i+1}"

    )
end 
