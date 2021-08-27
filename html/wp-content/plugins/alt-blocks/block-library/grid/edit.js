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
import SpacingControlsPanel from "../../components/SpacingControlsPanel";
import BreakpointControls from "../../components/BreakpointControls";
import EditorLabel from "../../components/EditorLabel";
import GeneratedStyles from "../../components/GeneratedStyles";
import getBlockChildren from "../../@lib/getBlockChildren";
import getBlockInfo from "../../@lib/getBlockInfo";
import injectStyles from "../../@lib/injectStyles";
import updateBreakpoints from "../../@lib/updateBreakpoints";
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

	setAttributes({
		generatedStyles: injectStyles(id, breakpoints),
	});

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
			<EditorLabel useBlockProps={useBlockProps} />
			<GridInspectorControls
				breakpoints={breakpoints}
				setAttributes={setAttributes}
			/>
			<GeneratedStyles styles={generatedStyles} />
			<div {...innerBlocksProps} />
		</>
	);
}

function GridInspectorControls({ breakpoints, setAttributes }) {
	return (
		<InspectorControls key="grid-settings">
			<SpacingControlsPanel
				breakpoints={breakpoints}
				setAttributes={setAttributes}
			/>
			<Panel>
				<PanelBody title="Grid Settings" icon={more} initialOpen={false}>
					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						tabs={BREAKPOINT_TABS(breakpoints)}
						initialTabName="desktop"
					>
						{(tab) => {
							const desktopControls = new gridControls(
								setAttributes,
								breakpoints,
								"desktop"
							);
							const laptopControls = new gridControls(
								setAttributes,
								breakpoints,
								"laptop"
							);
							const tabletControls = new gridControls(
								setAttributes,
								breakpoints,
								"tablet"
							);
							const mobileControls = new gridControls(
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
			<BreakpointControls
				setAttributes={setAttributes}
				breakpoints={breakpoints}
			/>
		</InspectorControls>
	);
}

function gridControls(setAttributes, breakpoints, device) {
	return (
		<>
			<PanelRow>
				<RangeControl
					label="Columns"
					value={breakpoints[device].columns}
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
					value={breakpoints[device].gridGap}
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
					value={breakpoints[device].gridTemplateColumns}
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
					value={breakpoints[device].gridTemplateRows}
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
					value={breakpoints[device].gridTemplateAreas}
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
					checked={breakpoints[device].autoFit}
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
					checked={breakpoints[device].autoFill}
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
