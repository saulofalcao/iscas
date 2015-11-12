Template.alert.onRendered(fechaAlertaAutomaticamente);

/////////////////////

function fechaAlertaAutomaticamente() {
    this.$("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
        this.$("#success-alert").alert('close');
    });
}
