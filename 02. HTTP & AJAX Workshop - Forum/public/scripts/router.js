    let router = (function(){
        let navigo;

        function init() {
            navigo = new Navigo(null, false);

            navigo
                .on({
                    '/': function () {
                        $('#content').html('');
                    },
                    '/threads': function () {
                        Promise.all([data.threads.get(), templateLoader('threads-template')])
                            .then(([data, template]) => {
                                let html = template(data);
                                $('#content').html(html);
                                })
                            .catch(console.log);
                    },
                    '/gallery': function () {
                        Promise.all([data.gallery.get(), templateLoader('gallery')])
                            .then(([data, template]) => {
                                let html = template(data);
                                $('#content').html(html);
                                })
                            .catch(console.log)
                    }
                })
                .resolve();
        }
        return {
            init
        }
    }());
