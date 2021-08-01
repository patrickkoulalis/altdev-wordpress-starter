import { __ } from "@wordpress/i18n";
import { select, dispatch, useSelect } from "@wordpress/data";
import {
	useBlockProps,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	CheckboxControl,
	TabPanel,
	RangeControl,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
import getBlockChildren from "../../@lib/getBlockChildren";
import getBlockInfo from "../../@lib/getBlockInfo";

const ALLOWED_BLOCKS = ["altblocks/column"];

export default function Edit({ attributes, setAttributes, clientId }) {
	const THIS_BLOCK = getBlockInfo(clientId);
	const BLOCK_CHILDREN = getBlockChildren(clientId);

	const {
		style,
		breakpoints,
		gridTemplateAreas,
		gridTemplateColumns,
		gridTemplateRows,
		autoFill,
		autoFit,
		columns,
		gridGap,
	} = attributes;

	const PADDING = style?.spacing?.padding;

	const blockProps = useBlockProps({
		id: `block-${clientId}`,
		style: {
			padding: PADDING,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: "horizontal",
		// renderAppender: false,
	});

	useEffect(() => {
		BLOCK_CHILDREN.forEach((child) => {
			dispatch("core/block-editor").updateBlockAttributes(child.clientId, {
				gridTemplateAreas: gridTemplateAreas,
			});
		});
	}, [gridTemplateAreas]);

	function injectStyles(breakpoints) {
		let styles = ``;
		Object.keys(breakpoints).forEach((key) => {
			styles += `
				@media(min-width: ${breakpoints[key].width}) {
					#block-${clientId} {
						grid-template-columns: ${
							breakpoints[key].gridTemplateColumns ||
							`repeat(${breakpoints[key].columns}, 1fr)`
						};
						grid-template-rows: ${breakpoints[key].gridTemplateRows || "auto"};
						grid-gap: ${breakpoints[key].gridGap};
						grid-template-areas: ${breakpoints[key].gridTemplateAreas};
					}
				}
			`;
		});
		return styles;
	}

	// const injectStyles = `
	// 	@media(min-width: ${breakpoints.mobile.width}) {
	// 		#block-${clientId} {
	// 			grid-template-columns: ${
	// 				breakpoints.mobile.gridTemplateColumns ||
	// 				`repeat(${breakpoints.mobile.columns}, 1fr)`
	// 			};
	// 			grid-template-rows: ${breakpoints.mobile.gridTemplateRows || "auto"};
	// 			grid-gap: ${breakpoints.mobile.gridGap};
	// 			grid-template-areas: ${breakpoints.mobile.gridTemplateAreas};
	// 		}
	// 	}
	// 	@media(min-width: ${breakpoints.tablet.width}) {
	// 		#block-${clientId} {
	// 			grid-template-columns: ${
	// 				breakpoints.tablet.gridTemplateColumns ||
	// 				`repeat(${breakpoints.tablet.columns}, 1fr)`
	// 			};
	// 			grid-template-rows: ${breakpoints.tablet.gridTemplateRows || "auto"};
	// 			grid-gap: ${breakpoints.tablet.gridGap};
	// 			grid-template-areas: ${breakpoints.tablet.gridTemplateAreas};
	// 		}
	// 	}
	// 	@media(min-width: ${breakpoints.desktop.width}) {
	// 		#block-${clientId} {
	// 			grid-template-columns: ${
	// 				breakpoints.desktop.gridTemplateColumns ||
	// 				`repeat(${breakpoints.desktop.columns}, 1fr)`
	// 			};
	// 			grid-template-rows: ${breakpoints.desktop.gridTemplateRows || "auto"};
	// 			grid-gap: ${breakpoints.desktop.gridGap};
	// 			grid-template-areas: ${breakpoints.desktop.gridTemplateAreas};
	// 		}
	// 	}
	// `;

	const BREAKPOINT_TABS = (breakpoints) => {
		let arr = [];
		Object.keys(breakpoints).forEach((key) => {
			arr.push({
				name: breakpoints[key].name,
				title: breakpoints[key].name,
				className: `tab-${breakpoints[key].name}`,
			});
		});
		return arr;
	};

	function updateSetting(device, setting, newValue) {
		setAttributes({
			breakpoints: {
				...breakpoints,
				[device]: {
					...breakpoints[device],
					[setting]: newValue,
				},
			},
		});
	}

	function gridControls(breakpoints, device) {
		return (
			<>
				<PanelRow>
					<RangeControl
						label="Columns"
						value={breakpoints[device].columns}
						onChange={(value) => updateSetting(device, "columns", value)}
						min={1}
						max={12}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label="Grid Gap"
						value={breakpoints[device].gridGap}
						help="Example: 1.5em"
						onChange={(value) => updateSetting(device, "gridGap", value)}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label="Grid Template Columns"
						value={breakpoints[device].gridTemplateColumns}
						help="Example: 2fr 100px 10%"
						onChange={(value) =>
							updateSetting(device, "gridTemplateColumns", value)
						}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label="Grid Template Rows"
						value={breakpoints[device].gridTemplateRows}
						help="Example: 2fr 100px 10%"
						onChange={(value) =>
							updateSetting(device, "gridTemplateRows", value)
						}
					/>
				</PanelRow>
				<PanelRow>
					<TextareaControl
						label="Grid Template Areas"
						value={breakpoints[device].gridTemplateAreas}
						help='Example: "main main sidebar"'
						onChange={(value) =>
							updateSetting(device, "gridTemplateAreas", value)
						}
					/>
				</PanelRow>
				<PanelRow>
					<CheckboxControl
						label="Auto-Fit"
						checked={breakpoints[device].autoFit}
						onChange={(value) => {
							updateSetting(device, "autoFit", value);
						}}
					/>
					<CheckboxControl
						label="Auto-Fill"
						checked={breakpoints[device].autoFill}
						onChange={(value) => {
							updateSetting(device, "autoFill", value);
						}}
					/>
				</PanelRow>
			</>
		);
	}

	return (
		<>
			{editorLabel(useBlockProps)}
			<style>{injectStyles(breakpoints)}</style>
			<InspectorControls key="grid-settings">
				<Panel>
					<PanelBody title="Grid Settings" icon={more} initialOpen={false}>
						<TabPanel
							className="my-tab-panel"
							activeClass="active-tab"
							tabs={BREAKPOINT_TABS(breakpoints)}
						>
							{(tab) => {
								const desktopControls = new gridControls(
									breakpoints,
									"desktop"
								);
								const tabletControls = new gridControls(breakpoints, "tablet");
								const mobileControls = new gridControls(breakpoints, "mobile");
								if (tab.name == "Desktop") {
									return desktopControls;
								} else if (tab.name == "Tablet") {
									return tabletControls;
								} else if (tab.name == "Mobile") {
									return mobileControls;
								}
							}}
						</TabPanel>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Breakpoints" icon={more} initialOpen={false}>
						<PanelRow>
							<TextControl
								label="Desktop"
								value={breakpoints.desktop.width}
								help="Example: 1280px"
								onChange={(value) => updateSetting("desktop", "width", value)}
							/>
							<TextControl
								label="Tablet"
								value={breakpoints.tablet.width}
								help="Example: 1024px"
								onChange={(value) => updateSetting("tablet", "width", value)}
							/>
							<TextControl
								label="Mobile"
								value={breakpoints.mobile.width}
								help="Example: 425px"
								onChange={(value) => updateSetting("mobile", "width", value)}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps} />
		</>
	);
}
