
// const Product = require("../models/Product")


// exports.searchProduts = async(req, res)=>{
//     try {
//         const {search} = req.query;

//         if(!search){
//             return res.status(400).json({msg:"search not found"})
//         }

//         const products = await Product.find({
//             name:{$regex:search, $options:"i"}
//         })
//         res.status(200).json({search:products})
//     } catch (error) {
//         res.status(500).json({msg:error.messgae})
//     }
// }

const Product = require("../models/Product");

exports.searchProduts = async (req, res) => {
    try {
        const { search, category } = req.query;

        let query = {};

        // Search by name
        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        // Filter by category
        if (category) {
            query.category = category;
        }

        // If nothing provided
        if (!search && !category) {
            return res.status(400).json({ msg: "Provide search or category" });
        }

        const products = await Product.find(query);

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};