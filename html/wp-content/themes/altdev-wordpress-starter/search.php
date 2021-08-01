<?php get_header();
/**
 * Template Name: Search Page Template
 */
 ?>
	<div class="main searchpage">
		<section id="search_page">
<div class="container">

	<div class="row">
	<div class="col-md-6 offset-md-3">
		<form id="search_form" class="body_search" action="<?php echo home_url(); ?>" method="get">
			<input type="text" placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>">
			<input type="submit" value="Submit">
		</form>
	</div>
	</div>
	<?php if ( have_posts() ) : $num_of_results = $wp_query->post_count; ?>

		<?php if ($num_of_results > 1) : ?>

			<h1>Search results for: <strong><?php printf( __( '%s', 'processunity' ), get_search_query() ); ?></strong></h1>
			<span class="total_result">Total Results: <?php echo $num_of_results; ?></span>


				<ul class="no_bullets">
				<?php while ( have_posts() ) : the_post(); // main loop ?>
					<li class="search_list">
					<h2><a href="<?php the_permalink() ?>" rel="" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
					<?php the_excerpt(); ?>
					<?php if (get_the_excerpt()) : ?>
						<p class="permalink"><a href="<?php the_permalink() ?>" rel="" title="<?php the_title_attribute(); ?>">Read More</a></p>
					<?php endif ?>
					</li>
				<?php endwhile; ?>
				</ul>
			<?php endif; ?>


	<?php else : ?>
		<p><strong>Your search did not bring up any results for "<?php printf( __( '%s', 'processunity' ), get_search_query() ); ?>".</strong></p>
		<?php wp_reset_postdata(); ?>
	<?php endif; ?>

</div>
		</section>
    <?php
    $cta_title		= get_field('cta_title');
    $cta_button		= get_field('cta_button');
    $cta_button_title		= $cta_button['cta_button_title'];
    $cta_button_url			= $cta_button['cta_button_url'];
    $cta_button_target	= $cta_button['cta_button_target'];
    if (isset($cta_title) && $cta_title != ''){
    ?>
    <section class="cta-section">
      <div class="container">
        <div class="text-wrap">
          <h2><?php echo $cta_title; ?></h2>
          <?php if (isset($cta_button_title) && $cta_button_title != ''){ ?>
          <div class="action-wrap">
            <a href="<?php echo $cta_button_url; ?>" target="<?php echo $cta_button_target; ?>" class="btn secondary-btn"><?php echo $cta_button_title; ?></a>
          </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <?php } ?>

	</div>
<?php get_footer(); ?>
