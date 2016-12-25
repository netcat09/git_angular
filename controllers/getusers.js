/**
 * Created by netcat on 24.12.16.
 */
app.controller ('getUsersInfo', function ($scope, API){
    $scope.since = 0;
    $scope.url = 'https://api.github.com/users';
    API.getInfo($scope.url).then(function (users) {
            $scope.users = users;
            $scope.pPageSince = $scope.users[0].id;
            console.log($scope.pPageSince);
            $scope.nPageSince = $scope.users[$scope.users.length - 1].id;
            console.log($scope.nPageSince);

        });

    $scope.nPage = function () {
        $scope.since = $scope.nPageSince;
        $scope.url = 'https://api.github.com/users?since=' + $scope.since;
        console.log($scope.since);
        API.getInfo($scope.url).then(function (users) {
            $scope.users = users;
            $scope.pPageSince = $scope.users[0].id;
            console.log($scope.pPageSince);
            $scope.nPageSince = $scope.users[$scope.users.length - 1].id;
            console.log($scope.nPageSince);
        });
    };
    $scope.pPage = function () {
        $scope.since = $scope.pPageSince;
        $scope.url = 'https://api.github.com/users?since=' + $scope.since;
        console.log($scope.since);
        API.getInfo($scope.url).then(function (users) {
            $scope.users = users;
            $scope.pPageSince = $scope.users[0].id;
            console.log($scope.pPageSince);
            $scope.nPageSince = $scope.users[$scope.users.length - 1].id;
            console.log($scope.nPageSince);
        });
    }


    }
);