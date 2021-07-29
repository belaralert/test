const sections = require('../data/sections_db');
const products = require('../data/products_db');


module.exports = {
    index : (req, res)=>{
        /* console.log(sections) */

        return res.render('index',{
            title : "Oh Shots",
            products,
    })
}
}