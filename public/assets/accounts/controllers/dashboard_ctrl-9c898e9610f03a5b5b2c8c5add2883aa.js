(function() {
  ohmpieng.controller('DashboardCtrl', function($scope, account) {
    var dispatcher, items;
    $scope.user = account.data.user;
    dispatcher = new WebSocketRails("127.0.0.1:10000/websocket");
    dispatcher.on_open = function(data) {
      return console.log(data);
    };
    dispatcher.bind('tasks.create_success', function(task) {
      console.log('successfully created ' + task.name);
    });
    items = [];
    items.push({
      timestamp: 20,
      value: 82
    });
    $scope.chart = {
      data: items,
      max: 30
    };
    $scope.ram = {
      data: {
        text: "Ram",
        value: 80
      },
      max: 30
    };
    $scope.cpu = {
      data: {
        text: "CPU",
        value: 33
      },
      max: 30
    };
    $scope.disk = {
      data: {
        text: "Disk",
        value: 50
      },
      max: 30
    };
    $scope.$on('tooltipShow.directive', function(angularEvent, event) {
      angularEvent.targetScope.$parent.event = event;
      angularEvent.targetScope.$parent.$digest();
    });
    $scope.exampleData = [
      {
        'key': 'CPU',
        'color': '#2ABB9B',
        'values': [[0, 1233], [10, 2312], [20, 3123], [30, 123], [40, 12312], [50, 1231]]
      }
    ];
    return $scope.isAreaExampleData = [
      {
        'key': 'x1',
        'color': '#2ABB9B',
        'values': [[0, 1233], [10, 2312], [20, 3123], [30, 123], [40, 12312], [50, 1231]]
      }, {
        'key': 'x2',
        'color': '#2574A9',
        'values': [[0, 123], [10, 3123], [20, 2345], [30, 456], [40, 456], [50, 765]]
      }, {
        'key': 'x3',
        'color': '#F62459',
        'values': [[0, 12], [10, 213], [20, 313], [30, 123], [40, 12], [50, 1231]]
      }
    ];
  });

}).call(this);