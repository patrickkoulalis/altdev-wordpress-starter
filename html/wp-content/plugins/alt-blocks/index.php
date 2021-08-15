<?php
/**
 * Plugin Name:       ALT Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Patrick Koulalis
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       alt-blocks
 *
 * @package           alt-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

function alt_block_section_init() {
	register_block_type(__DIR__.'/block-library/section');
	register_block_type(__DIR__.'/block-library/grid');
	register_block_type(__DIR__.'/block-library/column');
	register_block_type(__DIR__.'/block-library/box');
	register_block_type(__DIR__.'/block-library/card');
	register_block_type(__DIR__.'/block-library/list');
	register_block_type(__DIR__.'/block-library/listitem');
}
add_action( 'init', 'alt_block_section_init' );

function alt_blocks_enqueue_frontend_scripts() {
	wp_enqueue_style( 'alt-blocks-css', plugin_dir_url(__FILE__).'assets/css/alt-blocks.css', array(), date("His.", filesize(__DIR__.'/assets/css/alt-blocks.css')), false);
}
add_action('wp_enqueue_scripts', 'alt_blocks_enqueue_frontend_scripts');
function alt_blocks_enqueue_editor_scripts() {
	wp_enqueue_style( 'alt-blocks-css', plugin_dir_url(__FILE__).'assets/css/alt-blocks-editor.css', array(), date("His.", filesize(__DIR__.'/assets/css/alt-blocks-editor.css')), false);
}
add_action('enqueue_block_editor_assets', 'alt_blocks_enqueue_editor_scripts');
