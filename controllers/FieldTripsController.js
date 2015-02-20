studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.studentsWithPermission=[];
  $scope.addStudentWithPermissionSlip = function(student) {
    var index = StudentsFactory.studentsWithoutPermission.indexOf(student);
    $scope.studentsWithPermission.push(student);
    StudentsFactory.studentsWithoutPermission.splice(index, 1);
  };
});
