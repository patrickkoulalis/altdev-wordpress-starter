import { useState, useEffect } from "@wordpress/element";
import {
	ColorPicker,
	ColorPalette,
	GradientPicker,
} from "@wordpress/components";

function CustomColorPalette() {
	const [color, setColor] = useState("#f00");
	return (
		<ColorPalette
				colors={ colors }
				value={ color }
				onChange={ ( color ) => setColor( color ) }
		/>
}
