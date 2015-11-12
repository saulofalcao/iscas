//Iscas = new Mongo.Collection("iscas");
//Relatorios = new Mongo.Collection()
Relatorios = new Mongo.Collection("relatorios");

IscasSchema = new SimpleSchema({
    numero: {
        type: Number,
        label: "Número da Isca"
    },
    status: {
        type: String,
        label: "Estado da Isca",
        allowedValues: ['Intacta', 'Consumida', 'Mofada'],
        autoform: {
            type: 'select'

        }
    },
    observacao: {
        type: String,
        label: "Observação",
        optional: true
    }
});


Relatorios.attachSchema(new SimpleSchema({
    data: {
        type: Date,
        label: "Data do Relatório"
    },
    empresa: {
      type: String,
      label: "Nome da Empresa"
    },
            
    iscas: {
        type: [IscasSchema]
    }
    
}));
//Iscas.attachSchema(new SimpleSchema({
//    numero: {
//        type: Number,
//        label: "Número da Isca"
////    max: 200
//    },
//    status: {
//        type: String,
//        label: "Estado da Isca",
//        allowedValues: ['Intacta', 'Consumida', 'Mofada'],
//        autoform: {
//            type: 'select'
//
//        }
//    },
//    observacao: {
//        type: String,
//        label: "Observação"
//    }
//}));