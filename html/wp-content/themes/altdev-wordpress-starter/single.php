<?php get_header(); ?>
	<main>
		<article class="page-section">
			<div class="container">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
			</div>
		</article>
	</main>
<?php get_footer(); ?>
