const {request,response} = require("express")
const Proveedor = require("../models/Proveedor-model");

const proveedoresGet = (request = req, response = res)=>{
    Proveedor.find({estado:true}, (error , proveedores)=>{
        if(error){
            res.status(400).json({
                message:error,
                data: [],
                error: true
            })
        }
        res.status(200).json({
            message:"",
            data: proveedores,
            error:false
            
        })
    })
}

const proveedorGet = (request = req , response = res)=>{
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            message: "Falta ingreso de 'id'",
            data: [],
            error: true
        })
    }

    Proveedor.findOne({"id":id} , (error, proveedor)=>{
        if(error){
            return res.status(404).json({
                message: error,
                data: [],
                error: true
            })
        }
        res.status(200).json({
            message: "",
            data: proveedor,
            error: false
        })
    }) 
}

const proveedorPost = (request=req,resposne=res)=>{
    const {id , nombre} = req.body;
    if(id && nombre){
        return res.status(400).json({
            message: "Falta ingresar datos obligatorios",
            data: [],
            error: true
        })
    }
    const proveedor = new Proveedor({"id":id , "nombre": nombre});
    proveedor.save((error , prov)=>{
        if(error){
            return res.status(400).json({
                message: error,
                data: [],
                error: true
            })
        }
        res.status(201).json({
            message: 'Proveedor creado',
            data: proveedor,
            error:false
        })
    })
}

const proveedorPatch =  (request=req,response=res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(401).json({
            message: 'Falta ingreso de id',
            data: [],
            error: true
        })
    }
    
    Proveedor.findByIdAndUpdate(id, {"estado": true} , {new:true} , (error , proveedor)=>{
        if(error){
            return res.status(401).json({
                message: error,                
                data: [],
                error: true
            })
        }

        res.status(200).json({
            message: 'Proveedor actualizado',
            data: proveedor,
            error: false
        })
    })
}

const proveedorPut = (request=req,response=res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    if(!id){
        return res.status(400).json({
            message: 'Falta ingreso de id',
            data: [],
            error: []
        })
    }
    if(!nombre){
        return res.status(400).json({
            message: 'Falta ingreso de nombre',
            data: [],
            error: true
        })
    }

    Proveedor.findByIdAndUpdate(id, {"nombre": nombre} , {new:true} , (error , proveedor)=>{
        if(error){
            return res.status(401).json({
                message: error,
                data: [],
                error: true
            })
        }

        res.status(200).json({
            message: 'Proveedor actualizado',
            data: proveedor,
            error: false
        })
    })
}

const proveedorDelete =  (request=req,response=res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            message: 'Falta ingreso de id',
            data: [],
            error: true
        })
    }
    Proveedor.findByIdAndUpdate(id , {"estado":false} , {new: true} , (error , proveedor)=>{
        if(error){
            return res.json({
                message: error,
                data: [],
                error: true
            })
        }

       return resstatus(204).json({
        message: "Proveedor eliminado",
        data: proveedor,
        error: false
       })
    })
}

module.exports = {
    proveedoresGet,
    proveedorGet,
    proveedorPost,
    proveedorPatch,
    proveedorPut,
    proveedorDelete
}
