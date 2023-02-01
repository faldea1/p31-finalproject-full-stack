const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			vegetablesInfo: [
				{common_name: 'Carrot',
				 scientific_name: '',
				 vegurl: 'https://th.bing.com/th/id/OIP.RRLWHhQc4Q5ZrYQRVTrdcwHaHa?pid=ImgDet&rs=1',
				 description: '',
				 care_level: '',
				 indoor: '',
				 salt_tolerant: '',
				 drought_tolerant: '',
				 poisonous_to_pets: '',
				 poisonous_to_humans: '',
				 medicinal: '',
				 maintenance: '',
				 growth_rate: '',
				 leaf_color: '',
				 harvest_season: '',
				 fruiting_season: '',
				 soil: '',
				 sunlight: '',
				 propagation: '',
				 attracts: '',
				 watering: '',
				 cycle: '',
				 dimension: '',
				 type: '',
				 origin: '',
				 family: ''
				},
				{common_name: 'Potatoes',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/OIP.b_rtyCChrOSnSHKlUv7hrQHaFj?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Onions',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/OIP.DLtwy46q-basqwT4DUjRfAHaEK?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Cherry Tomatoes',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/OIP.rt3gTSVOCq8IIGqc7h6hcQHaHa?pid=ImgDet&w=1140&h=1140&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Sweet Peppers',
				scientific_name: '',
				vegurl: 'https://cdn.propagationplace.co.uk/pp/wp-content/uploads/Sweet-Pepper-Surprise-Sweet-Mixed-5-Plants-02-1-768x768.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Mushrooms',
				scientific_name: '',
				vegurl: 'https://noticieros.televisa.com/wp-content/uploads/2020/07/champinones-1.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Butter Lettuce',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/OIP.m990igHqLEOyeek2CU58pgHaHa?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Endive Lettuce',
				scientific_name: '',
				vegurl: 'https://3.bp.blogspot.com/-iGK-qTT1mYw/UHrNGvwEVWI/AAAAAAAAB_I/OqKLaAi-PfM/s1600/Endive.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Green Beans',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/R.f9369f631191ced2655fc014e64af5c4?rik=q4NwnykQlo7YCA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-pQE5fYS7YvA%2fTw8E9Fyv5aI%2fAAAAAAAAA4g%2fCLBHMBc6GnQ%2fs1600%2fgreen-beans-1.jpg&ehk=fWe4NslbvRUnGTaCb096Q3jLIdVq2aSRIWvRUDrYZaM%3d&risl=&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Mustard Greens',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/OIP.y3feQ4zn8fqD_3XwjSGczwHaHa?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Purple Cabbage',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/OIP.E4GHJSE3_XiHSpX_McrBQgHaFj?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Broccoli',
				scientific_name: '',
				vegurl: 'https://th.bing.com/th/id/R.a39b5eaf4803044398f4e93f03d8bdca?rik=Ynm1w%2b6GiiJUUQ&riu=http%3a%2f%2fthesaturnherald.com%2fwp-content%2fuploads%2f2016%2f03%2fBroccoli.jpg&ehk=kOWf1QsEz%2fQc%2bjkKNsHZLRLHOV%2bonuTi5xSIYbaczvw%3d&risl=&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				}
			],
			herbsInfo: [
				{common_name: 'Basil',
				scientific_name: '',
				herburl: 'https://img.thrfun.com/img/019/644/growing_basil_tx2.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Cilantro',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/OIP.TTlxKYaj3Yq7g12K-DCAmgHaE8?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Dill',
				scientific_name: '',
				herburl: 'https://www.theseedcollection.com.au/assets/full/G2-20.jpg?20201210122336',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Mint',
				scientific_name: '',
				herburl: 'https://cdn.shopify.com/s/files/1/0562/4205/products/mint_grande.jpg?v=1511809558',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Oregano',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/OIP.6novtDM00vk8Ve_iPMy7yQHaF7?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Parsley (Curly)',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/OIP._RChUkrcWPSzhpwjopFwzwHaFj?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Parsley (Italian)',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/OIP.1MuQkeEj70hW626CXMQM-QHaE-?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Rosemary',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/R.11dfe8b5354aa2b70298ddc9e236c788?rik=Ndp%2bifrN1h3iNQ&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Arugula',
				scientific_name: '',
				herburl: 'https://culinaryherbguide.com/images/herbpics/arugula.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Thyme',
				scientific_name: '',
				herburl: 'https://www.history.com/.image/t_share/MTU3ODc4NjAyNzE0NTg4NDg5/hungry-history-a-brief-history-of-thyme-2.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Ginger',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/OIP.xaTlar4IpVdnAogMlFczgQHaD-?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Sage Grass',
				scientific_name: '',
				herburl: 'https://th.bing.com/th/id/OIP.WkGpl7AZnnPMR_HzKGNCRwHaHd?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				}
			],
			flowersInfo: [
				{common_name: 'Nasturtium',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/OIP.vhCKnPHwLFLNhffY-iOvSQHaHa?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Cosmos',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/R.046baa10860bc399ae88c1e8c3447b03?rik=MGiYUua2ggjw3w&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Calendula',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/OIP.4OkFQY-qvrY9sHcTM6dwWwHaEo?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Tagetes',
				scientific_name: '',
				flowerurl: 'https://i1.wp.com/plant.pk/wp-content/uploads/2020/02/Marigld-Yellow-Seeds.jpg?resize=1024%2C1024&ssl=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Tansy',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/R.ad5077bc845d0711763a6d0d3135c596?rik=HoHDbfAoMf%2f3vQ&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Bee balm',
				scientific_name: '',
				flowerurl: 'https://cdn.shopify.com/s/files/1/0083/4602/products/lemon_bee_balm_2019-2.jpg?v=1561157330',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Zinnia',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/OIP.foAVU58ARxazQACbQtD49AHaFj?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Sunflower Maximilian',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/OIP.UbVJdJ4m_yJLG4caYJHVtAHaGS?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Yellow Camamilla',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/R.8801523191610f90a69687b79a633cbb?rik=YT24M1aZqhEO4g&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f30000%2fvelka%2ftiny-chamomile-flowers.jpg&ehk=6HCYwNOaqeRf%2frZLY1iZItpt3cZwK6pDbUFdOUsr99Y%3d&risl=&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Comfrey',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/OIP.x9eUIh8IQXFBZcU3n4eKKwHaE7?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Borage',
				scientific_name: '',
				flowerurl: 'https://i.ytimg.com/vi/4SYpr9YVp3U/maxresdefault.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Common Yarrow',
				scientific_name: '',
				flowerurl: 'https://th.bing.com/th/id/OIP.GmO-3Qp3P9J4MKk31wAU9wHaFj?pid=ImgDet&rs=1',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				}
			],
			orchardsInfo: [
				{common_name: 'Vertical',
				scientific_name: '',
				orchardurl: 'https://media.bahag.cloud/m/341315/12.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Hanging',
				scientific_name: '',
				orchardurl: 'https://i.pinimg.com/originals/a7/b6/b1/a7b6b1b8288ee6b4108491d59aea7041.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Pallet',
				scientific_name: '',
				orchardurl: 'https://static.wixstatic.com/media/8f76ac_b307dfb04a2b4760b77aa4275cf562a3~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Pot',
				scientific_name: '',
				orchardurl: 'https://th.bing.com/th/id/R.8c7096d1650c62a4d4e09441152d85e5?rik=O%2bnGPeiijf6JDA&riu=http%3a%2f%2fhuertodomestico.com%2fwp-content%2fuploads%2f2011%2f10%2fTerraza_2.jpg&ehk=HT49ZL%2fnSK%2foHUDWxBm%2fi4sBfsiD84p2eq6%2bR8Nawh0%3d&risl=&pid=ImgRaw&r=0',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				},
				{common_name: 'Box',
				scientific_name: '',
				orchardurl: 'https://photos.gammvert.fr/v5/products/fiche_620/50952-escalier-legumes-meleze-100x75x40-robin-hood-2.JPG',
				description: '',
				care_level: '',
				indoor: '',
				salt_tolerant: '',
				drought_tolerant: '',
				poisonous_to_pets: '',
				poisonous_to_humans: '',
				medicinal: '',
				maintenance: '',
				growth_rate: '',
				leaf_color: '',
				harvest_season: '',
				fruiting_season: '',
				soil: '',
				sunlight: '',
				propagation: '',
				attracts: '',
				watering: '',
				cycle: '',
				dimension: '',
				type: '',
				origin: '',
				family: ''
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			linkTokenfromsessionStore: () => {

				const token = sessionStorage.getItem("token");
				if (token && token !="" && token!= undefined) setStore({ token: token });

			},

			logout: () => {

				sessionStorage.removeItem("token");
				setStore({ token: null });

			},

			login: async (email, password) => {

				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				};

				try {

					const response = await fetch('https://3001-faldea1-p31finalproject-jn8jefi4o4z.ws-us85.gitpod.io/api/token', options)
					if(response.status !== 200){
	
						alert("email &/|| password incorrect");
						return false;
					} 
	
					const data = await response.json();
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					return true;

				}
				catch(error){
					console.error("Trying log in, there has been an error")

				}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const store = getStore();

					const options = {
						headers: {
							"Authorization": "Bearer " + store.token
						}
					}
					const resp = await fetch('https://3001-faldea1-p31finalproject-jn8jefi4o4z.ws-us85.gitpod.io/api/hello', options)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
