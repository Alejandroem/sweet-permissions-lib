(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sweet-permissions-lib', ['exports', '@angular/core'], factory) :
    (factory((global['sweet-permissions-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SweetPermissionsLibService = (function () {
        function SweetPermissionsLibService() {
        }
        SweetPermissionsLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SweetPermissionsLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ SweetPermissionsLibService.ngInjectableDef = i0.defineInjectable({ factory: function SweetPermissionsLibService_Factory() { return new SweetPermissionsLibService(); }, token: SweetPermissionsLibService, providedIn: "root" });
        return SweetPermissionsLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SweetPermissionsLibComponent = (function () {
        function SweetPermissionsLibComponent() {
        }
        /**
         * @return {?}
         */
        SweetPermissionsLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SweetPermissionsLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sweet-permissions-lib',
                        template: "\n    <p>\n      sweet-permissions-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        SweetPermissionsLibComponent.ctorParameters = function () { return []; };
        return SweetPermissionsLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SweetPermissionsLibModule = (function () {
        function SweetPermissionsLibModule() {
        }
        SweetPermissionsLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [SweetPermissionsLibComponent],
                        exports: [SweetPermissionsLibComponent]
                    },] },
        ];
        return SweetPermissionsLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SweetPermissionsLibService = SweetPermissionsLibService;
    exports.SweetPermissionsLibComponent = SweetPermissionsLibComponent;
    exports.SweetPermissionsLibModule = SweetPermissionsLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dlZXQtcGVybWlzc2lvbnMtbGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc3dlZXQtcGVybWlzc2lvbnMtbGliL2xpYi9zd2VldC1wZXJtaXNzaW9ucy1saWIuc2VydmljZS50cyIsIm5nOi8vc3dlZXQtcGVybWlzc2lvbnMtbGliL2xpYi9zd2VldC1wZXJtaXNzaW9ucy1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9zd2VldC1wZXJtaXNzaW9ucy1saWIvbGliL3N3ZWV0LXBlcm1pc3Npb25zLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTd2VldFBlcm1pc3Npb25zTGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N3ZWV0LXBlcm1pc3Npb25zLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzd2VldC1wZXJtaXNzaW9ucy1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN3ZWV0UGVybWlzc2lvbnNMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3ZWV0UGVybWlzc2lvbnNMaWJDb21wb25lbnQgfSBmcm9tICcuL3N3ZWV0LXBlcm1pc3Npb25zLWxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N3ZWV0UGVybWlzc2lvbnNMaWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3dlZXRQZXJtaXNzaW9uc0xpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3dlZXRQZXJtaXNzaW9uc0xpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3lDQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiwrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxRQUFRLEVBQUUsNkRBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7MkNBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO3dCQUM1QyxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztxQkFDeEM7O3dDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9