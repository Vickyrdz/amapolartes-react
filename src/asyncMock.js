const products =  [
    { 
        id: '1', 
        name: 'Mate Hexagonal', 
        price: 2500, 
        category: 'Mates', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        // img: '/images/nombredeimagen.jpg',
        stock: 15, 
        description:'Con diseño alopardado, uno de los más pedidos. Producto de algarrobo pintado a mano. Incluye bombilla.'
    },
    { id: '2', 
      name: 'Mate Huevito',  
      price: 2000, 
      category: 'Mates', 
      img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', 
      stock: 15, 
      description:'Con un delicado diseño de flores. Producto de algarrobo pintado a mano. Incluye bombilla.'
    },
    { id: '3', 
      name: 'Combo Flores Azules', 
      price: 4500, 
      category: 'Combos', 
      img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
      stock: 5, 
      description:'Combo 3 piezas: 2 cuencos de 10cm y tabla de algarrobo. Diseño pintado a mano.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}