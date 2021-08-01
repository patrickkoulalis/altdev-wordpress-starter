<?php get_header();
?>
<main class="customer-success-inside-page">

    <?php while ( have_posts() ) : the_post(); ?>
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
    <section class="hero-banner-section" style="background-image: url(assets/images/customer-success/hero-banner.png)">
      <div class="container">
        <div class="row">
          <?php
          $customer_logo = get_field('customer_logo');
          $customer_name = get_field('customer_name');
          $customer_description = get_field('customer_description');
          $customer_link = get_permalink();
          ?>
        <div class="col-md-4 align-center">
          <div class="image-wrap">
            <img src="<?php echo $customer_logo; ?>">
          </div>
        </div>

        <div class="col-md-8 align-center">
          <div class="text-wrap">
            <p><?php echo $customer_name; ?></p>
          </div>
        </div>


      </div>
      </div>
    </section>
    <?php
		$customer_page_sections = get_field('customer_page_sections' );
	?>
	<?php
	if ($customer_page_sections != ''){
		foreach($customer_page_sections as $key => $customer_sections){
		$heading = $customer_sections['heading' ];
		$content = $customer_sections['content'];
		$image = $customer_sections['image'];
		$section_layout = $customer_sections['section_layout'];
		if($section_layout == 'right'){
			$section_class = 'image-right-section';
		}elseif ($section_layout == 'left' ){
			$section_class = 'image-left-section';
		}else{
			$section_class = 'full-width-section';
		}
	?>
    <section class="<?php echo $section_class; ?>">
      <div class="container">
        <div class="row">
        <?php  if($section_layout == 'right'){ ?>
          <div class="col-md-7">
            <div class="text-wrap" data-mh="sameheight-1">
              <?php if($heading != ''){?> <h3 class="sub-title"><?php echo $heading; ?></h3> <?php } ?>
                  <?php if($content != ''){?> <?php echo $content; ?> <?php } ?>
          </div>
          </div>
          <div class="col-md-5">
            <div class="image-wrap" data-mh="sameheight-1" style="background-image: url(<?php echo $image; ?>);">
          </div>
          </div>

        <?php }elseif($section_layout == 'left'){ ?>
          <div class="col-md-5">
            <div class="image-wrap" data-mh="sameheight-1" style="background-image: url(<?php echo $image; ?>);">
          </div>
          </div>
          <div class="col-md-7">
            <div class="text-wrap" data-mh="sameheight-1">
              <?php if($heading != ''){?> <h3 class="sub-title"><?php echo $heading; ?></h3> <?php } ?>
                  <?php if($content != ''){?> <?php echo $content; ?> <?php } ?>
          </div>
          </div>
        <?php }else { ?>
          <div class="col-md-12">
            <div class="text-wrap" data-mh="sameheight-1">
              <?php if($heading != ''){?> <h3 class="sub-title"><?php echo $heading; ?></h3> <?php } ?>
                  <?php if($content != ''){?> <?php echo $content; ?> <?php } ?>
          </div>
          </div>
        <?php } ?>
        </div>
      </div>
    </section>
  <?php } ?>
<?php } ?>
    <section class="sub-cta-section">
    <div class="container">
      <div class="contact-wrap">
        <a href="/contact-us/" class="contact-link">
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
        <a class="btn primary-btn" href="/about/request-a-demo/">Request a Demo</a>
      </div>
    </div>
  </section>
<?php endwhile; ?>
  </main>

  <?php get_footer(); ?>
