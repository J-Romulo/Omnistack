const { create } = require("./OngController");

const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong){
            return response.status(400).json({error: "Not found ong with this id!"});
        }

        return response.json(ong);
    }
}