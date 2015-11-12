Template.mainLayout.helpers({
    alerta: verificaAlerta
});


//////////////////////

function verificaAlerta() {
    if (Router.current().params.query.alert === 'success') {
        

        return true;
    }
    else {
        return false;
    }
}
