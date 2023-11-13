//Este es un controlador, para manejar los archivos desde otra ruta

const { response, request } = require("express")

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey, page = 1, limit = 5} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}


const usuariosPost = (req , res = response) => {

    const {nombre, edad} = req.body

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
}


const usuariosPut = (req , res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    })
}


const usuariosPatch = (req , res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
}


const usuariosDelete = (req , res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};