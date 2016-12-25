/**
 * Created by netcat on 24.12.16.
 */
app.controller ('getUsersInfo', function ($scope, API){
    $scope.since = 0;
    $scope.url = 'https://api.github.com/users';
    API.getInfo($scope.url).then(function (users) {
            $scope.users = users;
        });

    $scope.nPage = function () {
        $scope.since = $scope.since + 30;
        $scope.url = 'https://api.github.com/users?since=' + $scope.since;
        console.log($scope.since);
        API.getInfo($scope.url).then(function (users) {
            $scope.users = users;
        });
    };
    $scope.pPage = function () {
        $scope.since = $scope.since - 30;
        if ($scope.since < 0){
            $scope.since = 0
        }
        $scope.url = 'https://api.github.com/users?since=' + $scope.since;
        console.log($scope.since);
        API.getInfo($scope.url).then(function (users) {
            $scope.users = users;
        });
    }


    }
);