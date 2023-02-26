define(["qlik", "css!./Style.css", "./definition", "./Properties"],
	function (qlik, stye, def, props) {
		"use strict";
		return {
			initialProperties: props,
			definition: def,
			support: {
				snapshot: false,
				export: false,
				exportData: true
			},
			paint: function ($element, layout) {

				var app = qlik.currApp();
				console.log("layout", layout)
				var html = ''
				html += `<button id='exportButtonExt' class='lui-button'> 
				<span style="padding-right:10px" class="lui-icon lui-icon--download"> </span>
				${layout.buttonName} </button>`;

				$element.html(html);

				var options = {
					format: layout.fileSettings,
					state: layout.selectionSettings,
					download: true
				};

				var idObject = layout.qInfo.qId
				if (layout.exportByID)
					idObject = layout.objectId

				$("#exportButtonExt").on("click", () => {
					app.visualization.get(idObject).then(function (vis) {
						vis.exportData(options).then(function (link) {
							window.open(link);
						});
					});
				})

				$("#exportButtonExt").css("margin", layout.buttonPosition)
				$("#exportButtonExt").css("width", layout.buttonWidth)
				$("#exportButtonExt").css("height", layout.buttonHeight)
				$("#exportButtonExt").css("background-color", layout.buttonColor.color)

				var transparent = layout.transparent
				if (transparent) {
					$element.parent().parent().parent().attr("style", 'background-color:transparent !important')
				} else {
					$element.parent().parent().parent().attr("style", 'none')
				}
				return qlik.Promise.resolve();
			}
		};

	});

