var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: '/partials/student_tab.html'
        })

        .when('/student', {
            templateUrl: '/partials/student_tab.html'
        })

        .when('/addStudent', {
            templateUrl: '/partials/add_student.html'
        })

        .when('/editStudent', {
            templateUrl: '/partials/edit_student.html'
        })

        .when('/class', {
            templateUrl: '/partials/class_tab.html'
        })

        .when('/addClass', {
            templateUrl: '/partials/add_class.html'
        })

        .when('/editClass', {
            templateUrl: '/partials/edit_class.html'
        })

});

app.controller('myController', function ($scope, $location) {
    $scope.students = [
        { name: 'Nam', age: new Date(2004, 01, 01), class: 'lop 10A1' },
        { name: 'Bede', age: new Date(2006, 01, 01), class: 'lop 10A2' },
        { name: 'Hoho', age: new Date(2003, 01, 01), class: 'lop 10A2' },
        { name: 'Kaka', age: new Date(2002, 01, 01), class: 'lop 11A1' },
        { name: 'Benben', age: new Date(2004, 01, 01), class: 'lop 11A2' },
        { name: 'Lunu', age: new Date(2006, 01, 01), class: 'lop 12A1' },
        { name: 'Lpaa', age: new Date(2001, 01, 01), class: 'lop 12A2' }
    ];

    $scope.classes = [
        { name: "lop 10A1", belong: "lop 10" },
        { name: "lop 10A2", belong: "lop 10" },
        { name: "lop 11A1", belong: "lop 11" },
        { name: "lop 11A2", belong: "lop 11" },
        { name: "lop 12A1", belong: "lop 12" },
        { name: "lop 12A2", belong: "lop 12" }
    ];

    $scope.addStudent = function () {
        $location.path('/addStudent');
    }

    $scope.saveAddStudent = function (name, age) {
        if ((name != null || name != undefined) && (age != null || age != undefined)) {
            $scope.students.push({ name: name, age: age, class: '' });
            $location.path('/student');
        } else {
            window.alert("Ban chua nhap day du thong tin!");
        }
    }

    $scope.editStudent = function (student) {
        $scope.student = student;
        $location.path('/editStudent');
    }

    $scope.saveEditStudent = function () {
        $location.path('/student');
    }

    $scope.deleteStudent = function (student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index, 1);
    }

    $scope.addClass = function () {
        $location.path('/addClass');
    }

    $scope.saveAddClass = function (name) {
        if (name != null || name != undefined) {
            $scope.classes.push({ name: name, belong: ''});
            $location.path('/class');
        } else {
            window.alert("Ban chua nhap day du thong tin!");
        }
    }

    $scope.editClass = function (classroom) {
        $scope.class = classroom;
        $location.path('/editClass');
    }

    $scope.saveEditClass = function () {
        $location.path('/class');
    }

    $scope.deleteClass = function (classroom) {
        var index = $scope.classes.indexOf(classroom);
        $scope.classes.splice(index, 1);
    }
});