/**
 * Created by netcat on 24.12.16.
 */
app.controller ('getSingleUserInfo', function ($scope, $routeParams, API){
    $scope.url = 'https://api.github.com/users/' + $routeParams.login;
    API.getInfo($scope.url).then(function (user) {
        $scope.user = user;
        });
    }
);