<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- <link rel="icon" type="image/png" sizes="32x32" href="<?php echo ASSETS;?>/images/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo ASSETS;?>/images/favicon/favicon-16x16.png"> -->
	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<header class="top">
	<div class="container">
		<a href="/" class="logo">
			<span>Alternative Dev</span>
			<img
				src= "<?php echo THEME_URI ?>/assets/images/logos/logo.svg"
				loading="eager"
				alt="Alternative Dev Logo"
			/>
		</a>
		<label for="menu" class="menu-toggle" role="menu">
			<span class="hamburger"></span>
		</label>
		<input type="checkbox" name="menu" id="menu"/>
		<nav class="nav-main">
			<?php
				wp_nav_menu( array(
					'menu'              => "Main Menu", // (int|string|WP_Term) Desired menu. Accepts a menu ID, slug, name, or object.
					'menu_class'        => "", // (string) CSS class to use for the ul element which forms the menu. Default 'menu'.
					'menu_id'           => "", // (string) The ID that is applied to the ul element which forms the menu. Default is the menu slug, incremented.
					'container'         => "ul", // (string) Whether to wrap the ul, and what to wrap it with. Default 'div'.
					'container_class'   => "", // (string) Class that is applied to the container. Default 'menu-{menu slug}-container'.
					'container_id'      => "", // (string) The ID that is applied to the container.
					'before'            => "", // (string) Text before the link markup.
					'after'             => "", // (string) Text after the link markup.
					'link_before'       => "", // (string) Text before the link text.
					'link_after'        => "", // (string) Text after the link text.
					'depth'             => "2", // (int) How many levels of the hierarchy are to be included. 0 means all. Default 0.
				) );
			?>
		</nav>
</header>
