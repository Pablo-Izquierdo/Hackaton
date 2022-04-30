const mongoose = require('mongoose');
const ContentBasedRecommender = require('content-based-recommender');

const local = new mongoose.Schema({
    nombre: {type: String, required: true, maxlength: 80 },
    generos: [
        {type: mongoose.Types.ObjectId }
    ],
    description: {type: String, required: true},
    direccion: {type: String, required: true, maxlength: 200 },
    coordenadas: [
        {type: Number, required: true}
    ]
});

async function getRecomendation(local) {

    // Query
    const nombreLocal = local.name;

    // Create a recomender
    const recommender = new ContentBasedRecommender({
        minScore: 0.1,
        maxSimilarDocs: 100
    });

    // Get the documents
    const docs = getFormatedLocals();
    
    // Train the recommender
    recommender.train(docs);

    // get top 10 similar Docs
    const simDocs = recommender.getSimilarDocuments(nombreLocal, 0, 10);
}

async function getFormatedLocals() {

    // Get all locals
    const locals = await Local.find({});
    const locs = [];

    for (i=0; i<locals.length(); i++) {
        const loc = {
            id: locals[i].name,
            content: locals[i].description
        };
        locs.push(loc)
    }

    return locs;
}

// Creo la clase
const Local = mongoose.model('Local', local);

// Exportamos el modulo 
module.exports.Local = Local