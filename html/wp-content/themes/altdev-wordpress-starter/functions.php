<?php if ( ! defined( 'ABSPATH' ) ) { exit; }

define('HOME_URL',home_url());
define('THEME_URI',get_template_directory_uri());
define('THEME_CSS_URI',get_stylesheet_uri());
define('INCLUDES',THEME_URI.'/includes');
define('ASSETS',THEME_URI.'/assets');
define('IMAGES',THEME_URI.'/assets/images');
define('CSS',THEME_URI.'/assets/css');
define('JS',THEME_URI.'/assets/javascript');
define('TEXTDOMAIN','altdev');
function alt_dev_starter_setup() {

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * This theme does not use a hard-coded <title> tag in the document head,
	 * WordPress will provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/**
	 * Add post-formats support.
	 */
	add_theme_support(
		'post-formats',
		array(
			'link',
			'aside',
			'gallery',
			'image',
			'quote',
			'status',
			'video',
			'audio',
			'chat',
		)
	);

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 1568, 9999 );

	register_nav_menus(
		array(
			'primary' => esc_html__( 'Primary menu', 'altdevstarter' ),
			'footer'  => __( 'Secondary menu', 'altdevstarter' ),
		)
	);

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
			'navigation-widgets',
		)
	);

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	$logo_width  = 300;
	$logo_height = 100;

	add_theme_support(
		'custom-logo',
		array(
			'height'               => $logo_height,
			'width'                => $logo_width,
			'flex-width'           => true,
			'flex-height'          => true,
			'unlink-homepage-logo' => true,
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	// Add support for Block Styles.
	add_theme_support( 'wp-block-styles' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );

	// Add custom editor font sizes.
	add_theme_support(
		'editor-font-sizes',
		array(
			array(
				'name'      => esc_html__( 'Extra small', 'altdevstarter' ),
				'shortName' => esc_html_x( 'XS', 'Font size', 'altdevstarter' ),
				'size'      => 16,
				'slug'      => 'extra-small',
			),
			array(
				'name'      => esc_html__( 'Small', 'altdevstarter' ),
				'shortName' => esc_html_x( 'S', 'Font size', 'altdevstarter' ),
				'size'      => 18,
				'slug'      => 'small',
			),
			array(
				'name'      => esc_html__( 'Normal', 'altdevstarter' ),
				'shortName' => esc_html_x( 'M', 'Font size', 'altdevstarter' ),
				'size'      => 20,
				'slug'      => 'normal',
			),
			array(
				'name'      => esc_html__( 'Large', 'altdevstarter' ),
				'shortName' => esc_html_x( 'L', 'Font size', 'altdevstarter' ),
				'size'      => 24,
				'slug'      => 'large',
			),
			array(
				'name'      => esc_html__( 'Extra large', 'altdevstarter' ),
				'shortName' => esc_html_x( 'XL', 'Font size', 'altdevstarter' ),
				'size'      => 40,
				'slug'      => 'extra-large',
			),
			array(
				'name'      => esc_html__( 'Huge', 'altdevstarter' ),
				'shortName' => esc_html_x( 'XXL', 'Font size', 'altdevstarter' ),
				'size'      => 96,
				'slug'      => 'huge',
			),
			array(
				'name'      => esc_html__( 'Gigantic', 'altdevstarter' ),
				'shortName' => esc_html_x( 'XXXL', 'Font size', 'altdevstarter' ),
				'size'      => 144,
				'slug'      => 'gigantic',
			),
		)
	);

	// Custom background color.
	add_theme_support(
		'custom-background',
		array(
			'default-color' => 'd1e4dd',
		)
	);

	// Editor color palette.
	$black     = '#000000';
	$dark_gray = '#28303D';
	$gray      = '#39414D';
	$green     = '#D1E4DD';
	$blue      = '#D1DFE4';
	$purple    = '#D1D1E4';
	$red       = '#E4D1D1';
	$orange    = '#E4DAD1';
	$yellow    = '#EEEADD';
	$white     = '#FFFFFF';

	add_theme_support(
		'editor-color-palette',
		array(
			array(
				'name'  => esc_html__( 'Black', 'altdevstarter' ),
				'slug'  => 'black',
				'color' => $black,
			),
			array(
				'name'  => esc_html__( 'Dark gray', 'altdevstarter' ),
				'slug'  => 'dark-gray',
				'color' => $dark_gray,
			),
			array(
				'name'  => esc_html__( 'Gray', 'altdevstarter' ),
				'slug'  => 'gray',
				'color' => $gray,
			),
			array(
				'name'  => esc_html__( 'Green', 'altdevstarter' ),
				'slug'  => 'green',
				'color' => $green,
			),
			array(
				'name'  => esc_html__( 'Blue', 'altdevstarter' ),
				'slug'  => 'blue',
				'color' => $blue,
			),
			array(
				'name'  => esc_html__( 'Purple', 'altdevstarter' ),
				'slug'  => 'purple',
				'color' => $purple,
			),
			array(
				'name'  => esc_html__( 'Red', 'altdevstarter' ),
				'slug'  => 'red',
				'color' => $red,
			),
			array(
				'name'  => esc_html__( 'Orange', 'altdevstarter' ),
				'slug'  => 'orange',
				'color' => $orange,
			),
			array(
				'name'  => esc_html__( 'Yellow', 'altdevstarter' ),
				'slug'  => 'yellow',
				'color' => $yellow,
			),
			array(
				'name'  => esc_html__( 'White', 'altdevstarter' ),
				'slug'  => 'white',
				'color' => $white,
			),
		)
	);

	add_theme_support(
		'editor-gradient-presets',
		array(
			array(
				'name'     => esc_html__( 'Purple to yellow', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $yellow . ' 100%)',
				'slug'     => 'purple-to-yellow',
			),
			array(
				'name'     => esc_html__( 'Yellow to purple', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $purple . ' 100%)',
				'slug'     => 'yellow-to-purple',
			),
			array(
				'name'     => esc_html__( 'Green to yellow', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $green . ' 0%, ' . $yellow . ' 100%)',
				'slug'     => 'green-to-yellow',
			),
			array(
				'name'     => esc_html__( 'Yellow to green', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $green . ' 100%)',
				'slug'     => 'yellow-to-green',
			),
			array(
				'name'     => esc_html__( 'Red to yellow', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $yellow . ' 100%)',
				'slug'     => 'red-to-yellow',
			),
			array(
				'name'     => esc_html__( 'Yellow to red', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $red . ' 100%)',
				'slug'     => 'yellow-to-red',
			),
			array(
				'name'     => esc_html__( 'Purple to red', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $red . ' 100%)',
				'slug'     => 'purple-to-red',
			),
			array(
				'name'     => esc_html__( 'Red to purple', 'altdevstarter' ),
				'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $purple . ' 100%)',
				'slug'     => 'red-to-purple',
			),
		)
	);
	// Add support for responsive embedded content.
	add_theme_support( 'responsive-embeds' );
	// Add support for custom line height controls.
	add_theme_support( 'custom-line-height' );
	// Add support for experimental link color control.
	add_theme_support( 'experimental-link-color' );
	// Add support for experimental cover block spacing.
	add_theme_support( 'custom-spacing' );
	// Add support for custom units.
	// This was removed in WordPress 5.6 but is still required to properly support WP 5.5.
	add_theme_support( 'custom-units' );
}
add_action( 'after_setup_theme', 'alt_dev_starter_setup' );

/*-----------------------------------------------------------------------------------*/
/* Register Scripts and CSS */
/*-----------------------------------------------------------------------------------*/
function alt_enqueue_scripts() {
	wp_enqueue_style( 'main-css', ASSETS . '/css/main.css', array(), date("His.", filesize(__DIR__.'/assets/css/main.css')), false);
	wp_enqueue_script( 'main-js', ASSETS . '/js/main.js', array(), date("His.", filesize(__DIR__.'/assets/js/main.js')), true);
}
add_action('wp_enqueue_scripts', 'alt_enqueue_scripts');

/*-----------------------------------------------------------------------------------*/
/* Sidebars */
/*-----------------------------------------------------------------------------------*/
function sidebar_widgets_init() {
	register_sidebar( array(
		'name' => __( 'Main Sidebar Area', 'censinet' ),
		'id' => 'main_sidebar',
		'class'=> '',
		'description' => __( '', 'censinet' ),
		'before_widget' => '<div class="sidebar_item ">',
		'after_widget' => '</div></div>',
		'before_title' => '<div class="header"><h3>',
		'after_title' => '</h3></div><div class="content">',
	) );
}
add_action( 'widgets_init', 'sidebar_widgets_init' );

/*-----------------------------------*/
/*-----------------------------------------------------------------------------------*/
/* SVG type Add on media */
/*-----------------------------------------------------------------------------------*/
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');
/*-----------------------------------------------------------------------------------*/
/* widget_text do_shortcode */
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/* Remove Extra Spacing In HTML START */
/*-----------------------------------------------------------------------------------*/
function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');
/*-----------------------------------------------------------------------------------*/
/* Remove Extra Spacing In HTML END */
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/* Request a Demo Form */
/*-----------------------------------------------------------------------------------*/
function request_demo() {
	// print_r($_REQUEST());
	echo 'bar';
}
add_action( 'wp_ajax_custom_action', 'request_demo' );
// add_action( 'wp_ajax_nopriv_custom_action', 'request_demo' );
/*-----------------------------------------------------------------------------------*/
/* Request a Demo Form END */
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/* Register Post Type Start*/
/*-----------------------------------------------------------------------------------*/

function p2p_post_type() {

	$team_labels = array(
		'name'                => _x( 'Team', 'Team General Name', 'text_domain' ),
		'singular_name'       => _x( 'Team', 'Team Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Team', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All team', 'text_domain' ),
		'view_item'           => __( 'View team', 'text_domain' ),
		'add_new_item'        => __( 'Add New team', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit team', 'text_domain' ),
		'update_item'         => __( 'Update team', 'text_domain' ),
		'search_items'        => __( 'Search team', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$team = array(
		'label'               => __( 'team', 'text_domain' ),
		'description'         => __( 'team Description', 'text_domain' ),
		'labels'              => $team_labels,
		'supports'            => array( 'title' ),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => false,
		'capability_type'     => 'post',
	);
	$benefits_labels = array(
		'name'                => _x( 'Benefits', 'Benefits General Name', 'text_domain' ),
		'singular_name'       => _x( 'Benefit', 'Benefit Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Benefits', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Benefits', 'text_domain' ),
		'view_item'           => __( 'View Benefit', 'text_domain' ),
		'add_new_item'        => __( 'Add New Benefit', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Benefit', 'text_domain' ),
		'update_item'         => __( 'Update Benefit', 'text_domain' ),
		'search_items'        => __( 'Search Benefit', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$benefits = array(
		'label'               => __( 'benefits', 'text_domain' ),
		'description'         => __( 'benefits Description', 'text_domain' ),
		'labels'              => $benefits_labels,
		'supports'            => array( 'title' ),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => false,
		'capability_type'     => 'post',
	);
	$news_media_labels = array(
		'name'                => _x( 'News & Media', 'News & Media General Name', 'text_domain' ),
		'singular_name'       => _x( 'News & Media', 'News & Media Singular Name', 'text_domain' ),
		'menu_name'           => __( 'News & Media', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All News & Media', 'text_domain' ),
		'view_item'           => __( 'View News & Media', 'text_domain' ),
		'add_new_item'        => __( 'Add New News & Media', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit News & Media', 'text_domain' ),
		'update_item'         => __( 'Update News & Media', 'text_domain' ),
		'search_items'        => __( 'Search News & Media', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$news_media = array(
		'label'               => __( 'News & Media', 'text_domain' ),
		'description'         => __( 'News & Media Description', 'text_domain' ),
		'labels'              => $news_media_labels,
		'supports'            => array( 'title' ),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => false,
		'capability_type'     => 'post',
	);
	$press_release_labels = array(
		'name'                => _x( 'Press Release', 'Press Release General Name', 'text_domain' ),
		'singular_name'       => _x( 'Press Release', 'Press Release Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Press Release', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Press Release', 'text_domain' ),
		'view_item'           => __( 'View Press Release', 'text_domain' ),
		'add_new_item'        => __( 'Add New Press Release', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Press Release', 'text_domain' ),
		'update_item'         => __( 'Update Press Release', 'text_domain' ),
		'search_items'        => __( 'Search Press Release', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$press_release = array(
		'label'               => __( 'Press Release', 'text_domain' ),
		'description'         => __( 'Press Release Description', 'text_domain' ),
		'labels'              => $press_release_labels,
		'supports'            => array( 'title', 'editor'),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite' 			 			=> array('slug' => 'press-release','with_front' => false),
		'capability_type'     => 'post',
	);
	$careers_labels = array(
		'name'                => _x( 'Careers', 'Careers General Name', 'text_domain' ),
		'singular_name'       => _x( 'Career', 'Career Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Careers', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Careers', 'text_domain' ),
		'view_item'           => __( 'View Career', 'text_domain' ),
		'add_new_item'        => __( 'Add New Career', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Career', 'text_domain' ),
		'update_item'         => __( 'Update Career', 'text_domain' ),
		'search_items'        => __( 'Search Career', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$careers = array(
		'label'               => __( 'Careers', 'text_domain' ),
		'description'         => __( 'Careers Description', 'text_domain' ),
		'labels'              => $careers_labels,
		'supports'            => array( 'title' ),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => false,
		'capability_type'     => 'post',
	);

	$resources_labels = array(
		'name'                => _x( 'Resources', 'Resources General Name', 'text_domain' ),
		'singular_name'       => _x( 'Resource', 'Resource Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Resources', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Resources', 'text_domain' ),
		'view_item'           => __( 'View Resource', 'text_domain' ),
		'add_new_item'        => __( 'Add New Resource', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Resource', 'text_domain' ),
		'update_item'         => __( 'Update Resource', 'text_domain' ),
		'search_items'        => __( 'Search Resource', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$resources = array(
		'label'               => __( 'Resources', 'text_domain' ),
		'description'         => __( 'Resources Description', 'text_domain' ),
		'labels'              => $resources_labels,
		'supports'            => array( 'title' ),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => false,
		'capability_type'     => 'post',
	);
	$events_labels = array(
		'name'                => _x( 'Events', 'Events General Name', 'text_domain' ),
		'singular_name'       => _x( 'Event', 'Event Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Events', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Events', 'text_domain' ),
		'view_item'           => __( 'View Event', 'text_domain' ),
		'add_new_item'        => __( 'Add New Event', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'edit_item'           => __( 'Edit Event', 'text_domain' ),
		'update_item'         => __( 'Update Event', 'text_domain' ),
		'search_items'        => __( 'Search Event', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$events = array(
		'label'               => __( 'Events', 'text_domain' ),
		'description'         => __( 'Events Description', 'text_domain' ),
		'labels'              => $events_labels,
		'supports'            => array( 'title', 'excerpt', 'thumbnail'),
		'taxonomies'          => array(''),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-businessman',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => true,
		'capability_type'     => 'post',
	);
	$social_feeds = array(
		'public' => true,
		'publicly_queryable' => false,
		'exclude_from_search' => true,
		'label'  => 'Social Feeds',
		'supports' => array( 'title' )
	);

	register_post_type( 'team', $team );
	register_post_type( 'benefits', $benefits );
	register_post_type( 'news_media', $news_media );
	register_post_type( 'press_release', $press_release );
	register_post_type( 'careers', $careers );
	register_post_type( 'resources', $resources );
	register_post_type( 'events', $events );
	register_post_type( 'social_feeds', $social_feeds );
}

// Hook into the 'init' action
add_action( 'init', 'p2p_post_type', 0 );


/*-----------------------------------------------------------------------------------*/
/* Register Post Type End*/
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/* Register Custom Taxonomy */
/*-----------------------------------------------------------------------------------*/

function p2p_custom_taxonomy() {
	$team_taxonomy = array(
		'name'                       => _x( 'Team Category', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Team Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Team Categories', 'text_domain' ),
		'all_items'                  => __( 'All Team Categories', 'text_domain' ),
		'parent_item'                => __( 'Parent Category', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Category:', 'text_domain' ),
		'new_item_name'              => __( 'New Category Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Category', 'text_domain' ),
		'edit_item'                  => __( 'Edit Category', 'text_domain' ),
		'update_item'                => __( 'Update Category', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Categories with commas', 'text_domain' ),
		'search_items'               => __( 'Search Categories', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Categories', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used Categories', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
	);
	$team_args_taxonomy = array(
		'labels'                     => $team_taxonomy,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite' => array( 'slug' => 'team' )
	);
	$benefits_taxonomy = array(
		'name'                       => _x( 'Benefits Category', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Benefits Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Benefits Categories', 'text_domain' ),
		'all_items'                  => __( 'All Benefits Categories', 'text_domain' ),
		'parent_item'                => __( 'Parent Category', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Category:', 'text_domain' ),
		'new_item_name'              => __( 'New Category Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Category', 'text_domain' ),
		'edit_item'                  => __( 'Edit Category', 'text_domain' ),
		'update_item'                => __( 'Update Category', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Categories with commas', 'text_domain' ),
		'search_items'               => __( 'Search Categories', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Categories', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used Categories', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
	);
	$benefits_args_taxonomy = array(
		'labels'                     => $benefits_taxonomy,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite' => array( 'slug' => 'benefits' )
	);
	$resources_taxonomy = array(
		'name'                       => _x( 'Resources Category', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Resources Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Resources Categories', 'text_domain' ),
		'all_items'                  => __( 'All Resources Categories', 'text_domain' ),
		'parent_item'                => __( 'Parent Category', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Category:', 'text_domain' ),
		'new_item_name'              => __( 'New Category Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Category', 'text_domain' ),
		'edit_item'                  => __( 'Edit Category', 'text_domain' ),
		'update_item'                => __( 'Update Category', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Categories with commas', 'text_domain' ),
		'search_items'               => __( 'Search Categories', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Categories', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used Categories', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
	);
	$resources_args_taxonomy = array(
		'labels'                     => $resources_taxonomy,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite' => array( 'slug' => 'resources' )
	);
	$events_taxonomy = array(
		'name'                       => _x( 'Events Category', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Events Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Events Categories', 'text_domain' ),
		'all_items'                  => __( 'All Events Categories', 'text_domain' ),
		'parent_item'                => __( 'Parent Category', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Category:', 'text_domain' ),
		'new_item_name'              => __( 'New Category Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Category', 'text_domain' ),
		'edit_item'                  => __( 'Edit Category', 'text_domain' ),
		'update_item'                => __( 'Update Category', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Categories with commas', 'text_domain' ),
		'search_items'               => __( 'Search Categories', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Categories', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used Categories', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
	);
	$events_args_taxonomy = array(
		'labels'                     => $events_taxonomy,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite' => array( 'slug' => 'events' )
	);
	$news_taxonomy = array(
		'name'                       => _x( 'News Category', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'News Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'News Categories', 'text_domain' ),
		'all_items'                  => __( 'All News Categories', 'text_domain' ),
		'parent_item'                => __( 'Parent Category', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Category:', 'text_domain' ),
		'new_item_name'              => __( 'New Category Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Category', 'text_domain' ),
		'edit_item'                  => __( 'Edit Category', 'text_domain' ),
		'update_item'                => __( 'Update Category', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Categories with commas', 'text_domain' ),
		'search_items'               => __( 'Search Categories', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Categories', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used Categories', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
	);
	$news_args_taxonomy = array(
		'labels'                     => $news_taxonomy,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite' => array( 'slug' => 'news_media' )
	);
	register_taxonomy( 'team-cat', array( 'team' ), $team_args_taxonomy );
	register_taxonomy( 'benefits-cat', array( 'benefits' ), $benefits_args_taxonomy );
	register_taxonomy( 'resources-cat', array( 'resources' ), $resources_args_taxonomy );
	register_taxonomy( 'events-cat', array( 'events' ), $events_args_taxonomy );
	register_taxonomy( 'news-cat', array( 'news_media' ), $news_args_taxonomy );

}
// Hook into the 'init' action
add_action( 'init', 'p2p_custom_taxonomy', 0 );
