/**
 * Created by netcat on 24.12.16.
 */

app.service ('API', function ($http, $q) {
    return {
        getInfo: function (url) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: url
            }).then(function (data) {
                var users = data.data;
                d.resolve(users);
            });
            return d.promise

        }


    }});