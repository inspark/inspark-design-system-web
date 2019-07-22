/**
 * Created by y.masyan on 31.03.2017.
 */
import * as template from './panel.html';

angular.module('app')
  .component('panelComponent', {
    template: template,
    transclude: true,
    bindings: {
      mainPanelHide: '<',
      toggleRight: '&',
      toggleLeft: '&',
      toggleLock: '&',
      toggleMinimize: '&',
      header: '<',
      buttons: '<',
      panelClass: '<',
      panelBodyClass: '<',
      isUpdatePriv: '<',
      isWidgetPanel: '<'

    },
    controller: function () {
      const that = this;
      const $ctrl = this;
      $ctrl.isLocked = true;

      this.$onInit = function () {
        $ctrl.showLock = (typeof $ctrl.isWidgetPanel !== 'undefined' && typeof $ctrl.isUpdatePriv !== 'undefined' && $ctrl.isWidgetPanel && $ctrl.isUpdatePriv) ? true : false;
        if (!this.buttons) {
          this.buttons = {
            leftLt: true,
            leftGt: true,
            rightLt: true,
            rightGt: true,
            twoArrows: true,
            lock: true,
            minimize: false,
            switchBtn: {enable: false, state: 'open'}
          };
        }
      };
      $ctrl.toggleLock2 = function () {
        $ctrl.isLocked = !$ctrl.isLocked;
        $ctrl.toggleLock();
      };
    },

  });
