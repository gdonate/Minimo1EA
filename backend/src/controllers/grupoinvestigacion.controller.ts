import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
//import grupoinvestigacion from "../models/grupoinvestigacion";
import GrupoInvestigacion from "../models/grupoinvestigacion"

/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo

○ Listado de grupos de investigación

○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/


//obtenir tots els equips d'investigació
function getAll (req:Request, res:Response): void {
    GrupoInvestigacion.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

//obtenir grup d'investigació
function getGrupoInvestigacion (req:Request, res:Response): void {
    GrupoInvestigacion.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//afegir grup d'investigació
function newGrupoInvestigacion (req:Request, res:Response): void {
    const grupo = new GrupoInvestigacion({
        "nombregrupo": req.body.nombregrupo,
        "id": req.body.id,
        "descripcion": req.body.descripcion,
        "responsable": req.body.responsable,
        "url": req.body.url
    });
    
    console.log(req.body);
    grupo.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//modificar grup d'investigació
function updateGrupoInvestigacion (req:Request, res:Response): void {
    const nombregrupo: String = req.body.nombregrupo;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const descripcion: String = req.body.descripcion;
    const responsable: String = req.body.responsable;
    const url: String = req.body.url;


    GrupoInvestigacion.update({"id": id}, {$set: {"nombregrupo": nombregrupo, "id": nuevaid, "descripcion": descripcion, "responsable": responsable, "url": url}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

//Delete grup investigacion

//function deleteGrupoinvestigacion (req:Request, res:Response): void {\
/*
async function deleteGrupoinvestigacion(req:Request, res:Response): Promise<Response> {
    const {id} = req.params;
    console.log("Heelo chicos estamos aquiiiiiii   " + id);
    await GrupoInvestigacion.findByIdAndDelete(id);
    console.log("Heelo chicos estamos aquiiiiiii   " + id);
    return res.json({status:'Eliminado'})
};
*/
function deleteGrupoinvestigacion(req:Request, res:Response): void {
    const { id } = req.params;
    GrupoInvestigacion.findOne({"id":req.params.id}).remove().exec();

    /*
    console.log("ELIMINAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA             " + req.params.id)
    GrupoInvestigacion.findByIdAndDelete(GrupoInvestigacion.findOne({"id":req.params.id})).then((data) => {
        console.log("ESTO ES DATA " + data);
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log("esto es el error " + err);

        return res.status(500).json(err);
    });
    */
}
export default { getAll, getGrupoInvestigacion, newGrupoInvestigacion, updateGrupoInvestigacion , deleteGrupoinvestigacion };