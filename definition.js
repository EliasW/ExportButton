define([], function () {
    'use strict';
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: {
                uses: "dimensions",
                min: 0,
                max: 10
            },
            measures: {
                uses: "measures",
                min: 0,
                max: 10
            },
            settings: {
                uses: "settings",
            },
            configdata: {
                //  component: "expandable-items",
                label: "Export Settings",
                items: {
                    exportByID: {
                        type: "boolean",
                        component: "switch",
                        label: "Export by Object ID",
                        ref: "exportByID",
                        options: [{
                            value: true,
                            label: "On"
                        }, {
                            value: false,
                            label: "Not On"
                        }],
                        defaultValue: false
                    },
                    objectId: {
                        type: "string",
                        component: "string",
                        label: "Object Id",
                        ref: "objectId",
                        defaultValue: "",
                        show: (d) => d.exportByID
                    },
                    fileSettings: {
                        type: "string",
                        component: "dropdown",
                        label: "File Settings",
                        ref: "fileSettings",
                        options: [{
                            value: "OOXML",
                            label: "Open XML-Excel"
                        }, {
                            value: "CSV_C",
                            label: "Comma separated CSV"
                        }, {
                            value: "CSV_T",
                            label: "Tab separated CSV"
                        }],
                        defaultValue: "OOXML"
                    },
                    selectionSettings: {
                        type: "string",
                        component: "dropdown",
                        label: "Selection State",
                        ref: "selectionSettings",
                        options: [{
                            value: "A",
                            label: "All values"
                        }, {
                            value: "P",
                            label: "Possible values"
                        }],
                        defaultValue: "P"
                    },
                }
            },
            configstyle: {
                component: "expandable-items",
                label: "Export Style",
                items: {
                    MySwitchProp: {
                        type: "boolean",
                        component: "switch",
                        label: "Background - Transparent",
                        ref: "transparent",
                        options: [{
                            value: true,
                            label: "On"
                        }, {
                            value: false,
                            label: "Not On"
                        }],
                        defaultValue: true
                    },
                    buttonName: {
                        type: "string",
                        component: "string",
                        label: "Button Name",
                        ref: "buttonName",
                        defaultValue: "Export Data"
                    },
                    buttonPosition: {
                        type: "string",
                        component: "string",
                        label: "Button Margin",
                        ref: "buttonPosition",
                        defaultValue: "10px"
                    },
                    buttonWidth: {
                        type: "string",
                        component: "string",
                        label: "Button Width",
                        ref: "buttonWidth",
                        defaultValue: "150px"
                    },
                    buttonHeight: {
                        type: "string",
                        component: "string",
                        label: "Button Height",
                        ref: "buttonHeight",
                        defaultValue: "30px"
                    },
                    buttonColor: {
                        type: "object",
                        component: "color-picker",
                        label: "Button Color",
                        ref: "buttonColor",
                        defaultValue: {
                            color: "ff5866",
                            index: "-1"
                        },
                    },
                }
            }
        }
    };
});