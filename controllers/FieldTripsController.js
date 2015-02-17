studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.studentsWithPermission=[];
  $scope.permissionSlip = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.studentsWithPermission.push(student);
    $scope.students.splice(index, 1);
  };
});
