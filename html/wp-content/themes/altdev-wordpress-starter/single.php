<?php get_header(); ?>
      <main class="blog-inside-page">
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

				<?php while ( have_posts() ) : the_post(); ?>
				<?php
					$post_thumb = get_thumb();
					$cat_as_text = get_the_term_list( $post->ID, 'category', '', ', ', '' );
					$category = strip_tags($cat_as_text);
					$category_class = strtolower(str_replace(" ", "-", $category));
					$author_ID = $post->post_author;
					$author_url = get_author_posts_url($author_ID);
					$date	= get_post_time_ago($post->ID);
					$post_summary = get_field('post_summary');
				?>
         <section class="hero-section" style="background-image: url(<?php echo ASSETS; ?>/images/blog/blog_banner_bg.png)">
            <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="text-wrap">
                     <h1><?php the_title(); ?></h1>
                     <?php if($post_summary != ''){?>
										 <p><?php echo $post_summary; ?></p>
										 <?php }else{ ?>
										 <p><?php echo excerpt(34,$post->ID);?></p>
										 <?php } ?>
                     <div class="meta-wrap">
                        <p class="meta"><span class="author-name"><?php echo get_the_author_link(); ?></span> | <?php echo $date; ?></p>
                     </div>
                     <?php the_tags( '<div class="tags-wrap"><span class="tag">', '</span><span class="tag">', '</span></div>' ); ?>
                  </div>
               </div>
               <!-- <div class="col-md-4">
                  <div class="social-icons">
											<?php //echo do_shortcode('[ultimatesocial count="false" networks="twitter,linkedin,mail" url="'.get_the_permalink($post->ID).'" skin="minimal"]'); ?>
                  </div>
               </div> -->
            </div>
         </section>
         <section class="content-section">
            <div class="container">
            <div class="content-wrap">
								<?php the_content(); ?>
            </div>
            </div>
         </section>
				 <?php endwhile; ?>

				 <?php
				 $blog_subscription = get_field('blog_subscription', 'options');
				 $heading = $blog_subscription['heading'];
				 $text = $blog_subscription['text'];
				 $form_shortcode = $blog_subscription['form_shortcode'];
				 if($heading != ''){
				 ?>
         <section class="mailing-section">
            <div class="container">
               <h3><?php echo $heading; ?></h3>
               <p><?php echo $text; ?></p>
                  <?php // echo do_shortcode($form_shortcode); ?>
                  <?php echo do_shortcode('[pardot-form width="100%" height="60" id="4011" title="Join Mailing List"]');?>
            </div>
         </section>
				 <?php } ?>
					<?php echo blog_related_posts_callback(); ?>
          <?php
      		$blog_id = get_option( 'page_for_posts' , $blog_id);
      		$cta_title		= get_field('cta_title', $blog_id);
      		$cta_button		= get_field('cta_button', $blog_id);
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
         <section class="sub-cta-section">
           <div class="container">
             <div class="contact-wrap">
               <a href="/contact/" class="contact-link">
                 <svg class="plane-icon" width="17.471" height="15.279">
                   <use xlink:href="#planeIcon"></use>
                 </svg>
                 Contact Us
               </a>
             </div>
             <div class="btns-wrap">
             <!--  <a class="customer-login-link" href="">
                 <svg class="customer-login-icon" width="11.618" height="17.23">
                   <use xlink:href="#customerLoginIcon"></use>
                 </svg>
                 Customer Login
               </a>-->
               <a class="btn primary-btn" href="https://censinet.com/about/third-party-vendor-risk-management-software-demo/">Request a Demo</a>
             </div>
           </div>
         </section>
      </main>

<?php get_footer(); ?>
