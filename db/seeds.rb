# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



10.times do |i|
    Bug.create(
        title: "Bug #{i+1}", 
        priority: 0,
        completetion_days: 10,
        description: "bug was created by Seed with ref #{i+1}"

    )
end 
