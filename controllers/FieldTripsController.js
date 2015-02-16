studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.students=[];
  $scope.permissionSlip= function() {
    $scope.students.push({ name: $scope.studentName });
  };
});
