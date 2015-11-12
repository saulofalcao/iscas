var insertIscaHooks = {
    onSuccess: onSuccessHook
};


AutoForm.hooks({
    insertIsca: insertIscaHooks
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

