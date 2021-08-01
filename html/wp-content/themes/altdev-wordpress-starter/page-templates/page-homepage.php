<?php
/*
 Template Name: Censinet Homepage
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header('homepage'); ?>


			<main id="content" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
				<?php
					$hero_heading = get_field( "hero_heading" );
					$hero_content = get_field( "hero_content" );
					$hero_cta = get_field( "hero_cta" );
				?>
				<section class="hero">
					<div class="container hero__inner">
					<h1 class="hero__title"><?php echo $hero_heading ?></h1>
						<div class="hero__content"><?php echo $hero_content ?></div>
						<div class="hero__CTA">
							<?php echo do_shortcode($hero_cta) ?>
							<div class="hero__CTA-text">Get weekly insights for improving your risk posture.</div>
						</div>
					</div>
				</section>

				<?php
					$looking_heading = get_field( "looking_section_heading" );
					$looking_cards = get_field( "looking_cards" );
				?>
				<section class="section filter">
					<h2 class="section__title section__title--center"><?php echo $looking_heading ?></h2>
					<div class="container grid">

							<?php if( have_rows('looking_cards') ): ?>
								<?php while( have_rows('looking_cards') ): the_row();
									$icon = get_sub_field('card_icon');
									$heading = get_sub_field('card_heading');
									$content = get_sub_field('card_content');
									$link_hash = get_sub_field('link_hash');
								?>
								<div class="card">
									<img src="<?php echo $icon['url'] ?>" alt="">
									<h2 class="card__title"><?php echo $heading ?></h2>
									<p><?php echo $content ?></p>
									<span class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"/></svg></span>
									<a href="<?php echo $link_hash ?>" class="card__link"></a>
								</div>
							<?php endwhile; ?>
						<?php endif; ?>
					</div>
				</section>


				<?php
					$learning_section_heading = get_field( "learning_section_heading" );
					$learning_nav_links = get_field( "learning_nav_links" );
				?>
				<section id="section1" class="section section--dark-nevada">
					<h2 class="section__title section__title--center"><?php echo $learning_section_heading ?></h2>
					<?php if( have_rows('learning_nav_links') ): ?>
					<nav class="section__nav">
						<div class="container">
							<span>
									<?php while( have_rows('learning_nav_links') ): the_row();
										$link_text = get_sub_field('link_text');
										$link_hash = get_sub_field('link_hash');
									?>
									<a href="<?php echo $link_hash ?>"><?php echo $link_text ?></a>
									<?php endwhile; ?>
							</span>
						</div>
					</nav>
					<?php endif; ?>
					<span class="lead-in"></span>
				<!-- Sub Section -->
					<div class="container">
						<!-- <span class="lead-in"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"/></svg></span> -->
						<div id="problem" class="understanding">
							<div class="understanding__content">
							<?php
							$understanding = get_field('understanding_the_problem');
							if( $understanding ): ?>
								<h2><?php echo $understanding['heading']; ?></h2>
								<?php echo $understanding['content']; ?>
							<?php endif; ?>
							</div>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/va3HRKN-cm4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</div>

						<?php
							$compare = get_field('compare_list');
							if( $compare ): ?>
							<div id="compare" class="section compare-list">
								<div class="container">

								<div class="paper">
									<div class="paper__inner grid">
										<div class="compare-list__half">
											<h3><?php echo $compare['compare_left_heading']; ?></h3>
											<ul>
												<?php if( have_rows('compare_list') ): while ( have_rows('compare_list') ) : the_row(); ?>
													<?php if( have_rows('compare_left_list') ): while ( have_rows('compare_left_list') ) : the_row();
														$list_item = get_sub_field('list_item');
													?>
												<li><?php echo $list_item; ?></li>
													<?php endwhile; endif; ?>
												<?php endwhile; endif; ?>
											</ul>
										</div>
										<div class="compare-list__half">
											<h3><?php echo $compare['compare_right_heading']; ?></h3>
											<ul>
												<?php if( have_rows('compare_list') ): while ( have_rows('compare_list') ) : the_row(); ?>
													<?php if( have_rows('compare_right_list') ): while ( have_rows('compare_right_list') ) : the_row();
														$list_item = get_sub_field('list_item');
													?>
												<li><?php echo $list_item; ?></li>
													<?php endwhile; endif; ?>
												<?php endwhile; endif; ?>
											</ul>
										</div>
									</div>
								</div>
								<div class="button-group button-group--center"><a href="/third-party-vendor-risk-management-software/todays-challenges/" class="button button--secondary"><?php echo $compare['compare_cta']; ?></a></div>
								</div>
							</div>
					<?php endif; ?>

					<?php
						$start = get_field('how_to_start');
						if( $start ): ?>
					<!-- Sub Section -->
					<div id="start" class="how-to-start section">
						<div class="container">
							<h2 class=""><?php echo $start['heading']; ?></h2>
							<?php echo $start['content']; ?>
							<div class="features__grid">
									<?php
										$elements = $start['elements'];
										$listLegnth = count($elements);
										$FirstHalf = array_slice($elements, 0, round($listLegnth  / 2));
										$SecondHalf = array_slice($elements, round($listLegnth  / 2));
									?>
								<div class="features__list features__list--left">
									<ul>
										<?php foreach($FirstHalf as $array_num => $array ): ?>
										<li>
											<?php echo $array["element_name"]; ?>
											<div class="features__description--mobile">
												<h3 class="features__description-title"><?php echo $array["element_name"]; ?></h3>
												<?php echo $array["element_description"]; ?>
											</div>
										</li>
										<?php endforeach; ?>
									</ul>
								</div>
								<div class="features__descriptions paper">
									<?php foreach($elements as $array_num => $array ): ?>
									<div class="features__description paper__inner">
									<h3 class="features__description-title"><?php echo $array["element_name"]; ?></h3>
									<?php echo $array["element_description"]; ?>
									</div>
									<?php endforeach; ?>
								</div>
								<div class="features__list features__list--right">
									<ul>
										<?php foreach($SecondHalf as $array_num => $array ): ?>
										<li>
											<?php echo $array["element_name"]; ?>
											<div class="features__description--mobile">
											<h3 class="features__description-title"><?php echo $array["element_name"]; ?></h3>
											<?php echo $array["element_description"]; ?>
										</li>
										<?php endforeach; ?>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<?php endif; ?>
					<a href="#section1" class="back-to-section-top">Back to Learning</a>
				</section>

				<?php
					$exploring_section_heading = get_field( "exploring_section_heading" );
				?>
				<section id="section2" class="section">
					<h2 class="section__title section__title--center"><?php echo $exploring_section_heading; ?></h2>
					<?php if( have_rows('exploring_nav_links') ): ?>
					<nav class="section__nav">
						<div class="container">
							<span>
									<?php while( have_rows('exploring_nav_links') ): the_row();
										$link_text = get_sub_field('link_text');
										$link_hash = get_sub_field('link_hash');
									?>
									<a href="<?php echo $link_hash ?>"><?php echo $link_text ?></a>
									<?php endwhile; ?>
							</span>
						</div>
					</nav>
					<?php endif; ?>
					<span class="lead-in"></span>

					<?php
							$product_tour = get_field('product_tour');
							if( $product_tour ): ?>
						<!-- Sub Section -->
						<div id="product-tour" class="section product-tour">
							<div class="container">
								<h2><?php echo $product_tour['heading']; ?></h2>
								<div class="product-tour__wrap">
									<div class="product-tour__nav">
									<?php if( have_rows('product_tour') ): while ( have_rows('product_tour') ) : the_row(); ?>
											<?php if( have_rows('tour') ): while ( have_rows('tour') ) : the_row();
												$name = get_sub_field('name');
												$content = get_sub_field('content');
											?>
											<button><?php echo $name; ?></button>
											<div class="product-tour__slide-mobile">
												<?php echo $content; ?>
											</div>
											<?php endwhile; endif; ?>
										<?php endwhile; endif; ?>
									</div>
									<div class="product-tour__content paper">
										<div class="paper__inner">
										<?php if( have_rows('product_tour') ): while ( have_rows('product_tour') ) : the_row(); ?>
											<?php if( have_rows('tour') ): while ( have_rows('tour') ) : the_row();
												$content = get_sub_field('content');
											?>
											<div class="product-tour__slide product-tour__slide1">
												<?php echo $content; ?>
											</div>
											<?php endwhile; endif; ?>
										<?php endwhile; endif; ?>
										</div>
									</div>
								</div>
							</div>
						</div>
							<?php endif; ?>

						<!-- Sub Section -->
						<?php
						$network = get_field('vendor_network');
						if( $network ): ?>
						<div id="vendor-network" class="section vendor-network">
							<div class="container">
								<h2><?php echo $network['heading']; ?></h2>
								<?php echo $network['content']; ?>
								<div><img src="<?php echo $network['image']['url']; ?>" alt="Cenisnet Global Vendor Network Map"></div>
							</div>
						</div>
						<?php endif; ?>

						<!-- Sub Section -->
						<?php
							$solution_checklist = get_field('solution_checklist');
							if( $solution_checklist ): ?>
						<div id="tprm-checklist" class="section tprm-checklist">
							<div class="container">
								<div class="paper">
									<div class="paper__inner">
										<h2><?php echo $solution_checklist['heading']; ?></h2>
										<div class="grid">
											<div class="left">
												<ul>
													<?php if( have_rows('solution_checklist') ): while ( have_rows('solution_checklist') ) : the_row(); ?>
														<?php if( have_rows('checklist_left') ): while ( have_rows('checklist_left') ) : the_row();
															$list_item = get_sub_field('list_item');
														?>
													<li><?php echo $list_item; ?></li>
														<?php endwhile; endif; ?>
													<?php endwhile; endif; ?>
												</ul>
											</div>
											<div class="right">
											<ul>
													<?php if( have_rows('solution_checklist') ): while ( have_rows('solution_checklist') ) : the_row(); ?>
													<?php if( have_rows('checklist_right') ): while ( have_rows('checklist_right') ) : the_row();
														$list_item = get_sub_field('list_item');
													?>
													<li><?php echo $list_item; ?></li>

														<?php endwhile; endif; ?>
													<?php endwhile; endif; ?>
												</ul>
											</div>
										</div>
										<div class="button-group button-group--center"><a class="button button--secondary download-link" href="<?php echo $solution_checklist['cta_link']; ?>" target=”new”><?php echo $solution_checklist['cta_text']; ?></a></div>
									</div>
								</div>
							</div>
						</div>
						<?php endif; ?>
						<!-- Sub Section -->
						<?php
							$video_content = get_field('video_content');
							if( $video_content): ?>
						<div id="videos" class="section videos">
							<div class="container">
								<h2><?php echo $video_content['heading']; ?></h2>

								<div class="grid">
									<?php if( have_rows('video_content') ): while ( have_rows('video_content') ) : the_row(); ?>
										<?php if( have_rows('videos') ): while ( have_rows('videos') ) : the_row();
											$video_image = get_sub_field('video_image');
											$video_title = get_sub_field('video_title');
											$video_link = get_sub_field('video_link');
										?>
									<div class="card">
										<div class="card__media"><img src="<?php echo $video_image['url'] ?>" alt=""></div>
										<h3 class="card__title"><?php echo $video_title ?></h3>
										<div class="button-group button-group--center"><a href="<?php echo $video_link ?>" class="button button--secondary">Watch Now</a></div>
									</div>
										<?php endwhile; endif; ?>
									<?php endwhile; endif; ?>
								</div>
							</div>
						</div>
						<?php endif; ?>
						<a href="#section2" class="back-to-section-top">Back to Exploring</a>
				</section>


				<?php
					$selecting_section_heading = get_field( "selecting_section_heading" );
				?>
				<section id="section3" class="section section--dark-nevada">
					<h2 class="section__title section__title--center"><?php echo $selecting_section_heading; ?></h2>
					<?php if( have_rows('selecting_nav_links') ): ?>
					<nav class="section__nav">
						<div class="container">
							<span>
									<?php while( have_rows('selecting_nav_links') ): the_row();
										$link_text = get_sub_field('link_text');
										$link_hash = get_sub_field('link_hash');
									?>
									<a href="<?php echo $link_hash ?>"><?php echo $link_text ?></a>
									<?php endwhile; ?>
							</span>
						</div>
					</nav>
					<?php endif; ?>
					<span class="lead-in"></span>
					<!-- Sub Section -->
					<?php
							$deployment = get_field('deployment');
							if( $deployment): ?>
					<div id="deployment" class="section deploy">
						<div class="container">
							<h2><?php echo $deployment['heading'] ?></h2>
							<?php echo $deployment['content'] ?>
							<span class="deploy__expand-steps" role="button" tab-index="-1">Click here to see the steps</span>
						</div>
						<div class="container">
							<div class="paper deploy__steps">
								<div class="paper__inner">
									<div class="steps-wrap">
										<h2><?php echo $deployment['list_heading'] ?></h2>
										<?php echo $deployment['steps_first_paragraph'] ?>
										<ol>
											<?php if( have_rows('deployment') ): while ( have_rows('deployment') ) : the_row(); ?>
											<?php if( have_rows('steps_first_list') ): while ( have_rows('steps_first_list') ) : the_row();
												$list_item = get_sub_field('list_item');
											?>
											<li><?php echo $list_item; ?></li>
													<?php endwhile; endif; ?>
											<?php endwhile; endif; ?>
										</ol>
										<?php echo $deployment['steps_split_paragraph'] ?>
										<ol>
										<?php if( have_rows('deployment') ): while ( have_rows('deployment') ) : the_row(); ?>
											<?php if( have_rows('steps_second_list') ): while ( have_rows('steps_second_list') ) : the_row();
												$list_item = get_sub_field('list_item');
											?>
											<li><?php echo $list_item; ?></li>
												<?php endwhile; endif; ?>
											<?php endwhile; endif; ?>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
					<?php endif; ?>

					<!-- Sub Section -->
					<?php
							$roi = get_field('roi_worksheet');
							if( $roi): ?>
					<div id="roi" class="section roi">
					<div class="value-statement__inner container">
						<div class="value-statement__image"><img src="<?php echo $roi['image']['url'] ?>" loading="lazy" alt=""></div>
							<div class="value-statement__content">
								<h2 class="value-statement__title"><?php echo $roi['heading'] ?></h2>
								<?php echo $roi['content'] ?>
								<div class="value-statement__CTA">
								<a href="<?php echo $roi['cta']['link'] ?>" class="button button--primary"><?php echo $roi['cta']['text'] ?></a>
								</div>
							</div>
						</div>
					</div>
					<?php endif; ?>

					<!-- Sub Section -->
					<?php
							$advice = get_field('advice');
							if( $advice): ?>
					<div id="advice" class="section peer-advice">
						<div class="container">
							<h2><?php echo $advice['heading']; ?></h2>
							<div id="board_1"></div>
						</div>
					</div>
					<?php endif; ?>
					<a href="#section3" class="back-to-section-top">Back to Selecting</a>
				</section>


				<?php
					$using_section_heading = get_field( "using_section_heading" );
				?>
				<section id="section4" class="section partner">
					<h2 class="section__title section__title--center"><?php echo $using_section_heading; ?></h2>
					<?php if( have_rows('using_nav_links') ): ?>
					<nav class="section__nav">
						<div class="container">
							<span>
									<?php while( have_rows('using_nav_links') ): the_row();
										$link_text = get_sub_field('link_text');
										$link_hash = get_sub_field('link_hash');
									?>
									<a href="<?php echo $link_hash ?>"><?php echo $link_text ?></a>
									<?php endwhile; ?>
							</span>
						</div>
					</nav>
					<?php endif; ?>
					<span class="lead-in"></span>

					<?php
							$partner_channels = get_field('partner_channels');
							if( $partner_channels): ?>
					<div id="partner-channels" class="container">


						<div class="info">
							<h2><?php echo $partner_channels['heading'] ?></h2>
							<?php echo $partner_channels['content'] ?>
						</div>


						<div class="partner__map">
							<img src="<?php echo ASSETS . '/images/logo.svg' ?>" alt="">
							<?php if( have_rows('partner_channels') ): while ( have_rows('partner_channels') ) : the_row(); ?>
								<?php if( have_rows('channels') ): while ( have_rows('channels') ) : the_row();
									$name = get_sub_field('name');
									$description = get_sub_field('description');
								?>

							<div>
								<h3><?php echo $name; ?></h3>
								<p><?php echo $description; ?></p>
							</div>
							<?php endwhile; endif; ?>
						<?php endwhile; endif; ?>
						</div>
						<?php if($partner_channels['cta_link']): ?>
						<div class="button-group button-group--center"><a class="button button--secondary" href="<?php echo $partner_channels['cta_link']; ?>"><?php echo $partner_channels['cta_text']; ?></a></div>
						<?php endif; ?>
					</div>
					<?php endif; ?>
				</section>

			</main>

			<script type="text/javascript" src="//pym.nprapps.org/pym.v1.min.js"></script>
			<script> var pymParent = new pym.Parent('board_1', 'https://censinet.slapfive.com/b/ck2mfi4k40b810146t1ljbwak/Updated_Third_Party_Risk_Management_Best_Practices_widget_Final_Stories_Only_condensed_tabs', {allowfullscreen: true}); </script>
<?php get_footer('homepage'); ?>
