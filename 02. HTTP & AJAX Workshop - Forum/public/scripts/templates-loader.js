function templateLoader(templateName) {
    return new Promise(function (resolve, reject) {
        $.ajax({
                method: 'GET',
                url: './scripts/templates/' + templateName + '.handlebars',
                contentType: 'text/html'
            })
            .done((data) => {
                let template = Handlebars.compile(data);
                resolve(template);
            })
            .fail(reject);
    });
}

/*function templatesGenerator(templateName, data) {
            var outerData = data;
            var source = $.ajax({
                    method: 'GET',
                    url: './scripts/templates/' + templateName + '.handlebars',
                    contentType: 'text/html'
                })
                .done(function (data) {
                    var template = Handlebars.compile(data);
                    $('#content').append(template);
                })
                .fail();
        }
*/
