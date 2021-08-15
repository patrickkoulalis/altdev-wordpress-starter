import { __ } from "@wordpress/i18n";
import { select, dispatch, useSelect } from "@wordpress/data";
import {
	useBlockProps,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import {
	Icon,
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	CheckboxControl,
	TabPanel,
	RangeControl,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
import getBlockChildren from "../../@lib/getBlockChildren";
import getBlockInfo from "../../@lib/getBlockInfo";
import injectStyles from "../../@lib/injectStyles";
import updateBreakpoints from "../../@lib/updateBreakpoints";
import updateBreakpointsMeta from "../../@lib/updateBreakpointsMeta";
import spacingControls from "../../@lib/spacingControls";
import BREAKPOINT_TABS from "../../@lib/breakpointTabs";

const ALLOWED_BLOCKS = ["altblocks/column"];

export default function Edit({ attributes, setAttributes, clientId }) {
	const { id, breakpoints, generatedStyles } = attributes;

	const THIS_BLOCK = getBlockInfo(clientId);
	const BLOCK_CHILDREN = getBlockChildren(clientId);

	// allows for styling in save function
	useEffect(() => {
		setAttributes({ id: clientId });
	}, [clientId]);

	// useEffect(() => {
	// 	BLOCK_CHILDREN.forEach((child) => {
	// 		dispatch("core/block-editor").updateBlockAttributes(child.clientId, {
	// 			gridTemplateAreas: gridTemplateAreas,
	// 		});
	// 	});
	// }, [gridTemplateAreas]);

	setAttributes({ generatedStyles: injectStyles(id, breakpoints) });

	const blockProps = useBlockProps({
		className: `block-${id}`,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: "horizontal",
		// TODO: This line right here will for some reason break things? Look into that.
		// renderAppender: false,
	});

	return (
		<>
			{editorLabel(useBlockProps)}
			<InspectorControls key="grid-settings">
				<Panel>
					<PanelBody title="Spacing" icon={more} initialOpen={false}>
						<TabPanel
							className="my-tab-panel"
							activeClass="active-tab"
							tabs={BREAKPOINT_TABS(breakpoints)}
							initialTabName="desktop"
						>
							{(tab) => {
								const desktopControls = new spacingControls(
									setAttributes,
									breakpoints,
									"desktop"
								);
								const laptopControls = new spacingControls(
									setAttributes,
									breakpoints,
									"laptop"
								);
								const tabletControls = new spacingControls(
									setAttributes,
									breakpoints,
									"tablet"
								);
								const mobileControls = new spacingControls(
									setAttributes,
									breakpoints,
									"mobile"
								);
								if (tab.name == "desktop") {
									return desktopControls;
								} else if (tab.name == "laptop") {
									return laptopControls;
								} else if (tab.name == "tablet") {
									return tabletControls;
								} else if (tab.name == "mobile") {
									return mobileControls;
								}
							}}
						</TabPanel>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Grid Settings" icon={more} initialOpen={false}>
						<TabPanel
							className="my-tab-panel"
							activeClass="active-tab"
							tabs={BREAKPOINT_TABS(breakpoints)}
							initialTabName="desktop"
						>
							{(tab) => {
								const desktopControls = gridControls(
									setAttributes,
									breakpoints,
									"desktop"
								);
								const laptopControls = gridControls(
									setAttributes,
									breakpoints,
									"laptop"
								);
								const tabletControls = gridControls(
									setAttributes,
									breakpoints,
									"tablet"
								);
								const mobileControls = gridControls(
									setAttributes,
									breakpoints,
									"mobile"
								);
								if (tab.name == "desktop") {
									return desktopControls;
								} else if (tab.name == "laptop") {
									return laptopControls;
								} else if (tab.name == "tablet") {
									return tabletControls;
								} else if (tab.name == "mobile") {
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
								label="Laptop"
								value={breakpoints.desktop.width}
								help="Default: 1280px"
								onChange={(value) =>
									updateBreakpointsMeta(
										setAttributes,
										breakpoints,
										"laptop",
										"width",
										value
									)
								}
							/>
							<TextControl
								label="Tablet"
								value={breakpoints.tablet.width}
								help="Default: 1024px"
								onChange={(value) =>
									updateBreakpointsMeta(
										setAttributes,
										breakpoints,
										"tablet",
										"width",
										value
									)
								}
							/>
							<TextControl
								label="Mobile"
								value={breakpoints.mobile.width}
								help="Default: 425px"
								onChange={(value) =>
									updateBreakpointsMeta(
										setAttributes,
										breakpoints,
										"mobile",
										"width",
										value
									)
								}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<style>{generatedStyles}</style>
			<div {...innerBlocksProps} />
		</>
	);
}

function gridControls(setAttributes, breakpoints, device) {
	return (
		<>
			<PanelRow>
				<RangeControl
					label="Columns"
					value={breakpoints[device].properties.columns}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"columns",
							value
						)
					}
					min={0}
					max={12}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Grid Gap"
					value={breakpoints[device].properties.gridGap}
					help="Example: 1.5em"
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"gridGap",
							value
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Grid Template Columns"
					value={breakpoints[device].properties.gridTemplateColumns}
					help="Example: 2fr 100px 10%"
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"gridTemplateColumns",
							value
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Grid Template Rows"
					value={breakpoints[device].properties.gridTemplateRows}
					help="Example: 2fr 100px 10%"
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"gridTemplateRows",
							value
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<TextareaControl
					label="Grid Template Areas"
					value={breakpoints[device].properties.gridTemplateAreas}
					help='Example: "main main sidebar"'
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"gridTemplateAreas",
							value
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label="Auto-Fit"
					checked={breakpoints[device].properties.autoFit}
					onChange={(value) => {
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"autoFit",
							value
						);
					}}
				/>
				<CheckboxControl
					label="Auto-Fill"
					checked={breakpoints[device].properties.autoFill}
					onChange={(value) => {
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"autoFill",
							value
						);
					}}
				/>
			</PanelRow>
		</>
	);
}
