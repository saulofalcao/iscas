var insertRelatorioHooks = {
    onSuccess: onSuccessHook
};


AutoForm.hooks({
    insertRelatorio: insertRelatorioHooks
});

//
////Template.novaIsca.events({
//    "submit #submitIsca": submitIsca
//});

//////////////////////////////

function onSuccessHook(formType, result) {
//    console.log(formType);
//    console.log(result);
    Router.go('/iscas');
}

