# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
denise = User.create(first_name: 'Denise', last_name: 'Henderson', password_digest: '123')
vic = User.create(first_name: 'Vic', last_name: 'Henderson', password_digest: '234')
alex = User.create(first_name: 'Alex', last_name: 'Henderson', password_digest: '345')
eric = User.create(first_name: 'Eric', last_name: 'Henderson', password_digest: '456')

Wine.destroy_all
wine = Wine.create(name: "Orin Swift Mercury Head", color: "Red", grape: "Cabernet Sauvignon", avg_price: 130.84, image_url: "https://www.wine-searcher.com/images/labels/40/49/10154049.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Molly Dooker Blue Eyed Boy", color: "Red", grape: "Shiraz", avg_price: 57, image_url: "https://www.wine-searcher.com/images/labels/27/75/11352775.jpg?width=466&height=400&fit=bounds", country: "Australia")
wine = Wine.create(name: "Molly Dooker Blue Eyed Boy", color: "Red", grape: "Cabernet Sauvignon", avg_price: 4206, image_url: "https://www.wine-searcher.com/images/labels/87/40/10378740.jpg?width=466&height=400&fit=bounds", country: "Australia")
wine = Wine.create(name: "Henri Bourgeois Sancerre", color: "White", grape: "Sauvignon Blanc", avg_price: 27, image_url: "https://www.wine-searcher.com/images/labels/89/05/10458905.jpg?width=466&height=400&fit=bounds", country:"France" )
wine = Wine.create(name: "Kim Crawford Sauvignon Blanc", color: "White", grape: "Sauvignon Blanc", avg_price: 16, image_url: "https://www.wine-searcher.com/images/labels/57/78/11365778.jpg?width=466&height=400&fit=bounds", country: "NZ")
wine = Wine.create(name: "Marques de Murrieta Castillo Ygay Gran Reserva Especial", color: "Red", grape: "Rioja Red Blend", avg_price: 191, image_url: "https://www.wine-searcher.com/images/labels/78/86/10547886.jpg?width=466&height=400&fit=bounds", country: 'Spain' )
wine = Wine.create(name: "Aubert Wines UV Vineyard Pinot Noir", color: "Red", grape: "Pinot Noir", avg_price: 245, image_url: "https://www.wine-searcher.com/images/labels/78/95/10497895.jpg?width=466&height=400&fit=bounds", country: 'USA')
wine = Wine.create(name: "San Filippo Le Lucere", color: "Red", grape: "Sangiovese", avg_price: 124, image_url: "https://www.wine-searcher.com/images/labels/68/72/10576872.jpg?width=466&height=400&fit=bounds", country: "Italy")
wine = Wine.create(name: "Mayacamas Vineyards Cabernet Sauvignon", color: "Red", grape: "Cabernet Sauvignon", avg_price: 146, image_url: "https://www.wine-searcher.com/images/labels/78/20/10577820.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Domaine de la Vieille Julienne Chateauneuf-du-Pape Les Trois Sources", color: "Red", grape: "Southern Rhone Red Blend", avg_price: 75, image_url: "https://www.wine-searcher.com/images/labels/87/63/10448763.jpg?width=466&height=400&fit=bounds", country: "France")
wine = Wine.create(name: "Kistler Vineyards Vine Hill Chardonnay", color: "White", grape: "Chardonnay", avg_price: 180, image_url: "https://www.wine-searcher.com/images/labels/84/28/11208428.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Massolino Barolo DOCG", color: "Red", grape: "Nebbiolo", avg_price: 57, image_url: "https://www.wine-searcher.com/images/labels/44/75/10324475.jpg?width=466&height=400&fit=bounds", country: "Italy")
wine = Wine.create(name: "Bodegas Piedra Negra Chacayes", color: "Red", grape: "Malbec", avg_price: 91, image_url: "https://www.wine-searcher.com/images/labels/25/55/10632555.jpg?width=466&height=400&fit=bounds", country: "Argentina")
wine = Wine.create(name: "Beaux Freres 'The Beaux Freres Vineyard' Pinot Noir", color: "Red", grape: "Pinot Noir", avg_price: 101, image_url: "https://www.wine-searcher.com/images/labels/86/24/10578624.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Bollinger La Grande Annee Brut", color: "Sparkling", grape: "Chardonnay - Pinot Noir", avg_price: 144, image_url: "https://www.wine-searcher.com/images/labels/81/19/10538119.jpg?width=466&height=400&fit=bounds", country: "France")
wine = Wine.create(name: "Castello di Volpaia Chianti Classico Riserva DOCG", color: "Red", grape: "Sangiovese", avg_price: 42, image_url: "https://www.wine-searcher.com/images/labels/36/79/11093679.jpg?width=466&height=400&fit=bounds", country: "Italy")
wine = Wine.create(name: "Bodegas y Vinedos Valderiz", color: "Red", grape: "Tempranillo", avg_price: 35, image_url: "https://www.wine-searcher.com/images/labels/36/90/11093690.jpg?width=466&height=400&fit=bounds", country: "Spain")
wine = Wine.create(name: "Tolaini 'Legit' Cabernet Sauvignon", color: "Red", grape: "Cabernet Sauvignon", avg_price: 40, image_url: "https://www.wine-searcher.com/images/labels/71/98/11087198.jpg?width=466&height=400&fit=bounds", country: "Italy")
wine = Wine.create(name: "Felton Road Bannockburn Pinot Noir", color: "Red", grape: "Pinot Noir", avg_price: 56, image_url: "https://www.wine-searcher.com/images/labels/37/33/10553733.jpg?width=466&height=400&fit=bounds", country: "NZ")
wine = Wine.create(name: "Duckhorn Vineyards Three Palms Vineyard Merlot", color: "Red", grape: "Merlot", avg_price: 105, image_url: "https://www.wine-searcher.com/images/labels/23/65/10152365.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Caprili Brunello di Montalcino DOCG", color: "Red", grape: "Sangiovese", avg_price: 52, image_url: "https://www.wine-searcher.com/images/labels/18/75/10391875.jpg?width=466&height=400&fit=bounds", country: "Italy")
wine = Wine.create(name: "Bodegas Godeval Cepas Vellas", color: "White", grape: "Godello", avg_price: 20, image_url: "https://www.wine-searcher.com/images/labels/11/52/11221152.jpg?width=466&height=400&fit=bounds", country: "Spain")
wine = Wine.create(name: "Hall Wines Knights Valley Sauvignon Blanc", color: "White", grape: "Sauvignon Blanc", avg_price: 30, image_url: "https://www.wine-searcher.com/images/labels/80/03/11218003.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Resonance Pinot Noir", color: "Red", grape: "Pinot Noir", avg_price: 42, image_url: "https://www.wine-searcher.com/images/labels/27/35/10822735.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Caiarossa 'Pergolaia' Toscana IGT", color: "Red", grape: "Cabernet - Merlot - Sangiovese", avg_price: 29, image_url: "https://www.wine-searcher.com/images/labels/84/14/10218414.jpg?width=466&height=400&fit=bounds", country: "Italy")
wine = Wine.create(name: "Joel Gott Wines Sauvignon Blanc", color: "White", grape: "Sauvignon Blanc", avg_price: 12, image_url: "https://www.wine-searcher.com/images/labels/80/10/11218010.jpg?width=466&height=400&fit=bounds", country: "USA")
wine = Wine.create(name: "Pierre Amadieu Gigondas Domaine Grand Romane", color: "Red", grape: "Grenache - Mourvedre - Syrah", avg_price: 33, image_url: "https://www.wine-searcher.com/images/labels/80/14/11218014.jpg?width=466&height=400&fit=bounds", country: "France")
wine = Wine.create(name: "Allan Scott Sauvignon Blanc", color: "White", grape: "Sauvignon Blanc", avg_price: 14, image_url: "https://www.wine-searcher.com/images/labels/19/71/10641971.jpg?width=466&height=400&fit=bounds", country: "NZ")
wine = Wine.create(name: "Forge Cellars Classique Dry Riesling", color: "White", grape: "Riesling", avg_price: 18, image_url: "https://www.wine-searcher.com/images/labels/80/35/11218035.jpg?width=466&height=400&fit=bounds", country: "USA")



