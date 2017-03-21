/**
 * Created by zzx on 2017/3/20.
 */

angular.module('app',[])
    .controller('mod',($scope,$http,$q)=>{
        $q.all([
            $http.get('data/head.txt'),
            $http.get('data/nav.txt')
        ]).then((r)=>{
            let [a1,a2]=r;
            $scope.a1=a1.data;
            $scope.a2=a2.data;

        },(r)=>{
            alert('失败了'+r);
        })
    })
    .controller('ctr',($scope,$http,$q)=>{
        $q.all([
            $http.get('data/comIn.txt'),
            $http.get('data/comDown.txt')
        ]).then((r)=>{
            let [b1,b2]=r;
            $scope.b1=b1.data;
            $scope.b2=b2.data;

        },r=>{
            alert('失败了'+r);
        })
    })
    .controller('price',($scope,$http,$q)=>{
        $q.all([
            $http.get('data/phone1.txt'),
            $http.get('data/phone2.txt'),
            $http.get('data/phone3.txt')
        ]).then((r)=>{
            let [c1,c2,c3]=r;
            $scope.c1=c1.data;
            $scope.c2=c2.data;
            $scope.c3=c3.data;

        },r=>{
            alert('失败了'+r);
        })
    })
    .controller('list',($scope,$http,$q)=>{
        $q.all([
            $http.get('data/volt.txt'),
            $http.get('data/volt2.txt'),
            $http.get('data/news.txt')
        ]).then((r)=>{
            let [e1,e2,e3]=r;
            $scope.e1=e1.data;
            $scope.e2=e2.data;
            $scope.e3=e3.data;

        },r=>{
            alert('失败了'+r);
        })
    })
    .controller('scale',($scope,$http,$q)=>{
        $q.all([
            $http.get('data/pic.txt'),
            $http.get('data/listen2.txt'),
            $http.get('data/listen1.txt'),
            $http.get('data/listen3.txt'),
            $http.get('data/listen4.txt'),
        ]).then((r)=>{
            let [d1,d2,d3,d4,d5]=r;
            $scope.d1=d1.data;
            $scope.d2=d2.data;
            $scope.d3=d3.data;
            $scope.d4=d4.data;
            $scope.d5=d5.data;
            console.log(d5);
        },r=>{
            alert('失败了'+r);
        })
    })
