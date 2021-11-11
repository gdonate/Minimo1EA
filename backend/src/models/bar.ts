import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';

const barSchema = new Schema({
    idUser: {
        type: String,
        ref: Usuario
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    musicTaste: {
        type: String
    }
    });

export interface IBar extends Document {
    idUser: String;
    name: String;
    address: String;
    musicTaste: String;
}

export default mongoose.model<IBar>('Bar', barSchema);