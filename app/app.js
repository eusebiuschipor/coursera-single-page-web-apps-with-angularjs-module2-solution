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
    // list.itemName = "";
    // list.itemQuantity = "";
    //
    // list.addItem = function () {
    //   try {
    //     ShoppingListService.addItem(list.itemName, list.itemQuantity);
    //   } catch (error) {
    //     list.errorMessage = error.message;
    //   }
    // };
    //
    // list.removeItem = function (itemIndex) {
    //   ShoppingListService.removeItem(itemIndex);
    // };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    //
    // list.itemName = "";
    // list.itemQuantity = "";
    //
    // list.addItem = function () {
    //   try {
    //     ShoppingListService.addItem(list.itemName, list.itemQuantity);
    //   } catch (error) {
    //     list.errorMessage = error.message;
    //   }
    // };
    //
    // list.removeItem = function (itemIndex) {
    //   ShoppingListService.removeItem(itemIndex);
    // };
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
