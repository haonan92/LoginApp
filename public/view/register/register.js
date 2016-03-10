app.controller("RegisterCtrl", function ($scope, $http, $rootScope) {
    $scope.register = function(user)
    {
        console.log(user);
        //TODO: verify password are teh same and notify user
        if (user.password == user.password2)
        {
            $http.post('/register', user)
            .success(function (user) {
                $rootScope.currentUser = user;
                console.log(user);
        });
        }
        
    }
});