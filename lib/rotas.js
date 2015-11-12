Router.configure({
    // the default layout
    layoutTemplate: 'mainLayout'
});
Router.route('/', function () {
    this.render('iscas');
});


Router.route('/nova-isca', function () {
    this.render('novaIsca');
});
Router.route('/iscas', function () {
    this.render('iscas');
});
Router.route('/atualiza-isca/:_id', function () {
    var isca = Iscas.findOne({_id: this.params._id});
    this.render('atualiza-isca', {data: isca});
});

// Relatorios:
Router.route('/relatorios', function () {
    this.render('relatorios');
});
//Router.route('/atualiza-relatorio/:_id', function () {
//    var relatorio = Relatorios.findOne({_id: this.params._id});
//    this.render('atualiza-relatorio', {data: relatorio});
//});
Router.route('/novo-relatorio', function () {
    this.render('novoRelatorio');
});
Router.route('/edita-relatorio/:_id', function() {
   var relatorio = Relatorios.findOne({_id: this.params._id});
   this.render('editaRelatorio', {data: relatorio});
});

// Fim Relatorios