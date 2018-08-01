(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sweet-permissions', ['exports', '@angular/core'], factory) :
    (factory((global['sweet-permissions'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SweetPermissionsService = (function () {
        function SweetPermissionsService() {
        }
        SweetPermissionsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SweetPermissionsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SweetPermissionsService.ngInjectableDef = i0.defineInjectable({ factory: function SweetPermissionsService_Factory() { return new SweetPermissionsService(); }, token: SweetPermissionsService, providedIn: "root" });
        return SweetPermissionsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SweetPermissionsComponent = (function () {
        function SweetPermissionsComponent() {
        }
        /**
         * @return {?}
         */
        SweetPermissionsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SweetPermissionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sweet-permissions',
                        template: "\n    <p>\n      sweet-permissions works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        SweetPermissionsComponent.ctorParameters = function () { return []; };
        return SweetPermissionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SweetPermissionsModule = (function () {
        function SweetPermissionsModule() {
        }
        SweetPermissionsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [SweetPermissionsComponent],
                        exports: [SweetPermissionsComponent]
                    },] },
        ];
        return SweetPermissionsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SweetPermissionsService = SweetPermissionsService;
    exports.SweetPermissionsComponent = SweetPermissionsComponent;
    exports.SweetPermissionsModule = SweetPermissionsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dlZXQtcGVybWlzc2lvbnMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zd2VldC1wZXJtaXNzaW9ucy9saWIvc3dlZXQtcGVybWlzc2lvbnMuc2VydmljZS50cyIsIm5nOi8vc3dlZXQtcGVybWlzc2lvbnMvbGliL3N3ZWV0LXBlcm1pc3Npb25zLmNvbXBvbmVudC50cyIsIm5nOi8vc3dlZXQtcGVybWlzc2lvbnMvbGliL3N3ZWV0LXBlcm1pc3Npb25zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN3ZWV0UGVybWlzc2lvbnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3dlZXQtcGVybWlzc2lvbnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgc3dlZXQtcGVybWlzc2lvbnMgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN3ZWV0UGVybWlzc2lvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3ZWV0UGVybWlzc2lvbnNDb21wb25lbnQgfSBmcm9tICcuL3N3ZWV0LXBlcm1pc3Npb25zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3dlZXRQZXJtaXNzaW9uc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTd2VldFBlcm1pc3Npb25zQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTd2VldFBlcm1pc3Npb25zTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7c0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLDRDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSx5REFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozt3Q0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO3FCQUNyQzs7cUNBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=