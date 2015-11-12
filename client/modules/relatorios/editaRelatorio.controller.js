var editaRelatorioHooks = {
    onSuccess: onSuccessHook
};


AutoForm.hooks({
    editaRelatorio: editaRelatorioHooks
});

//
////Template.novaIsca.events({
//    "submit #submitIsca": submitIsca
//});

//////////////////////////////

function onSuccessHook(formType, result) {
    console.log(formType);
    console.log(result);

    Router.go('/relatorios');
}

