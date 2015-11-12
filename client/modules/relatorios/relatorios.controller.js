Template.relatorios.helpers({
    relatorios: getRelatorios,
    converteData: converteData
});


Template.relatorios.events({
   "click .close": apagaRelatorio 
});

////////////////////////////
function getRelatorios(){
//    function retornaDataLegivel(doc){
//        var data = new Date(doc.data);
//        console.log(data.getDay());
//        var novaData
//        return doc;
//    }
//    
    return Relatorios.find();
}

function converteData(data){
    
//    console.log('entrou converteData');
    var novaData = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear()
//    var novaData = new Date(data);
//    console.log(novaData);
//    console.log(data.getDate());
    return novaData;
}
function apagaRelatorio(){
//    console.log(this);
    Relatorios.remove(this._id);
}