export const data = 
[
	{
		"label": "1",
		"type": "SEQUENCE",
		"comment": "",
		"form": "TRY",
		"expand": "true",
		"exit-on": "FAILURE",
		"timeout": "",
		"node_hints": {
			"name": "TRY",
			"itemType": "CONTROLS"
		},
		"nodes": [
			{
				"label": "11",
				"type": "SEQUENCE",
				"comment": "",
				"form": "TRY",
				"expand": "true",
				"exit-on": "FAILURE",
				"timeout": "",
				"node_hints": {
					"name": "TRY",
					"itemType": "CONTROLS"
				},
				"nodes": [
					{
						"label": "111",
						"type": "SEQUENCE",
						"comment": "",
						"form": "TRY",
						"expand": "true",
						"exit-on": "FAILURE",
						"timeout": "",
						"node_hints": {
							"name": "TRY",
							"itemType": "CONTROLS"
						},
						"nodes": [
							{
								"label": "1111",
								"type": "SEQUENCE",
								"comment": ""
							}
						]
					},
					{
						"label": "112",
						"type": "SEQUENCE",
						"comment": "",
						"form": "CATCH",
						"expand": "true",
						"exit-on": "FAILURE",
						"node_hints": {
							"name": "CATCH",
							"itemType": "CONTROLS"
						},
						"nodes": [
							{
								"label": "NEW",
								"type": "SEQUENCE",
								"comment": ""
							}
						]
					}
				]
			},
			{
				"label": "12",
				"type": "SEQUENCE",
				"comment": "",
				"form": "CATCH",
				"expand": "true",
				"exit-on": "FAILURE",
				"node_hints": {
					"name": "CATCH",
					"itemType": "CONTROLS"
				},
				"nodes": [
					{
						"label": "121",
						"type": "SEQUENCE",
						"comment": ""
					}
				]
			}
		]
	},
	{
		"label": "2",
		"type": "SEQUENCE",
		"comment": "",
		"form": "CATCH",
		"expand": "true",
		"exit-on": "FAILURE",
		"node_hints": {
			"name": "CATCH",
			"itemType": "CONTROLS"
		},
		"nodes": [
			{
				"label": "21",
				"type": "SEQUENCE",
				"comment": "",
				"nodes": [
					{
						"label": "211",
						"type": "SEQUENCE",
						"comment": "",
						"form": "TRY",
						"expand": "true",
						"exit-on": "FAILURE",
						"timeout": "",
						"node_hints": {
							"name": "TRY",
							"itemType": "CONTROLS"
						}   } ]
			}
		]
	}
]
// [
// 	{
// 		"comment": "",
// 		"disabled": false,
// 		"label": "Math",
// 		"service": "pub.math:addInts",
// 		"type": "INVOKE",
// 		"validate-in": null,
// 		"validate-out": null,
// 		"node_hints": {
// 			"name": null,
// 			"itemType": "SERVICES",
// 			"serviceInfo": {
// 				"groupDisplayName": "Math",
// 				"groupName": "math",
// 				"services": null
// 			},
// 			"serviceName": {
// 				"transformerSupport": "true",
// 				"displayName": "addInts",
// 				"serviceName": "pub.math:addInts"
// 			},
// 			"outputMapSet": null,
// 			"mapSet": [
// 				{
// 					"field": "/num1;1;0",
// 					"value": "3",
// 					"variableSubstitution": false
// 				},
// 				{
// 					"field": "/num2;1;0",
// 					"value": "5",
// 					"variableSubstitution": false
// 				}
// 			],
// 			"ui_step_index": 2,
// 			"nodeIndex": 0,
// 			"serviceReferenceResolved": true
// 		},
// 		"nodes": [
// 			{
// 				"comment": "",
// 				"label": "add 1",
// 				"mode": "INPUT",
// 				"type": "MAP",
// 				"nodeIndex": 0
// 			},
// 			{
// 				"comment": "",
// 				"label": "add 2",
// 				"mode": "OUTPUT",
// 				"type": "MAP",
// 				"nodeIndex": 1
// 			}
// 		],
// 		"nodeIndex": 0
// 	},
// 	{
// 		"comment": "",
// 		"label": "Invoke predefined:com.softwareag.cloudstreams.marketo_v1",
// 		"service": "fld_common.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.operations.triggers:getChannels",
// 		"timeout": "",
// 		"type": "INVOKE",
// 		"validate-in": "",
// 		"validate-out": "",
// 		"node_hints": {
// 			"itemType": "APPS",
// 			"id": "com.softwareag.cloudstreams.marketo_v1",
// 			"name": "Marketo",
// 			"providerName": "WmMarketoProvider",
// 			"operation": {
// 				"operationName": "getChannels",
// 				"isCustom": "false",
// 				"description": "Returns a list of all available channels in the target instance.",
// 				"operationType": "triggers",
// 				"isDynamicOperation": "false",
// 				"projectName": "flb7388f7d9ac2ea6a9185e5"
// 			},
// 			"appType": "predefined",
// 			"hasAccount": true,
// 			"description": "Marketo lets you create, retrieve, and remove entities and data stored within Marketo using the Marketo REST API.",
// 			"type": "REST",
// 			"allowDeleteApplication": "false",
// 			"allowUpdateApplication": "false",
// 			"packageName": "WmMarketoProvider",
// 			"certified": "true",
// 			"version": "1",
// 			"allowCustomOperations": true,
// 			"deprecated": false,
// 			"icon": null,
// 			"listenerEnabled": false,
// 			"sourceType": 1,
// 			"connectionRequired": true,
// 			"index": 0,
// 			"serviceReferenceResolved": true,
// 			"map": [],
// 			"mapDelete": [],
// 			"transformer": [],
// 			"lookupTransformer": [],
// 			"mapSet": [],
// 			"inputMap": [],
// 			"outputMap": [],
// 			"connection": {
// 				"connectionName": "Marketo_1",
// 				"connectionType": "sagcloud",
// 				"description": null
// 			},
// 			"connectionNSName": "fld_1173913648_stage00.projects.flb7388f7d9ac2ea6a9185e5.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.connections:Marketo_1",
// 			"connectionType": "sagcloud",
// 			"accountReferenceResolved": true,
// 			"ui_step_index": 2,
// 			"nodeIndex": 1
// 		},
// 		"nodeIndex": 1
// 	},
// 	{
// 		"comment": "",
// 		"label": "Invoke predefined:com.softwareag.cloudstreams.marketo_v1",
// 		"service": "fld_common.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.operations.triggers:getFolders",
// 		"timeout": "",
// 		"type": "INVOKE",
// 		"validate-in": "",
// 		"validate-out": "",
// 		"node_hints": {
// 			"itemType": "APPS",
// 			"id": "com.softwareag.cloudstreams.marketo_v1",
// 			"name": "Marketo",
// 			"providerName": "WmMarketoProvider",
// 			"operation": {
// 				"operationName": "getFolders",
// 				"isCustom": "false",
// 				"description": "Retrieves list of folders or programs in a Marketo instance.",
// 				"operationType": "triggers",
// 				"isDynamicOperation": "false",
// 				"connectionType": "sagcloud",
// 				"projectName": "flb7388f7d9ac2ea6a9185e5"
// 			},
// 			"appType": "predefined",
// 			"hasAccount": true,
// 			"description": "Marketo lets you create, retrieve, and remove entities and data stored within Marketo using the Marketo REST API.",
// 			"type": "REST",
// 			"allowDeleteApplication": "false",
// 			"allowUpdateApplication": "false",
// 			"packageName": "WmMarketoProvider",
// 			"certified": "true",
// 			"version": "1",
// 			"allowCustomOperations": true,
// 			"deprecated": false,
// 			"icon": null,
// 			"listenerEnabled": false,
// 			"sourceType": 1,
// 			"connectionRequired": true,
// 			"index": 0,
// 			"serviceReferenceResolved": true,
// 			"map": [],
// 			"mapDelete": [],
// 			"transformer": [],
// 			"lookupTransformer": [],
// 			"mapSet": [],
// 			"inputMap": [],
// 			"outputMap": [],
// 			"connection": {
// 				"connectionName": "Marketo_1",
// 				"connectionType": "sagcloud",
// 				"description": null
// 			},
// 			"connectionNSName": "fld_1173913648_stage00.projects.flb7388f7d9ac2ea6a9185e5.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.connections:Marketo_1",
// 			"connectionType": "sagcloud",
// 			"accountReferenceResolved": true,
// 			"nodeIndex": 2
// 		},
// 		"nodeIndex": 2
// 	},
// 	{
// 		"comment": "",
// 		"disabled": "true",
// 		"label": "Invoke predefined:com.softwareag.cloudstreams.marketo_v1",
// 		"service": "fld_common.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.operations.triggers:getActivityTypes",
// 		"timeout": "",
// 		"type": "INVOKE",
// 		"validate-in": "",
// 		"validate-out": "",
// 		"node_hints": {
// 			"itemType": "APPS",
// 			"id": "com.softwareag.cloudstreams.marketo_v1",
// 			"name": "Marketo",
// 			"providerName": "WmMarketoProvider",
// 			"operation": {
// 				"operationName": "getActivityTypes",
// 				"isCustom": "false",
// 				"description": "Returns metadata about activity types available in Marketo.",
// 				"operationType": "triggers",
// 				"isDynamicOperation": "false",
// 				"projectName": "flb7388f7d9ac2ea6a9185e5"
// 			},
// 			"appType": "predefined",
// 			"hasAccount": true,
// 			"description": "Marketo lets you create, retrieve, and remove entities and data stored within Marketo using the Marketo REST API.",
// 			"type": "REST",
// 			"allowDeleteApplication": "false",
// 			"allowUpdateApplication": "false",
// 			"packageName": "WmMarketoProvider",
// 			"certified": "true",
// 			"version": "1",
// 			"allowCustomOperations": true,
// 			"deprecated": false,
// 			"icon": null,
// 			"listenerEnabled": false,
// 			"sourceType": 1,
// 			"connectionRequired": true,
// 			"index": 0,
// 			"serviceReferenceResolved": true,
// 			"map": [],
// 			"mapDelete": [],
// 			"transformer": [],
// 			"lookupTransformer": [],
// 			"mapSet": [],
// 			"inputMap": [],
// 			"outputMap": [],
// 			"connection": {
// 				"connectionName": "Marketo_1",
// 				"connectionType": "sagcloud",
// 				"description": null
// 			},
// 			"connectionNSName": "fld_1173913648_stage00.projects.flb7388f7d9ac2ea6a9185e5.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.connections:Marketo_1",
// 			"connectionType": "sagcloud",
// 			"accountReferenceResolved": true,
// 			"nodeIndex": 3
// 		},
// 		"nodeIndex": 3
// 	},
// 	{
// 		"comment": "",
// 		"disabled": "true",
// 		"label": "Invoke predefined:com.softwareag.cloudstreams.marketo_v1",
// 		"service": "fld_common.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.operations.triggers:getLeadActivities",
// 		"timeout": "",
// 		"type": "INVOKE",
// 		"validate-in": "",
// 		"validate-out": "",
// 		"node_hints": {
// 			"itemType": "APPS",
// 			"id": "com.softwareag.cloudstreams.marketo_v1",
// 			"name": "Marketo",
// 			"providerName": "WmMarketoProvider",
// 			"operation": {
// 				"operationName": "getLeadActivities",
// 				"isCustom": "false",
// 				"description": "Retrieves leads for the requested activity types.",
// 				"operationType": "triggers",
// 				"isDynamicOperation": "false",
// 				"projectName": "flb7388f7d9ac2ea6a9185e5"
// 			},
// 			"appType": "predefined",
// 			"hasAccount": true,
// 			"description": "Marketo lets you create, retrieve, and remove entities and data stored within Marketo using the Marketo REST API.",
// 			"type": "REST",
// 			"allowDeleteApplication": "false",
// 			"allowUpdateApplication": "false",
// 			"packageName": "WmMarketoProvider",
// 			"certified": "true",
// 			"version": "1",
// 			"allowCustomOperations": true,
// 			"deprecated": false,
// 			"icon": null,
// 			"listenerEnabled": false,
// 			"sourceType": 1,
// 			"connectionRequired": true,
// 			"index": 0,
// 			"serviceReferenceResolved": true,
// 			"map": [],
// 			"mapDelete": [],
// 			"transformer": [],
// 			"lookupTransformer": [],
// 			"mapSet": [],
// 			"inputMap": [],
// 			"outputMap": [],
// 			"connection": {
// 				"connectionName": "Marketo_1",
// 				"connectionType": "sagcloud",
// 				"description": null
// 			},
// 			"connectionNSName": "fld_1173913648_stage00.projects.flb7388f7d9ac2ea6a9185e5.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.connections:Marketo_1",
// 			"connectionType": "sagcloud",
// 			"accountReferenceResolved": true,
// 			"nodeIndex": 4
// 		},
// 		"nodeIndex": 4
// 	},
// 	{
// 		"comment": "",
// 		"exit-on": "FAILURE",
// 		"label": "NEW",
// 		"type": "SEQUENCE",
// 		"node_hints": {
// 			"itemType": "ALL",
// 			"name": "NEW",
// 			"nodeIndex": 5
// 		},
// 		"nodeIndex": 5
// 	},
// 	{
// 		"comment": "",
// 		"label": "Invoke predefined:com.softwareag.cloudstreams.marketo_v1",
// 		"service": "fld_common.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.operations.triggers:getChannels",
// 		"timeout": "",
// 		"type": "INVOKE",
// 		"validate-in": "",
// 		"validate-out": "",
// 		"node_hints": {
// 			"itemType": "APPS",
// 			"id": "com.softwareag.cloudstreams.marketo_v1",
// 			"name": "Marketo",
// 			"providerName": "WmMarketoProvider",
// 			"operation": {
// 				"operationName": "getChannels",
// 				"isCustom": "false",
// 				"description": "Returns a list of all available channels in the target instance.",
// 				"operationType": "triggers",
// 				"isDynamicOperation": "false",
// 				"projectName": "flb7388f7d9ac2ea6a9185e5"
// 			},
// 			"appType": "predefined",
// 			"hasAccount": true,
// 			"description": "Marketo lets you create, retrieve, and remove entities and data stored within Marketo using the Marketo REST API.",
// 			"type": "REST",
// 			"allowDeleteApplication": "false",
// 			"allowUpdateApplication": "false",
// 			"packageName": "WmMarketoProvider",
// 			"certified": "true",
// 			"version": "1",
// 			"allowCustomOperations": true,
// 			"deprecated": false,
// 			"icon": null,
// 			"listenerEnabled": false,
// 			"sourceType": 1,
// 			"connectionRequired": true,
// 			"serviceReferenceResolved": true,
// 			"map": [],
// 			"mapDelete": [],
// 			"transformer": [],
// 			"lookupTransformer": [],
// 			"mapSet": [],
// 			"inputMap": [],
// 			"outputMap": [],
// 			"connection": {
// 				"connectionName": "Marketo_1",
// 				"connectionType": "sagcloud",
// 				"description": null
// 			},
// 			"connectionNSName": "fld_1173913648_stage00.projects.flb7388f7d9ac2ea6a9185e5.WmMarketoProvider.com_softwareag_cloudstreams_marketo_v1.connections:Marketo_1",
// 			"connectionType": "sagcloud",
// 			"accountReferenceResolved": true,
// 			"nodeIndex": 6
// 		},
// 		"nodeIndex": 6
// 	},
// 	{
// 		"label": "IF",
// 		"name": "",
// 		"type": "BRANCH",
// 		"comment": "",
// 		"exit-on": "FAILURE",
// 		"evaluate-labels": "true",
// 		"nodes": [
// 			{
// 				"label": "((%undefined%==undefined))",
// 				"name": "",
// 				"type": "SEQUENCE",
// 				"comment": "",
// 				"exit-on": "FAILURE",
// 				"node_hints": {
// 					"name": "IF",
// 					"itemType": "CONTROLS"
// 				},
// 				"nodes": [
// 					{
// 						"label": null,
// 						"type": "BRANCH",
// 						"comment": "",
// 						"switch": "",
// 						"node_hints": {
// 							"name": "SWITCH",
// 							"itemType": "CONTROLS"
// 						},
// 						"nodes": [
// 							{
// 								"label": null,
// 								"type": "SEQUENCE",
// 								"comment": "",
// 								"node_hints": {
// 									"name": "CASE",
// 									"itemType": "CONTROLS"
// 								},
// 								"nodes": [
// 									{
// 										"label": "NEW",
// 										"type": "SEQUENCE",
// 										"comment": "",
// 										"nodeIndex": 0
// 									}
// 								],
// 								"nodeIndex": 0
// 							},
// 							{
// 								"label": "$default",
// 								"type": "SEQUENCE",
// 								"comment": "",
// 								"node_hints": {
// 									"name": "CASE",
// 									"itemType": "CONTROLS"
// 								},
// 								"nodes": [
// 									{
// 										"label": "NEW",
// 										"type": "SEQUENCE",
// 										"comment": "",
// 										"nodeIndex": 0
// 									}
// 								],
// 								"nodeIndex": 1
// 							}
// 						],
// 						"nodeIndex": 0
// 					}
// 				],
// 				"nodeIndex": 0
// 			}
// 		],
// 		"node_hints": {
// 			"itemType": "CONTROLS",
// 			"name": "IF",
// 			"config": {
// 				"displayLabel": "field_name",
// 				"toolTipLabel": "name",
// 				"showLeafLabelOnly": true,
// 				"allowConstantValueInput": true,
// 				"focusOnLoad": true,
// 				"specialCharsAllowed": false,
// 				"resetOnfocusout": true,
// 				"displayIcon": true
// 			},
// 			"nodeIndex": 7
// 		},
// 		"nodeIndex": 7
// 	}
// ]