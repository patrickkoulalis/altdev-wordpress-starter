<?php get_header(); ?>
<div class="main error-page 404-error-page">
			<section>
				<div class="container">
				<ol class="breadcrumbs">
						<?php if(function_exists('bcn_display'))
						{
								bcn_display();
						}?>
				</ol>
				</div>
			</section>
    <div class="404-error">
      <div class="container">
			<h1>404</h1>
      <h3>We can't seem to find the page you're looking for</h3>
			<a href="/" class="btn primary-btn">Go to Homepage</a>
    </div>
		</div>
  </div>
	<style>
	.main.error-page ol.breadcrumbs {
		padding-top: 10px !important;
	}
	</style>
<?php get_footer(); ?>
