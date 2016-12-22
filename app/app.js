(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getToBuyItems();

    list.buy = function(index) {
      ShoppingListCheckOffService.buy(index);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    service.alreadyBoughtItems = [];
    service.toBuyItems = [
      {
        name:     'cookies',
        quantity: 10
      },
      {
        name:     'apples',
        quantity: 5
      },
      {
        name:     'avocado',
        quantity: 15
      },
      {
        name:     'bananas',
        quantity: 10
      },
      {
        name:     'cherries',
        quantity: 10
      }
    ];

    service.getToBuyItems = function() {
      return service.toBuyItems;
    };

    service.getAlreadyBoughtItems = function() {
      return service.alreadyBoughtItems;
    };

    service.buy = function(index) {
      var boughtItem = service.toBuyItems[index];
      service.toBuyItems.splice(index, 1);
      service.alreadyBoughtItems.push(boughtItem);
    };
  };

})();
