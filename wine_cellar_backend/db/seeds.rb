# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
denise = User.create(first_name: 'Denise', last_name: 'Henderson', password: '123')
vic = User.create(first_name: 'Vic', last_name: 'Henderson', password: '234')
alex = User.create(first_name: 'Alex', last_name: 'Henderson', password: '345')
eric = User.create(first_name: 'Eric', last_name: 'Henderson', password: '456')