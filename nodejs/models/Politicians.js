import mongoose from "mongoose"

const PoliticianSchema = mongoose.Schema({
    TITULAR: {
        type: String,
        required: true
    },
    PARTIDO: {
        type: String,
        required: true
    },
    PARTIDO_PARA_FILTRO: {
        type: String,
        required: true
    },
    GENERO: {
        type: String,
        required: true
    },
    CARGO: {
        type: String,
        required: true
    },
    CARGO_PARA_FILTRO: {
        type: String,
        required: true
    },
    INSTITUCION: {
        type: String,
        required: true
    },
    CCAA: {
        type: String,
        required: true
    },
    SUELDOBASE_SUELDO: {
        type: Number,
        required: true
    },
    COMPLEMENTOS_SUELDO: {
        type: Number,
        required: true
    },
    PAGASEXTRA_SUELDO: {
        type: Number,
        required: true
    },
    OTRASDIETASEINDEMNIZACIONES_SUELDO: {
        type: Number,
        required: true
    }
    ,
    TRIENIOS_SUELDO: {
        type: Number,
        required: true
    }
    ,
    RETRIBUCIONMENSUAL: {
        type: Number,
        required: true
    }
    ,
    RETRIBUCIONANUAL: {
        type: Number,
        required: true
    }
    ,
    OBSERVACIONES: {
        type: String,
        required: true
    }
}, { collection: 'politicians' })

export default mongoose.model("Politician", PoliticianSchema)